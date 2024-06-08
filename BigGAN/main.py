import os
import numpy as np
import torch
import base64
from io import BytesIO
from PIL import Image
from pytorch_pretrained_biggan import BigGAN, truncated_noise_sample
from flask import Flask, request, jsonify
import re
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import make_pipeline

from biggan_utils import generate_images

# Environment setup to avoid OpenMP issues
os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'

app = Flask(__name__)




def read_file(file_path):
    data = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            match = re.match(r"(\d+): '(.*?)'", line.strip())
            if match:
                index = int(match.group(1))
                label = match.group(2)
                data.append((index, label))
    return pd.DataFrame(data, columns=['Index', 'Label'])

# Read data from file
data = read_file('imagenet1000_clsidx_to_labels.txt')

# Train model
X = data['Label']
y = data['Index']
pipeline = make_pipeline(TfidfVectorizer(), RandomForestClassifier())
pipeline.fit(X, y)

def compute_similarity(input_text, label):
    input_words = set(input_text.lower().split())
    label_words = set(label.lower().split())
    common_words = input_words.intersection(label_words)
    similarity_score = len(common_words)
    return similarity_score

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json
    input_text = input_data.get('input_text')

    # Compute similarity scores between input text and all labels
    similarity_scores = [compute_similarity(input_text, label) for label in data['Label']]

    # Get the index of the label with the highest similarity score
    predicted_index = similarity_scores.index(max(similarity_scores))

    # Get the label and index
    prediction_label = data.loc[predicted_index, 'Label']
    prediction_index = str(data.loc[predicted_index, 'Index'])

    return jsonify(prediction_label, prediction_index)


@app.route('/generate', methods=['POST'])
def generate():
    ntype = request.json.get('ntype')
    image = generate_images(ntype)  # Get the generated image directly

    # Ensure img_array is in the correct format
    if isinstance(image, Image.Image):
        pil_img = image
    else:
        # Convert numpy array to PIL image
        pil_img = Image.fromarray(image)

    # Ensure the image is in RGB mode
    pil_img = pil_img.convert("RGB")

    # Save PIL image to buffer as PNG
    buffer = BytesIO()
    pil_img.save(buffer, format="PNG")

    # Get the bytes value of the buffer
    buffer_value = buffer.getvalue()

    # Convert the bytes to base64 string
    base64_image = base64.b64encode(buffer_value).decode('utf-8')

    return jsonify({'imageBase64': base64_image})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

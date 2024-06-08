import numpy as np
import torch
from pytorch_pretrained_biggan import BigGAN, truncated_noise_sample
# Load pretrained BigGAN model
from PIL import Image
model = BigGAN.from_pretrained('biggan-deep-256')

def generate_images(ntype):
    truncation = 1.0
    class_vector = np.zeros((1, 1000), dtype=np.float32)
    class_vector[0, ntype] = 1  # Set the specified class index to 1

    noise_vector = truncated_noise_sample(truncation=truncation, batch_size=1)

    # All in tensors
    noise_vector = torch.from_numpy(noise_vector)
    class_vector = torch.from_numpy(class_vector)

    # Generate images
    with torch.no_grad():
        output = model(noise_vector, class_vector, truncation)

    # If you have a GPU put back on CPU
    output = output.to('cpu')
    output = output.numpy().transpose(0, 2, 3, 1)

    img = ((output[0] + 1.) / 2. * 255).astype('uint8')  # Convert image from [-1, 1] to [0, 255] and format as uint8
    img = Image.fromarray(img)
    img = img.resize((256, 256), Image.LANCZOS)

    return img

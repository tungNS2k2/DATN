package com.tungns.service.biggan;

import ai.djl.Application;
import ai.djl.ModelException;
import ai.djl.inference.Predictor;
import ai.djl.modality.cv.Image;
import ai.djl.repository.zoo.Criteria;

import ai.djl.repository.zoo.ZooModel;
import ai.djl.training.util.ProgressBar;
import ai.djl.translate.TranslateException;


import java.io.IOException;

import java.util.Random;




import org.springframework.stereotype.Service;



@Service
public class BigGANService implements IBigGANService {
	Random random = new Random();
	
	@Override
    public Image[] generateImages(int n, int size, int title_start, int title_end) 
    		throws IOException, ModelException, TranslateException {
        Criteria<int[], Image[]> criteria = Criteria.builder()
                .optApplication(Application.CV.IMAGE_GENERATION)
                .setTypes(int[].class, Image[].class)
                .optFilter("size", String.format("%d", size))
                .optArgument("truncation", 0.4f)
                .optEngine("PyTorch")
                .optProgress(new ProgressBar())
                .build();

//        int[] input = {100, 207, 971, 970, 933};
        
        int[] input = new int[n];

        // Gán giá trị ngẫu nhiên từ 151 đến 281 cho các phần tử của mảng
        for (int i = 0; i < n; i++) {
            input[i] = title_start + random.nextInt(title_end); // 131 là 281 - 151 + 1
        }

        try (ZooModel<int[], Image[]> model = criteria.loadModel();
             Predictor<int[], Image[]> generator = model.newPredictor()) {
            return generator.predict(input);
        }
    }
    	
}

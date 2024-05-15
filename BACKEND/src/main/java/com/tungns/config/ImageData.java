package com.tungns.config;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ImageData {
    private float[][] inputs;
    private float[][] outputs;

    public ImageData(float[][] inputs, float[][] outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }

}

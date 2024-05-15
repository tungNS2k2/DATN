package com.tungns.service.biggan;

import java.io.IOException;
import java.util.List;

import ai.djl.ModelException;
import ai.djl.modality.cv.Image;
import ai.djl.translate.TranslateException;

public interface IBigGANService {
	public Image[] generateImages(int n, int size, int title, int title_end) throws IOException, ModelException, TranslateException;
	
}
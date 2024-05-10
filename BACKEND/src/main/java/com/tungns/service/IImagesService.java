package com.tungns.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.tungns.entity.Images;
import com.tungns.form.Image.ImageFilterForm;

public interface IImagesService {

	Page<Images> getAllImages(Pageable pageable, String search, ImageFilterForm form);

	public Images getImageById(int id);

}
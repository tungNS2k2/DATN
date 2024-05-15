package com.tungns.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.tungns.entity.Images;
import com.tungns.form.Image.ImageFilterForm;
import com.tungns.form.Image.imageFormCreating;

public interface IImagesService {

	Page<Images> getAllImages(Pageable pageable, String search, ImageFilterForm form);

	public Images getImageById(int id);

	void deleteImage(int id);

	void addNewImage(imageFormCreating form);

}
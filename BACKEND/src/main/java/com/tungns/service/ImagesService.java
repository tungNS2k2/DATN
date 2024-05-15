package com.tungns.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.tungns.entity.Images;
import com.tungns.form.Image.ImageFilterForm;
import com.tungns.form.Image.imageFormCreating;
import com.tungns.responsitory.IImagesRepository;
import com.tungns.specification.ImageSpecification;

@Service
public class ImagesService implements IImagesService {
	@Autowired
	private IImagesRepository imageRepository;

	
	@Autowired
	private ModelMapper model;
	
	@Override
	public Page<Images> getAllImages(Pageable pageable, String search, ImageFilterForm form) {
		
		Specification<Images> where = ImageSpecification.buildImageWhere(search, form);
		return imageRepository.findAll(where, pageable);
	}

	@Override
	public Images getImageById(int id) {
		
		return imageRepository.findById(id).get();
	}

	@Override
	public void deleteImage(int id) {
		// TODO Auto-generated method stub
		imageRepository.deleteById(id);
		
	}

	@Override
	public void addNewImage(imageFormCreating form) {
		Images image = model.map(form, Images.class);
		
		Images newImae = imageRepository.save(image);
		
	}
}

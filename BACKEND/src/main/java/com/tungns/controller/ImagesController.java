package com.tungns.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tungns.dto.ImageDTO;
import com.tungns.entity.Images;
import com.tungns.form.Image.ImageFilterForm;
import com.tungns.service.IImagesService;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "api/v1/images/")
public class ImagesController {
	@Autowired
	private IImagesService service;
	
	
	
	@Autowired
	private ModelMapper model;
	
	
	
	@GetMapping()
	public Page<ImageDTO> getAll(Pageable pageable,
			@RequestParam(value = "search", required = false) String search, ImageFilterForm form
			){
		Page<Images> imas = service.getAllImages(pageable, search, form);
		
		
		List<ImageDTO> dtos = model.map(imas.getContent(), new TypeToken<List<ImageDTO>>() {}.getType());
		Page<ImageDTO> dtoPages = new PageImpl<>(dtos, pageable, imas.getTotalElements());
		return dtoPages;
	}
	
	
	@GetMapping("/{id}")
	public ImageDTO getImageById(@PathVariable(name ="id") int id) {
		Images ima = service.getImageById(id);
		System.out.println(ima);
		
		ImageDTO imageDTO = model.map(ima, ImageDTO.class);
		
		return imageDTO;
	}
}

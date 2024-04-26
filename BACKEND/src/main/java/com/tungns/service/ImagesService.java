package com.tungns.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tungns.responsitory.IImagesRepository;

@Service
public class ImagesService implements IImagesService {
	@Autowired
	private IImagesRepository imageRepository;
}

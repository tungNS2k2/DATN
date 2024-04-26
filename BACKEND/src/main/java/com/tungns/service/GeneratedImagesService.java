package com.tungns.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tungns.responsitory.IGeneratedImagesRepository;

@Service
public class GeneratedImagesService implements IGeneratedImagesService {
	@Autowired
	private IGeneratedImagesRepository generatedImageRepository;
}

package com.tungns.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.cloudinary.Cloudinary;
import com.tungns.dto.CloundinaryDTO;

import ai.djl.modality.cv.Image;

public interface ICloundinaryService {

	Cloudinary getCloudinary();

	List<CloundinaryDTO> getAllImageCloudinary();

	List<String> uploadImagesToCloudinary(Image[] images, String folder) throws IOException;

	String deleteImage(String publicId);

	List<String> deleteAllImagesInFolder(String folder);
	public List<CloundinaryDTO> getAllImagesInFolder(String folder);
	public List<CloundinaryDTO> moveAllImagesInFolder(String sourceFolder, String targetFolder);
	
}
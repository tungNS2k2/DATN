package com.tungns.controller;


import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.tungns.service.CloudinaryService;
import com.tungns.service.ICloundinaryService;
import com.tungns.service.biggan.BigGANService;
import com.tungns.service.biggan.IBigGANService;

import ai.djl.ModelException;
import ai.djl.modality.cv.Image;
import ai.djl.translate.TranslateException;

import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.ByteArrayOutputStream;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/biggan")
public class GeneratdImagesController {

	
    @Autowired
    private IBigGANService bigGANService;
    
    @Autowired
    private ICloundinaryService cloundinaryService;
    


    @GetMapping("/generate")
    public String generateImages(@RequestParam(name ="n")int n, @RequestParam(name ="size") int size,
    		@RequestParam(name = "folder") String folder,@RequestParam(name ="title_start") int title_start, @RequestParam(name ="title_end") int title_end) {
        try {
            Image[] generatedImages = bigGANService.generateImages(n, size, title_start, title_end);
            List<String> uploadedUrls = cloundinaryService.uploadImagesToCloudinary(generatedImages, folder);
            return "Generated " + generatedImages.length + " images. Uploaded URLs: " + uploadedUrls;
        } catch (IOException | ModelException | TranslateException e) {
            e.printStackTrace();
            return "Failed to generate and upload images.";
        }
    }

    
}

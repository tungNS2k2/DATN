package com.tungns.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudinary.utils.ObjectUtils;
import com.tungns.dto.CloundinaryDTO;
import com.tungns.service.ICloundinaryService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/cloudinary")
public class CloundinaryController {

    @Autowired
    private ICloundinaryService cloudinaryService;

    @GetMapping()
    public List<CloundinaryDTO> getAllImages() {
        return cloudinaryService.getAllImageCloudinary();
    }
    
    @GetMapping("/folder")
    public List<CloundinaryDTO> getAllImagesInFolder(@RequestParam(name ="folder") String folder){
    	return cloudinaryService.getAllImagesInFolder(folder);
    }

    
    
    
    
    @DeleteMapping("/{publicId}")
    public String deleteImage(@PathVariable String publicId) {
        return cloudinaryService.deleteImage(publicId);
    }

    @DeleteMapping("/delete/folder")
    public ResponseEntity<?> deleteAllImages(@RequestParam(name ="folder") String folder) {
    	cloudinaryService.deleteAllImagesInFolder(folder);
        return new ResponseEntity<>("Delete all Image Successfully!", HttpStatus.OK);
    }
    
    @PostMapping("/move")
    public List<CloundinaryDTO> moveImages(@RequestParam("sourceFolder") String sourceFolder, @RequestParam("targetFolder") String targetFolder) {
        return cloudinaryService.moveAllImagesInFolder(sourceFolder, targetFolder);
    }
    
}

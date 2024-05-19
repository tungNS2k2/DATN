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


import com.tungns.dto.CloundinaryDTO;
import com.tungns.service.ICloundinaryService;


import java.util.List;

@RestController
@RequestMapping("/api/cloudinary")
public class CloundinaryController {

    @Autowired
    private ICloundinaryService cloudinaryService;

    @GetMapping()
    public ResponseEntity<List<CloundinaryDTO>> getAllImages() {
        List<CloundinaryDTO> images = cloudinaryService.getAllImageCloudinary();
        return ResponseEntity.ok().body(images);
    }

    @GetMapping("/folder")
    public ResponseEntity<List<CloundinaryDTO>> getAllImagesInFolder(@RequestParam(name ="folder") String folder) {
        List<CloundinaryDTO> imagesInFolder = cloudinaryService.getAllImagesInFolder(folder);
        return ResponseEntity.ok().body(imagesInFolder);
    }

    @DeleteMapping("/{publicId}")
    public ResponseEntity<String> deleteImage(@PathVariable String publicId) {
        String result = cloudinaryService.deleteImage(publicId);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/delete/folder")
    public ResponseEntity<String> deleteAllImages(@RequestParam(name ="folder") String folder) {
        cloudinaryService.deleteAllImagesInFolder(folder);
        return ResponseEntity.ok().body("Delete all Image Successfully!");
    } 

    @PostMapping("/move")
    public ResponseEntity<List<CloundinaryDTO>> moveImagesToFolder(@RequestParam("publicIds") List<String> publicIds, 
                                                                    @RequestParam("targetFolder") String targetFolder) {
        List<CloundinaryDTO> movedImages = cloudinaryService.moveSelectedImagesToFolder(publicIds, targetFolder);
        return ResponseEntity.ok().body(movedImages);
    }


}

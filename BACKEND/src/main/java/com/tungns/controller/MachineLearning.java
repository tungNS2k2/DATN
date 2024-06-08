package com.tungns.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import com.tungns.config.ImageUtils;

import java.io.ByteArrayInputStream;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.imageio.ImageIO;

import org.springframework.http.*;

import org.springframework.web.client.*;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StreamUtils;

import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MachineLearning {

    @Autowired
    private RestTemplate restTemplate;

    @PostMapping("/predict")
    public String predict(@RequestBody Map<String, String> requestBody) {
        String url = "http://localhost:5000/predict";
        
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        return response.getBody();
    }
//    @PostMapping("/generate")
//    public ResponseEntity<InputStreamResource> generateImages(@RequestParam int ntype) throws IOException {
//        String flaskUrl = "http://localhost:5000/generate";
//        RestTemplate restTemplate = new RestTemplate();
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//
//        Map<String, Object> requestBody = new HashMap<>();
//        
//        requestBody.put("ntype", ntype);
//
//        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);
//
//        ResponseEntity<byte[]> response = restTemplate.postForEntity(flaskUrl, requestEntity, byte[].class);
//
//        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
//            InputStream inputStream = new ByteArrayInputStream(response.getBody());
//            InputStreamResource resource = new InputStreamResource(inputStream);
//
//            HttpHeaders responseHeaders = new HttpHeaders();
//            responseHeaders.setContentType(MediaType.IMAGE_PNG);
//
//            return new ResponseEntity<>(resource, responseHeaders, HttpStatus.OK);
//        } else {
//            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to generate image");
//        }
//    }

    
    
    @PostMapping("/generate")
    public ResponseEntity<String> generateImages(@RequestParam int ntype) throws IOException {
        String flaskUrl = "http://localhost:5000/generate";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("ntype", ntype);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(flaskUrl, requestEntity, String.class);

        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            return ResponseEntity.ok(response.getBody()); // Trả về chuỗi Base64
        } else {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to generate image");
        }
    }
    @GetMapping("/data")
    public ResponseEntity<String[]> getData() {
        try {
            // Đọc dữ liệu từ tệp
            Resource resource = new ClassPathResource("imagenet1000_clsidx_to_labels.txt");
            InputStream inputStream = resource.getInputStream();
            byte[] bdata = FileCopyUtils.copyToByteArray(inputStream);
            String data = new String(bdata, StandardCharsets.UTF_8);
            // Chuyển dữ liệu thành mảng các dòng
            String[] dataArray = data.split("\n");
            return ResponseEntity.ok().body(dataArray);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(new String[]{"Error reading data from file"});
        }
    }
 
    
    
}


package com.tungns.controller;

import java.io.IOException;
import java.util.Map;

import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.tungns.config.file.FileManager;
import com.tungns.service.IFileService;


import org.apache.http.client.methods.HttpGet;

import java.net.URLEncoder;
import org.apache.http.HttpResponse;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/files")
@Validated
public class FileController {

	@Autowired
	private IFileService fileService;
	
	@Value("${cloudinary.cloud_name}")
    private String cloudName;

    @Value("${cloudinary.api_key}")
    private String apiKey;

    @Value("${cloudinary.api_secret}")
    private String apiSecret;

	@PostMapping(value = "/image")
	public ResponseEntity<?> upLoadImage(@RequestParam(name = "image") MultipartFile image) throws IOException {

		if (!new FileManager().isTypeFileImage(image)) {
			return new ResponseEntity<>("File must be image!", HttpStatus.UNPROCESSABLE_ENTITY);
		}

		return new ResponseEntity<String>(fileService.upLoadImage(image), HttpStatus.OK);
	}
	
	
	  	@PostMapping("/uploadImage")
	    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
	        // Khởi tạo Cloudinary client
	        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
	                "cloud_name", cloudName,
	                "api_key", apiKey,
	                "api_secret", apiSecret));

	        try {
	            // Upload file lên Cloudinary
	            Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());

	            // Trích xuất URL của ảnh từ phản hồi
	            String imageUrl = (String) uploadResult.get("url");
	            return ResponseEntity.ok(imageUrl);
	        } catch (IOException e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upload failed");
	        }
	    }
	  	
	  	 @GetMapping("/getImage")
	     public ResponseEntity<String> getImage(@RequestParam("imageName") String imageName) {
	         CloseableHttpClient httpClient = HttpClients.createDefault();
	         try {
	             // Định nghĩa URL của endpoint API FastAPI
	             String baseUrl = "http://127.0.0.1:8000/getImage";
	             
	             // Encode tên ảnh để tránh lỗi URL
	             String encodedImageName = URLEncoder.encode(imageName, "UTF-8");

	             // Tạo URL với tham số imageName
	             String url = baseUrl + "?imageName=" + encodedImageName;

	             // Tạo yêu cầu GET
	             HttpGet httpGet = new HttpGet(url);

	             // Thực hiện yêu cầu và nhận phản hồi
	             HttpResponse response = httpClient.execute(httpGet);

	             // Xử lý phản hồi từ FastAPI
	             int statusCode = response.getStatusLine().getStatusCode();
	             String responseBody = EntityUtils.toString(response.getEntity());

	             // Đóng kết nối HTTP
	             EntityUtils.consume(response.getEntity());

	             // Trả về phản hồi từ FastAPI
	             return ResponseEntity.status(statusCode).body(responseBody);
	         } catch (IOException e) {
	             e.printStackTrace();
	             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request failed");
	         } finally {
	             try {
	                 httpClient.close();
	             } catch (IOException e) {
	                 e.printStackTrace();
	             }
	         }
	     }
	  	
	  	
}


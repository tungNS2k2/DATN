package com.tungns.service;

import com.cloudinary.Cloudinary;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.api.ApiResponse;
import com.cloudinary.utils.ObjectUtils;
import com.tungns.dto.CloundinaryDTO;

import ai.djl.modality.cv.Image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

@Service
public class CloudinaryService implements ICloundinaryService {

	@Autowired
    private final Cloudinary cloudinary;
	
	@Autowired
	private ModelMapper model;

    @Autowired
    public CloudinaryService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    @Override
	public Cloudinary getCloudinary() {
        return cloudinary;
    }
    
    @Override
    public List<CloundinaryDTO> getAllImageCloudinary() {
        List<CloundinaryDTO> images = new ArrayList<>();
        try {
            Map result = cloudinary.api().resources(ObjectUtils.asMap("type", "upload", "resource_type", "image"));
            List<Map> resources = (List<Map>) result.get("resources");
            for (Map resource : resources) {
            	CloundinaryDTO image = model.map(resource, CloundinaryDTO.class);
                images.add(image);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return images;
    }
    
    @Override
    public List<CloundinaryDTO> getAllImagesInFolder(String folder) {
        List<CloundinaryDTO> images = new ArrayList<>();
        try {
            Map result = cloudinary.api().resources(ObjectUtils.asMap(
                    "type", "upload",
                    "resource_type", "image",
                    "prefix", folder + "/",
                    "max_results", 500
            ));
            List<Map<String, Object>> resources = (List<Map<String, Object>>) result.get("resources");
            for (Map<String, Object> resource : resources) {
            	CloundinaryDTO cloudinaryDTO = model.map(resource, CloundinaryDTO.class);
                images.add(cloudinaryDTO);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return images;
    }
    
    
    @Override
	public List<String> uploadImagesToCloudinary(Image[] images, String folder) throws IOException {
        List<String> uploadedUrls = new ArrayList<>();
        for (int i = 0; i < images.length; i++) {
            Image image = images[i];
            BufferedImage bufferedImage = (BufferedImage) image.getWrappedImage(); // Đảm bảo kiểu dữ liệu của image.getWrappedImage() là BufferedImage
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, "png", baos);
            byte[] imageData = baos.toByteArray();

            // Tải lên dữ liệu hình ảnh dưới dạng mảng byte lên Cloudinary
            // Đảm bảo rằng bạn đã cấu hình đúng thông tin xác thực cho đối tượng Cloudinary
            Map<String, Object> options = ObjectUtils.asMap(
                    "folder", folder,
                    "invalidate", true
                );
            Map<?, ?> uploadResult = cloudinary.uploader().upload(imageData, options);
            // Thu được URL của hình ảnh đã tải lên
            String imageUrl = (String) uploadResult.get("url");
            uploadedUrls.add(imageUrl);
        }
        return uploadedUrls;
    }
    
    @Override
	public String deleteImage(String publicId) {
        try {
            Map result = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
            return (String) result.get("result");
        } catch (Exception e) {
            e.printStackTrace();
            return "Error";
        }
    }

    @Override
    public List<String> deleteAllImagesInFolder(String folder) {
        List<String> deletedImages = new ArrayList<>();
        try {
            // Lấy tất cả các tài nguyên trong thư mục cụ thể
            Map result = cloudinary.api().resources(ObjectUtils.asMap(
                "type", "upload",
                "resource_type", "image",
                "prefix", folder + "/"
            ));
            List<Map> resources = (List<Map>) result.get("resources");
            for (Map resource : resources) {
                String publicId = (String) resource.get("public_id");
                Map deleteResult = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
                if ("ok".equals(deleteResult.get("result"))) {
                    deletedImages.add(publicId);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return deletedImages;
    }

    public List<CloundinaryDTO> moveSelectedImagesToFolder(List<String> publicIds, String targetFolder) {
        List<CloundinaryDTO> movedImages = new ArrayList<>();
        for (String publicId : publicIds) {
            CloundinaryDTO image = moveImageToFolder(publicId, targetFolder);
            if (image != null) {
                movedImages.add(image);
            }
        }
        return movedImages;
    }

    private CloundinaryDTO moveImageToFolder(String publicId, String targetFolder) {
        try {
            String newPublicId = targetFolder + "/" + publicId.substring(publicId.lastIndexOf("/") + 1);
            // Di chuyển ảnh vào thư mục mới bằng cách thay đổi public_id
            cloudinary.uploader().rename(publicId, newPublicId, ObjectUtils.emptyMap());
            // Tạo đối tượng CloundinaryDTO để biểu diễn cho ảnh đã chuyển
            CloundinaryDTO movedImage = new CloundinaryDTO();
            movedImage.setPublic_id(newPublicId);
            return movedImage;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

	
    
}
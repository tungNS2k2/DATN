package com.tungns.config;


import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import javax.imageio.ImageIO;

import ai.djl.modality.cv.Image;

public class ImageUtils {

    public static byte[] imageToBytes(Image image, String formatName) throws IOException {
        BufferedImage bufferedImage = toBufferedImage(image);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, formatName, outputStream);
        return outputStream.toByteArray();
    }

    public static BufferedImage toBufferedImage(Image image) {
        BufferedImage bufferedImage = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = bufferedImage.createGraphics();
        g2d.drawImage((java.awt.Image) image, 0, 0, null);
        g2d.dispose();
        return bufferedImage;
    }
}
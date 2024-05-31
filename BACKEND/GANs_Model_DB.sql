CREATE DATABASE  IF NOT EXISTS `gans_model_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gans_model_database`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: gans_model_database
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Accounts`
--

DROP TABLE IF EXISTS `Accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `avatar_url` varchar(250) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(800) NOT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  `status` tinyint NOT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Accounts`
--

LOCK TABLES `Accounts` WRITE;
/*!40000 ALTER TABLE `Accounts` DISABLE KEYS */;
INSERT INTO `Accounts` VALUES (1,'','helloacebg2k2@gmail.com','$2a$10$iEL9fsboa1FFMZHqM4Nx8.tGmInckdH.UwyosjMt6fS5l5WY0BCj2','USER',1,'tungabc'),(2,NULL,'admin@gmail.com','$2a$10$f6YGHWj3lpGDjBueX/8R6uD4jqNKrzVEB.MIwBIEZlgfjS0vw1ZWK','ADMIN',1,'poppy01');
/*!40000 ALTER TABLE `Accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` enum('DOG','CAT','OTHER') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image_url` varchar(250) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rate` bigint DEFAULT NULL,
  `accountId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpo29uvkhee4kmg4bveeucrk6s` (`accountId`),
  CONSTRAINT `FKpo29uvkhee4kmg4bveeucrk6s` FOREIGN KEY (`accountId`) REFERENCES `Accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES (3,'CAT','2024-05-30 18:54:14','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/m3txn35bpoly4oicfb9n','Image_1717120447477',0,1),(4,'CAT','2024-05-30 18:54:14','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/burjcalm5vkjvpgye67x','Image_1717120447477',0,1),(5,'CAT','2024-05-30 18:54:14','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/erpywyi4uj7dlpbp6uid','Image_1717120447477',0,1),(6,'CAT','2024-05-30 18:54:14','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/a7qxf8kyacxp6ia3lkmn','Image_1717120447477',0,1),(7,'CAT','2024-05-30 18:54:14','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/k1kd9l6cbrw8jqvcwdaf','Image_1717120447477',0,1),(8,'CAT','2024-05-30 18:54:14','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/fcptt8tz115virjxopyq','Image_1717120447478',0,1),(9,'CAT','2024-05-30 18:54:15','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/qhcdoguwfhjyjt7euboj','Image_1717120447478',0,1),(10,'CAT','2024-05-30 18:54:15','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/wphl2d3d1a2dz4t9thaa','Image_1717120447478',0,1),(11,'CAT','2024-05-30 18:54:15','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/sj7a9usyn5lkpdknxnbx','Image_1717120447478',0,1),(12,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/fz3nkatpcdvsbodsvbc4','Image_1717121086397',0,1),(13,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/ejc2xp7y4oagqyza40n9','Image_1717121086397',0,1),(14,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/amcit4a67eoz5zjruqac','Image_1717121086397',0,1),(15,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/bdhygr6wpzreorqyxij3','Image_1717121086397',0,1),(16,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/e5da97awdrr9c8xfrg9y','Image_1717121086397',0,1),(17,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/sbusxlrtqwpjvxthsmtg','Image_1717121086400',0,1),(18,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/z7otmhvlkvkem4bvvk1g','Image_1717121086400',0,1),(19,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/ks2ancarciplqqkukakl','Image_1717121086400',0,1),(20,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/o9izrfusoadifakf9qdo','Image_1717121086400',0,1),(21,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/iznxli5sqaelmqbdtfcn','Image_1717121086397',0,1),(22,'DOG','2024-05-30 19:04:54','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/wrjwwo2myataedzwfs9y','Image_1717121086401',0,1),(23,'DOG','2024-05-30 19:04:55','https://res.cloudinary.com/dfv44c41l/image/upload/v1/DOG/uruls2h2dgiedrkltup7','Image_1717121086401',0,1),(24,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/ffh6ixwobks0gwbjyihv','Image_1717121714743',0,1),(25,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/vp7ekshkdptqw46zow8w','Image_1717121714743',0,1),(26,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/a2gj7fhk8nb2nzcjrvi0','Image_1717121714743',0,1),(27,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/o37dz8zfu5nh3xzornkk','Image_1717121714743',0,1),(28,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/gnlalgvhuo1erj3mcmgn','Image_1717121714743',0,1),(29,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/vktnibyvvl4enoxxaqm6','Image_1717121714744',0,1),(30,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/ovlpxx6cvaakzygzxmzr','Image_1717121714744',0,1),(31,'OTHER','2024-05-30 19:15:20','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/vq5unko2s3xcxagcdx3j','Image_1717121714744',0,1),(32,'CAT','2024-05-30 19:34:48','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/hckmknt47rzsb1vbl0fn','Image_1717122874437',0,2),(33,'CAT','2024-05-30 19:34:48','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/sqi2ll5nodxfngfdz5ar','Image_1717122874437',0,2),(34,'CAT','2024-05-30 19:34:48','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/nz6v3k20qmahrqedywul','Image_1717122874437',0,2),(35,'CAT','2024-05-30 19:34:48','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/uy1x4bjmhg7xpjqaeudp','Image_1717122874437',0,2),(36,'CAT','2024-05-30 19:34:48','https://res.cloudinary.com/dfv44c41l/image/upload/v1/CAT/boaqaecwx6xy7saylsr9','Image_1717122874437',0,2),(37,'OTHER','2024-05-30 19:38:57','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/eexj9k3cyp89dg5kbq6d','Image_1717123130592',0,2),(38,'OTHER','2024-05-30 19:38:57','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/hkk5bgivvncjvltneqls','Image_1717123130592',0,2),(39,'OTHER','2024-05-30 19:38:57','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/anz1vtba1ukchkxkupk3','Image_1717123130592',0,2),(40,'OTHER','2024-05-30 19:38:57','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/avfbjxbtvrziox2zmrkx','Image_1717123130592',0,2),(41,'OTHER','2024-05-30 19:38:57','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/di69oll1ehkhk3vvyuh9','Image_1717123130592',0,2),(42,'OTHER','2024-05-30 19:38:58','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/tl9dfwzmtlvb3taxwhzk','Image_1717123130593',0,2),(43,'OTHER','2024-05-30 19:38:58','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/xojuuihoxacpxi3thp9r','Image_1717123130593',0,2),(44,'OTHER','2024-05-30 19:38:58','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/th5tbn559hf9xw4sd2s4','Image_1717123130593',0,2),(45,'OTHER','2024-05-30 19:38:58','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/oap99irnccg5krcppmux','Image_1717123130593',0,2),(46,'OTHER','2024-05-30 19:38:58','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/mh7po8ubucwpbralzp2m','Image_1717123130592',0,2),(47,'OTHER','2024-05-30 19:38:59','https://res.cloudinary.com/dfv44c41l/image/upload/v1/OTHER/vxs4eh3nrzpt9uq9ztnr','Image_1717123130593',0,2);
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-31 13:21:43

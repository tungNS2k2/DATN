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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES (1,'CAT','2024-05-26 16:01:21','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764434/samples/uabby9ahjzld7lj9r3o2.png','Image_1716764476627',0,2),(2,'CAT','2024-05-26 16:01:21','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764451/samples/mgckjw8lrpcdu8tydgq1.png','Image_1716764476627',0,2),(3,'CAT','2024-05-26 16:01:21','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764413/samples/jspvsdbe5x4o4ietj8md.png','Image_1716764476627',0,2),(4,'CAT','2024-05-26 16:01:21','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764431/samples/shsnabgzeceylbrqdwtc.png','Image_1716764476627',0,2),(5,'CAT','2024-05-26 16:01:21','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764448/samples/ycmt0oukbh2vvnln0yxq.png','Image_1716764476627',0,2),(6,'CAT','2024-05-26 16:01:22','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764459/samples/jbs5yjflqkeyhhvip57j.png','Image_1716764476627',0,2),(7,'CAT','2024-05-26 16:01:22','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764423/samples/hhndsuvtnznihcoqpl6u.png','Image_1716764476627',0,2),(8,'CAT','2024-05-26 16:08:51','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764836/samples/nlwgnvivr2romp44fngc.png','Image_1716764927689',0,2),(9,'CAT','2024-05-26 16:08:51','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764823/samples/trdb9uimky6se8kzlmzj.png','Image_1716764927689',0,2),(10,'CAT','2024-05-26 16:08:51','http://res.cloudinary.com/dfv44c41l/image/upload/v1716764830/samples/gmsgjmh2f8o9zrvlvdmw.png','Image_1716764927689',0,2),(11,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765073/samples/vmpzn9ucwtrh2svmbxun.png','Image_1716765103064',0,2),(12,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765075/samples/fvymwbsg8vlkb6qrdipm.png','Image_1716765103064',0,2),(13,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765081/samples/mibec4ptzirs84cyrvgt.png','Image_1716765103064',0,2),(14,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765067/samples/vafocahdnqq5od9xt5px.png','Image_1716765103064',0,2),(15,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765070/samples/ig6bjceeo54px4sdv1go.png','Image_1716765103064',0,2),(16,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765083/samples/flcffyi1ugr68b7ti1e8.png','Image_1716765103064',0,2),(17,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765078/samples/fc4wzy952cjkhlnzi32m.png','Image_1716765103064',0,2),(18,'DOG','2024-05-26 16:11:48','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765086/samples/i0hquebym4uy7uidr34o.png','Image_1716765103064',0,2),(19,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765817/samples/wrfr8w5utz6ulqdxht48.png','Image_1716765868015',0,2),(20,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765819/samples/avtwo112bd4ipe9pcf6q.png','Image_1716765868015',0,2),(21,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765828/samples/iqpfl2d1bkcms7inim2x.png','Image_1716765868015',0,2),(22,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765836/samples/dxlfk9pkig7sgsshodca.png','Image_1716765868015',0,2),(23,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765830/samples/ct5swujmwj6ba48xqcvm.png','Image_1716765868015',0,2),(24,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765834/samples/zqncm0u7agmpihmuvkxn.png','Image_1716765868015',0,2),(25,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765832/samples/qvqgdtmhpmrtgvodrxx2.png','Image_1716765868015',0,2),(26,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765824/samples/loqegmwtavbr87qppqny.png','Image_1716765868015',0,2),(27,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765826/samples/xrr9q2qqryy5ahq8lt3z.png','Image_1716765868015',0,2),(28,'OTHER','2024-05-26 16:24:32','http://res.cloudinary.com/dfv44c41l/image/upload/v1716765822/samples/pxc4r5bvuqt6aucww1ha.png','Image_1716765868015',0,2),(29,'CAT','2024-05-26 16:28:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766072/samples/ukcyx43y5uiww4dx738p.png','Image_1716766090924',0,1),(30,'CAT','2024-05-26 16:28:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766060/samples/i6jzo8wgrwdjywuef62t.png','Image_1716766090924',0,1),(31,'CAT','2024-05-26 16:28:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766070/samples/xwxnx4lxelrxujqau8o7.png','Image_1716766090924',0,1),(32,'CAT','2024-05-26 16:28:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766079/samples/qftzvbqt0ocewkc7q1si.png','Image_1716766090924',0,1),(33,'CAT','2024-05-26 16:28:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766062/samples/c0x8rm48ntzsg6pcd0zo.png','Image_1716766090924',0,1),(34,'CAT','2024-05-26 16:28:13','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766074/samples/pfpsd7uzix8rtil9mk9b.png','Image_1716766090924',0,1),(35,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766180/samples/xn1sdnsyductgozghuhy.png','Image_1716766214337',0,1),(36,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766157/samples/wfzbi9ox1tljewgw63bm.png','Image_1716766214337',0,1),(37,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766182/samples/tustc3o5kg0mogqz4e6j.png','Image_1716766214337',0,1),(38,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766160/samples/tiyxntjxeim1hwwxyere.png','Image_1716766214337',0,1),(39,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766185/samples/tkhj1tnqawgq8yadfpwj.png','Image_1716766214337',0,1),(40,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766162/samples/jjcbsixyahrsnim725w3.png','Image_1716766214337',0,1),(41,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766165/samples/bkiiiwfxpqgzgik75snt.png','Image_1716766214337',0,1),(42,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766177/samples/jtgdo7ut1yi7ofudbqqk.png','Image_1716766214337',0,1),(43,'CAT','2024-05-26 16:30:16','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766174/samples/p6ku4zrapqytnxjlguc5.png','Image_1716766214337',0,1),(44,'CAT','2024-05-26 16:34:52','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766468/samples/e6fwpirivclizijzraei.png','Image_1716766489738',0,1),(45,'CAT','2024-05-26 16:34:52','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766466/samples/ya09d0fbpsru4omgupjs.png','Image_1716766489738',0,1),(46,'CAT','2024-05-26 16:34:52','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766423/samples/zpmkextbyjnl0wshiy2o.png','Image_1716766489738',0,1),(47,'CAT','2024-05-26 16:34:52','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766474/samples/m5mi15lpwhdwkblkbeuo.png','Image_1716766489738',0,1),(48,'CAT','2024-05-26 16:34:52','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766425/samples/uhto0bxdsyuofjegn3sy.png','Image_1716766489738',0,1),(49,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766600/samples/bada9vy2fi4gqeojcnyg.png','Image_1716766626743',0,1),(50,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766592/samples/asbq2t5jegwsw1sr5riu.png','Image_1716766626743',0,1),(51,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766585/samples/ntj45bfa4qniz9aoecfo.png','Image_1716766626743',0,1),(52,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766595/samples/dbeuk4rx7o4vfxfcywgr.png','Image_1716766626743',0,1),(53,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766606/samples/aslylukvt1st36lmmij9.png','Image_1716766626743',0,1),(54,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766588/samples/mu5dtgmv0br3hkmjqq0p.png','Image_1716766626743',0,1),(55,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766576/samples/owkzkahvnnofq1mr6mah.png','Image_1716766626743',0,1),(56,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766582/samples/euqome6dqauns5w5s1ea.png','Image_1716766626743',0,1),(57,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766597/samples/falwr7m6jx8spfqdwzaw.png','Image_1716766626743',0,1),(58,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766604/samples/t29pdjojslzmaeqzz4cm.png','Image_1716766626743',0,1),(59,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766578/samples/z9d4cdtdycru3j2ph5iw.png','Image_1716766626743',0,1),(60,'DOG','2024-05-26 16:37:12','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766573/samples/wlwufihiso9qgwctlezw.png','Image_1716766626743',0,1),(61,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766711/samples/dpq8mv7rtrp6qtm8lta1.png','Image_1716766800486',0,1),(62,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766708/samples/dv4qtlfux64ipuokezjz.png','Image_1716766800486',0,1),(63,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766703/samples/gm2ljbkyipky1ahgdtdj.png','Image_1716766800486',0,1),(64,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766719/samples/tis6v1ovij0lkdptaaac.png','Image_1716766800486',0,1),(65,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766705/samples/twuch5xnrfflefkh6ikm.png','Image_1716766800486',0,1),(66,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766788/samples/ns3amrnd4up3lxkv36bn.png','Image_1716766800486',0,1),(67,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766742/samples/ivrqspmlac5kjskhjjey.png','Image_1716766800486',0,1),(68,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766722/samples/xxocmnljxhkuuhdclnna.png','Image_1716766800486',0,1),(69,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766725/samples/vsp2huuxtiq9isoumdlo.png','Image_1716766800486',0,1),(70,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766713/samples/zfvxbqshzh7njnyuucwr.png','Image_1716766800486',0,1),(71,'OTHER','2024-05-26 16:40:03','http://res.cloudinary.com/dfv44c41l/image/upload/v1716766784/samples/zxj7d79bwxs91hit3dcn.png','Image_1716766800486',0,1);
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

-- Dump completed on 2024-05-27  6:42:28

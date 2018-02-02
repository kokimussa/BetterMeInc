CREATE DATABASE  IF NOT EXISTS `bmi` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bmi`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: bmi
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bmi_scale`
--

DROP TABLE IF EXISTS `bmi_scale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bmi_scale` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bmiIndex` varchar(100) NOT NULL DEFAULT '',
  `meaning` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bmi_scale`
--

LOCK TABLES `bmi_scale` WRITE;
/*!40000 ALTER TABLE `bmi_scale` DISABLE KEYS */;
INSERT INTO `bmi_scale` VALUES (1,'Less Than 18.5','Underweight'),(2,'18.5 - 24.9','Normal'),(3,'25.0 - 29.9','Overweight'),(4,'Above 30','Obese');
/*!40000 ALTER TABLE `bmi_scale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `risk_factors`
--

DROP TABLE IF EXISTS `risk_factors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `risk_factors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `risk_factors`
--

LOCK TABLES `risk_factors` WRITE;
/*!40000 ALTER TABLE `risk_factors` DISABLE KEYS */;
INSERT INTO `risk_factors` VALUES (1,'Bone Loss'),(2,'Decreased Immune Function'),(3,'Cardiac Abnormalities'),(4,'Iron Deficiencies'),(5,'Miscarriage (female)'),(6,'Type 2 Diabetes'),(7,'High Blood Pressure'),(8,'Heart Disease and Strokes'),(9,'Certain Types of Cancer'),(10,'Sleep Apnea'),(11,'Osteoarthritis'),(12,'Fatty Liver Disease'),(13,'Kidney Disease');
/*!40000 ALTER TABLE `risk_factors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scale_risks`
--

DROP TABLE IF EXISTS `scale_risks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scale_risks` (
  `riskId` int(11) DEFAULT NULL,
  `scaleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scale_risks`
--

LOCK TABLES `scale_risks` WRITE;
/*!40000 ALTER TABLE `scale_risks` DISABLE KEYS */;
INSERT INTO `scale_risks` VALUES (1,1),(1,2),(2,1),(2,2),(3,1),(3,2),(4,1),(4,2),(5,1),(6,2),(6,3),(6,4),(7,2),(7,3),(7,4),(8,2),(8,3),(8,4),(9,2),(9,3),(9,4),(10,2),(10,3),(10,4),(11,2),(11,3),(11,4),(12,2),(12,3),(12,4),(13,2),(13,3),(13,4);
/*!40000 ALTER TABLE `scale_risks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-30 19:58:57

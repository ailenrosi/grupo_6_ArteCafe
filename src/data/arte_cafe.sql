CREATE DATABASE  IF NOT EXISTS `arte_cafe` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `arte_cafe`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: arte_cafe
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cafeteras'),(2,'Accesorios'),(3,'Cafe');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `Products_id` int NOT NULL,
  PRIMARY KEY (`id`,`Products_id`),
  KEY `fk_Images_Products_idx` (`Products_id`),
  CONSTRAINT `fk_Images_Products` FOREIGN KEY (`Products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'cafeteraFrancesa.jpg',1),(2,'cafeteraChemex.jpg',2),(3,'voulturno.jpg',3),(4,'cafeteraFiltro.jpg',4),(5,'molinillo.webp',5),(6,'recargable.jpg',6),(7,'tazaBlanca.jpg',7),(8,'granosCafe.jpg',8),(9,'cafe_artesanal.jpg',9),(10,'bolsa_negra.jpg',10),(11,'coffee_intens.jpg',11),(12,'combo.png',12),(13,'aeropress.webp',13),(14,'filtro.jpg',14),(15,'termometro.webp',15),(16,'tetera.jpg',16),(17,'vasoTransparente.jpg',17),(18,'balanza scale digital.webp',18);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `discount` decimal(8,2) DEFAULT NULL,
  `categories_id` int NOT NULL,
  PRIMARY KEY (`id`,`categories_id`),
  KEY `fk_Products_categories1_idx` (`categories_id`),
  CONSTRAINT `fk_Products_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Prensa Francesa','Cafetera de vidrio, embolo prensa Francesa 1 L-rose gold-negro-plata-naranja-Sabor naturalLa prensa francesa conserva los aceites naturales que los filtros absorben, lo que te permitir?? degustar un caf?? de consistencia espesa y deliciosa.',7520.00,10.00,1),(2,'Cafetera chemex','Cafetera Chemex classic series CM-6A manual original leather de filtro. La mejor opci??n para cualquier momento del d??a. Eleg?? el caf?? molido que m??s te guste y preparate para vivir una experiencia exquisita.',12500.00,10.00,1),(3,'Cafetera Volturno','Caf?? tradicional. Con un sabor concentrado y un aroma que se apodera de tu casa, tu caf?? moka es el complemento ideal para cualquier momento del d??a',10500.00,0.00,1),(4,'Cafetera filtro reutilizable','Sistema antigoteo para servir una taza de caf?? cuando quiera. El sistema antigoteo le permite servir una taza de caf?? antes de que termine el ciclo de preparaci??n completo.',6500.00,15.00,1),(5,'Molinillo de cafe','No se necesitan bater??as, energ??a ni cables largos de pl??stico para operar su molinillo port??til',4500.00,15.00,2),(6,'Capsulas recargables','Capsulas recargables para m??quina Dolce Gusto + 1 cucharita medidora 100% compatible reutilizable mas de 100 veces\n-negro\n-verde\n-plata\n-turquesa',2500.00,0.00,2),(7,'Taza cer??mica ARTE CAFE','Taza de cer??mica',750.00,15.00,2),(8,'Granos de caf?? tostado','Cafetera de vidrio, embolo prensa Francesa 1 L\n-rose gold\n-negro\n-plata\n-marron',400.00,15.00,3),(9,'Caf?? artesanal','Espresso Napoli, mezcla Signature, es un espresso lleno de sabor y bien balanceado de fuerte car??cter e intenso sabor. El proceso de tostado oscuro en conjunto con el suelo rico en nutrientes de Sud??merica, le otorga a los granos de caf?? un sabor de nueces con un toque de cocoa.',500.00,10.00,3),(10,'Caf?? molido premiun','El caf?? de origen ??nico Colombia es reconocible por su envolvente e intenso sabor. Los granos de caf?? son obtenidos de agricultores independientes y en condiciones Fairtrade. Intensidad 5 de 8.',1200.00,25.00,3),(11,'Caf?? en grano premium','Espresso Verona es siempre un favorito dentro de la variedad de Real Coffee, el aut??ntico sabor del espresso oscuro tostado italiano, con una consistencia compleja y densa. Es ideal para caf?? latte, macchiato o un buen cortado',650.00,20.00,3),(12,'Caf?? de estaci??n','Blend elaborado con granos de caf?? ar??bica Supremo, variedad Caturra- Catua??, seleccionados de las mejores fincas de Colombia, cosechados a 1600 metros de altura. Posee caracter??sticas suaves, sabor balanceado, con notas frutales, leve acidez y cuerpo medio muy arom??tico, para ser disfrutado en todo momento',1200.00,10.00,3),(13,'Cafetera AeroPress','Sistema antigoteo para servir una taza de caf?? cuando quiera\nEl sistema antigoteo le permite servir una taza de caf?? antes de que termine el ciclo de preparaci??n completo.\nCon esta cafetera se pueden preparar entre 2 y 10 (tazas grandes)/15 (tazas peque??as) de caf??. Tiene un m??ximo de 1,2 litros.\n-negro\n-plata',4300.00,0.00,1),(14,'Filtros de papel tipo Canasta','Aptos para todo tipo de cafeteras el??ctricas con portafiltros \'canasta\'',280.00,0.00,2),(15,'Termometro','Aliado perfecto de todo Barista a la hora de servir un buen caf??. La temperatura de la leche debe alcanzar una medida de 65-70??C para una espuma perfecta (y un arte latte garantizado)',1195.00,0.00,2),(16,'Pava Kettle','Tetera de acero inoxidable de f??cil uso. Ofrece un pico delgado para facilitar el vertido del agua en la preparaci??n de tu caf?? .Exclusivo pico fino y alargado que te permitir?? controlar perfectamente la ubicaci??n y el flujo de agua que vierte sobre el caf??. Es apto para fuego directo, vitrocer??mica e inducci??n.',5200.00,0.00,2),(17,'Vaso Termico','Vaso de Acrilico Frio/Calor - Doble Pared, Tapa a Rosca con sello interno para cierre hermetico Sorbete Color Blanco - No descartable',600.00,20.00,2),(18,'Balanza Digital','Balanza Digital ideal para baristas o para complemento de Cocina.',9000.00,20.00,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `avatar` varchar(500) DEFAULT NULL,
  `rol` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'emmy','espinoza','emmy0@artecafe.com','$2a$12$82oBydrClpBEPrdasbnCz.Jmq.R7rOQb5FnSvpeTIH/aSpxpRUDb2',NULL,'coffe_default.png',1),(2,'Roc??o','Rosi','rocioAdmin@artecafe.com','$2a$12$82oBydrClpBEPrdasbnCz.Jmq.R7rOQb5FnSvpeTIH/aSpxpRUDb2','564561564','coffe_default.png',1),(3,'Matias','Lopez','mati@artecafe.com','1234',NULL,'coffe_default.png',2),(4,'Jonathan','Cespedes','pheathcott1@edublogs.org','ssgaXQ9sAc',NULL,'coffe_default.png',2),(5,'julieta','sosa','julietaartecafe@gmail.com','$2a$12$zbpKjNhVIJc7T6/eOIjS3.Kfnuptnpd5umvC74L/GxWeoRlJwu0ze','2622645887','coffe_default.png',2),(6,'mela','Rosi','melacafe@cafe.com','$2a$12$fRzgdVeucNjUb0Q2BSBbau43DPlHPMkBhZiB3X1euONJiP2q1f1O6','2622645887','coffe_default.png',2),(7,'gfu','hjh','rocio@artecaf.com','$2a$12$9Ue1WYcUCfYqnorebE0B3O865/atFHhlABluDDEk/BzV5TFcLGJBK','5456','coffe_default.png',2),(8,'hkhb','hfjg','julietaartecae@gmail.com','$2a$12$O.VK4AgjHiU9F6/BrBsRc.hMJQftWO9WC8mfFTOQw6FiNuE3Ex2IG','251621','coffe_default.png',2),(9,'Ailen','Rosi','rocioUser@artecafe.com','$2a$12$82oBydrClpBEPrdasbnCz.Jmq.R7rOQb5FnSvpeTIH/aSpxpRUDb2','564561564','coffe_default.png',2),(25,'Mela','Rosi ','mela@cafe.com','$2a$12$d3Ni8PlKwUYobXAP2O5wi.KXapZbakftIqnH973Pjf2ZnX2j2EgrG','123123','1635292450515_img_.png',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-27 12:04:57

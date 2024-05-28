-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: filmbasedb
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `releaseDate` datetime NOT NULL,
  `genre` varchar(255) NOT NULL,
  `actors` text NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (6,'The Lord of the Rings: The Return of the King','2003-01-01 00:00:00','Action','Elijah Wood, Viggo Mortensen, Ian McKellen','Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.','2024-05-24 06:29:43','2024-05-26 13:07:06'),(15,'The Dark Knight','2008-01-01 00:00:00','Action','Christian Bale','When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.','2024-05-26 09:32:25','2024-05-27 07:34:53'),(16,'The Godfather Part II','1974-01-01 00:00:00','Drama','Al Pacino, Robert De Niro, Robert Duvall','The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.','2024-05-26 09:38:18','2024-05-26 09:38:18'),(18,'Schindler\'s List','1993-01-01 00:00:00','Drama','Liam Neeson, Ralph Fiennes, Ben Kingsley','In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.','2024-05-26 20:08:16','2024-05-26 20:08:16'),(19,'Forrest Gump','1994-01-01 00:00:00','Drama','Tom Hanks, Robin Wright, Gary Sinise','The history of the United States from the 1950s to the \'70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.','2024-05-26 21:38:40','2024-05-27 15:34:37'),(20,' The Shawshank Redemption','1994-01-01 00:00:00','Drama','Tim Robbins, Morgan Freeman, Bob Gunton','Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.','2024-05-26 21:46:31','2024-05-26 21:46:31'),(21,'Inception','2010-01-01 00:00:00','Action','Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page','A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.','2024-05-26 21:52:20','2024-05-26 21:52:20'),(22,' The Matrix','1999-01-01 00:00:00','Action','Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss','When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.','2024-05-27 04:28:08','2024-05-27 04:28:08'),(23,'Interstellar','2014-01-01 00:00:00','Drama','Matthew McConaughey, Anne Hathaway, Jessica Chastain','When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.','2024-05-27 06:21:43','2024-05-27 06:21:43'),(25,'Dune: Part Two','2024-01-01 00:00:00','Action','Timothée Chalamet, Zendaya, Rebecca Ferguson','Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.','2024-05-27 07:36:30','2024-05-27 07:36:30'),(27,'Gladiator','2000-01-01 00:00:00','Action','Russell Crowe, Joaquin Phoenix, Connie Nielsen','A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.','2024-05-27 07:58:39','2024-05-27 07:59:28'),(34,' The Lion King','1994-01-01 00:00:00','Animation','Jeremy Irons','Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.','2024-05-27 09:33:29','2024-05-27 09:33:29');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-28  9:39:19

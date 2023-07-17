-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 06:28 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageurl`) VALUES
(1, 'McDonald\'s (แมคโดนัลด์) - ราชดำเนิน\"', 'แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/f193b34375f84a0fb1b2b58e4320be3f_1688317413588921068.webp'),
(2, 'KFC (เคเอฟซี) - ดิโอลด์สยาม พลาซ่า', 'ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/THGFIST000007ad/hero/754914e22b1140e29572534f57c976d2_1688471924205682592.webp'),
(3, 'Burger King (เบอร์เกอร์ คิง) - จักรพงษ์', 'แฮมเบอร์เกอร์, สเต็ก, ไก่ทอด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2DKRBKGC3B3MA/hero/1ddc503777ca4c3bbcbbd41917d6186f_1688317420468055794.webp'),
(4, 'Shinkanzen Sushi (ชินคันเซ็น ซูชิ) - เมเจอร์ ปิ่นเกล้า', 'แฮมเบอร์เกอร์, สเต็ก, ไก่ทอด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2DKRBKGC3B3MA/hero/1ddc503777ca4c3bbcbbd41917d6186f_1688317420468055794.webp');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2023 at 06:03 AM
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
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageurl`, `createdAt`, `updatedAt`) VALUES
(1, 'McDonald\'s (แมคโดนัลด์) - ราชดำเนิน', 'แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/26178a911dcd4a37a298938ba5d44385_1689527143646457891.webp', '', ''),
(2, 'KFC (เคเอฟซี) - ดิโอลด์สยาม พลาซ่า', 'ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/THGFIST000007ad/hero/754914e22b1140e29572534f57c976d2_1688471924205682592.webp', '', ''),
(3, 'Burger King (เบอร์เกอร์ คิง) - จักรพงษ์', 'แฮมเบอร์เกอร์, สเต็ก, ไก่ทอด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2DKRBKGC3B3MA/hero/eeba2b84bf8f443c92974ea302e8c597_1689527142445703736.webp', '', ''),
(4, 'Shinkanzen Sushi (ชินคันเซ็น ซูชิ) - เมเจอร์ ปิ่นเกล้า', 'อาหารตามสั่ง', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C34HVY4HJGDWL2/hero/0800d000de4544a79456a4da8640dc3a_1689527117184679358.webp', '', ''),
(5, 'Domino\'s Pizza (โดมิโน่ส์ พิซซ่า) - บางลำภู', 'พิซซ่า, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C23KWBMXVA61C2/hero/3d6a6f3be9034540b1f15e21086278d7_1689527105240905207.webp', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

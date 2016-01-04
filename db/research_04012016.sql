-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2016 at 03:48 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itsurvay`
--

-- --------------------------------------------------------

--
-- Table structure for table `research`
--

CREATE TABLE IF NOT EXISTS `research` (
  `id` int(11) NOT NULL,
  `year` int(4) NOT NULL,
  `gender` enum('1','2','3') DEFAULT NULL COMMENT '1=นาย,2=นาง,3=นางสาว',
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `address_home` text,
  `address_province` int(11) DEFAULT NULL,
  `address_amphur` int(11) DEFAULT NULL,
  `address_district` int(11) DEFAULT NULL,
  `address_zipcode` int(5) DEFAULT NULL,
  `address` text,
  `province` int(11) DEFAULT NULL,
  `amphur` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `zipcode` int(5) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `do_present` varchar(10) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `university_province` int(11) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `work_name` varchar(255) DEFAULT NULL,
  `work_position` varchar(255) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `work_address` text,
  `work_street` varchar(255) DEFAULT NULL,
  `work_province` int(11) DEFAULT NULL,
  `work_amphur` int(11) DEFAULT NULL,
  `work_district` int(11) DEFAULT NULL,
  `work_zipcode` int(5) DEFAULT NULL,
  `work_phone` varchar(10) DEFAULT NULL,
  `work_email` varchar(100) DEFAULT NULL,
  `w` varchar(100) DEFAULT NULL COMMENT 'ประเภทของงานที่ทำ',
  `wt` enum('yes','no') DEFAULT NULL COMMENT 'ตรงกับสาจาที่เรียนหรือไม่',
  `other` text COMMENT 'อื่นๆ กรณีเลือกอื่นๆ',
  `parent_gender` enum('1','2','3') DEFAULT NULL COMMENT 'นาย,นาง,นางสาว',
  `parent_firstname` varchar(255) DEFAULT NULL,
  `parent_lastname` varchar(255) DEFAULT NULL,
  `parent_status` varchar(100) DEFAULT NULL,
  `parent_work` text,
  `parent_address` text,
  `detail_gender` enum('1','2','3') DEFAULT NULL,
  `detail_firstname` varchar(255) DEFAULT NULL,
  `detail_lastname` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `research`
--

INSERT INTO `research` (`id`, `year`, `gender`, `firstname`, `lastname`, `address_home`, `address_province`, `address_amphur`, `address_district`, `address_zipcode`, `address`, `province`, `amphur`, `district`, `zipcode`, `mobile`, `phone`, `email`, `do_present`, `university`, `university_province`, `department`, `work_name`, `work_position`, `salary`, `work_address`, `work_street`, `work_province`, `work_amphur`, `work_district`, `work_zipcode`, `work_phone`, `work_email`, `w`, `wt`, `other`, `parent_gender`, `parent_firstname`, `parent_lastname`, `parent_status`, `parent_work`, `parent_address`, `detail_gender`, `detail_firstname`, `detail_lastname`, `date`) VALUES
(1, 2557, '1', 'panchai', 'prasompech', '213/12', 23, 325, 2947, 34140, '439 ถ.สรรพสิทธิ์', 23, 312, 2788, 34000, '0875435550', '', 'thongtank@hotmail.com', 'working', NULL, NULL, NULL, 'วิทยาลัยเทคนิคอุบลฯ', 'ครู', 8320, 'เลขที่ 5', 'แจ้งสนิท', 23, 312, 2788, 34000, '', '', 'government_customer', 'yes', NULL, '2', 'สุภาวดี', 'ไชยสิงห์', 'มารดา', '', '', '1', 'พันชัย', 'ประสมเพชร', '2016-01-04 21:48:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `research`
--
ALTER TABLE `research`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `research`
--
ALTER TABLE `research`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

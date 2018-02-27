-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 27, 2018 at 03:56 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dcitsol1_spacica`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `username` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`username`, `password`) VALUES
('admin', '1234'),
('admin', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `imageinfo`
--

CREATE TABLE `imageinfo` (
  `imgid` int(5) NOT NULL,
  `imgname` varchar(300) NOT NULL,
  `imgtype` varchar(400) NOT NULL,
  `imgsize` varchar(400) NOT NULL,
  `parentimgid` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imageinfo`
--

INSERT INTO `imageinfo` (`imgid`, `imgname`, `imgtype`, `imgsize`, `parentimgid`) VALUES
(2, 'disney-3.jpg', 'image/jpeg', '470058', '1'),
(3, 'disney-4.jpg', 'image/jpeg', '1136127', '1'),
(4, 'gg2.jpg', 'image/jpeg', '75847', '1'),
(6, 'thumb-1.jpg', 'image/jpeg', '294684', '3'),
(7, 'thumb-2.jpg', 'image/jpeg', '24413', '3'),
(8, 'thumb-4.jpg', 'image/jpeg', '56864', '3'),
(9, '1.jpg', 'image/jpeg', '294684', '4'),
(10, '4-480.jpg', 'image/jpeg', '25839', '4'),
(11, 'thumb-13.jpg', 'image/jpeg', '76594', '4'),
(17, 'chocolate-birth-day-cake.jpg', 'image/jpeg', '294684', '10'),
(18, 'ginger.jpg', 'image/jpeg', '113503', '10'),
(19, 'gujarati-thali-full.jpg', 'image/jpeg', '548984', '10'),
(20, 'how-to-prepare-pav-bhaji-at-home.jpg', 'image/jpeg', '201482', '10'),
(21, 'hrithik_roshan_photos - copy.jpg', 'image/jpeg', '70483', '11'),
(22, 'hrithik_roshan_photos.jpg', 'image/jpeg', '70483', '11'),
(23, 'hrithik-roshan-2.jpg', 'image/jpeg', '24413', '11'),
(24, 'hrithik-roshan--61770.jpg', 'image/jpeg', '44809', '11'),
(25, 'prom-hairstyle-ideas-for-indian-men-5626fc4766ddb.jpg', 'image/jpeg', '137124', '11'),
(42, 'aamir-khan.jpg', 'image/jpeg', '27536', '16'),
(43, 'aamir-khan_34640ad0-8c28-11e5-8626-d6ed0b59308e.jpg', 'image/jpeg', '82229', '16'),
(44, 'pratidintv_1489483019.jpg', 'image/jpeg', '26629', '16'),
(45, '122-22.jpg', 'image/jpeg', '102694', '16'),
(48, 'img-20170329-wa000.jpg', 'image/jpeg', '35564', '19'),
(49, 'img-20170330-wa001.jpg', 'image/jpeg', '127879', '19'),
(50, 'land_rover_range_rover_2013-2560x1600.jpg', 'image/jpeg', '531440', '19'),
(51, '2016_vorsteiner_range_rover_v_ff_102_2-2560x1600.jpg', 'image/jpeg', '2008404', '19'),
(55, 'amirkhan.jpg', 'image/jpeg', '15695', '23'),
(56, 'amirkhja.jpg', 'image/jpeg', '8345', '23'),
(57, 'newlook.jpg', 'image/jpeg', '51348', '23'),
(58, 'aishwarya-rai-294a.jpg', 'image/jpeg', '330518', '24');

-- --------------------------------------------------------

--
-- Table structure for table `parentimginfo`
--

CREATE TABLE `parentimginfo` (
  `userid` int(11) NOT NULL,
  `image-title` varchar(50) NOT NULL,
  `image-desc` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parentimginfo`
--

INSERT INTO `parentimginfo` (`userid`, `image-title`, `image-desc`) VALUES
(19, 'hello', 'demo'),
(23, 'Amir khan', 'new loos of amir khan'),
(24, 'Aish', 'good');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `s_id` int(25) NOT NULL,
  `s_desc` varchar(2000) NOT NULL,
  `s_img` varchar(500) NOT NULL,
  `s_img_type` varchar(600) NOT NULL,
  `s_img_size` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`s_id`, `s_desc`, `s_img`, `s_img_type`, `s_img_size`) VALUES
(2, 'sdsdsddd', 'ant_man_marvel_ant_105807_3840x2160.jpg', 'image/jpeg', '2072295'),
(3, 'Iron Man, he is good hero and he is star of hollywood now can beat with him, there are three part of', 'rajinikanth_kabali-3840x2160 (1).jpg', 'image/jpeg', '1972930'),
(4, 'The new way of india is here', 'slider3.jpg', 'image/jpeg', '93357'),
(5, 'tamil movie poster', 'samantha_vijay_tamil_movie-2560x1440.jpg', 'image/jpeg', '700285');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `imageinfo`
--
ALTER TABLE `imageinfo`
  ADD PRIMARY KEY (`imgid`);

--
-- Indexes for table `parentimginfo`
--
ALTER TABLE `parentimginfo`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`s_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `imageinfo`
--
ALTER TABLE `imageinfo`
  MODIFY `imgid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT for table `parentimginfo`
--
ALTER TABLE `parentimginfo`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `s_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

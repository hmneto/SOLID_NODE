-- Adminer 4.8.1 MySQL 5.6.34 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `app`;
CREATE DATABASE `app` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `app`;

DROP TABLE IF EXISTS `installment`;
CREATE TABLE `installment` (
  `code` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `installment` (`code`, `number`, `amount`) VALUES
(123,	123,	12),
(662,	0,	988),
(662,	1,	988),
(662,	2,	988),
(662,	3,	988),
(662,	4,	988),
(662,	5,	988),
(662,	6,	988),
(662,	7,	988),
(662,	8,	988),
(662,	9,	988),
(662,	10,	988),
(662,	11,	988),
(662,	12,	988),
(277,	0,	988),
(277,	1,	988),
(277,	2,	988),
(277,	3,	988),
(277,	4,	988),
(277,	5,	988),
(277,	6,	988),
(277,	7,	988),
(277,	8,	988),
(277,	9,	988),
(277,	10,	988),
(277,	11,	988),
(277,	12,	988),
(824,	1,	988),
(824,	2,	988),
(824,	3,	988),
(824,	4,	988),
(824,	5,	988),
(824,	6,	988),
(824,	7,	988),
(824,	8,	988),
(824,	9,	988),
(824,	10,	988),
(824,	11,	988),
(824,	12,	988),
(256,	1,	988),
(256,	2,	988),
(256,	3,	988),
(256,	4,	988),
(256,	5,	988),
(256,	6,	988),
(256,	7,	988),
(256,	8,	988),
(256,	9,	988),
(256,	10,	988),
(256,	11,	988),
(256,	12,	988);

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
  `code` int(11) NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `number_installments` int(11) NOT NULL,
  `payment_method` varchar(30) NOT NULL,
  `date_timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `transaction` (`code`, `amount`, `number_installments`, `payment_method`, `date_timestamp`) VALUES
(9,	1000,	12,	'credit_card',	'2022-07-05 22:37:19'),
(105,	1000,	12,	'credit_card',	'2022-07-05 22:15:37'),
(206,	1000,	12,	'credit_card',	'2022-07-05 22:37:07'),
(256,	1000,	12,	'credit_card',	'2022-07-05 22:42:04'),
(277,	1000,	12,	'credit_card',	'2022-07-05 22:40:51'),
(289,	1000,	12,	'credit_card',	'2022-07-05 22:24:15'),
(308,	1000,	12,	'credit_card',	'2022-07-05 22:29:11'),
(341,	1000,	12,	'credit_card',	'2022-07-05 22:31:59'),
(357,	1000,	12,	'credit_card',	'2022-07-05 22:14:03'),
(418,	1000,	12,	'credit_card',	'2022-07-05 22:36:27'),
(432,	1000,	12,	'credit_card',	'2022-07-05 22:25:18'),
(448,	1000,	12,	'credit_card',	'2022-07-05 22:34:30'),
(463,	1000,	12,	'credit_card',	'2022-07-05 22:26:27'),
(536,	1000,	12,	'credit_card',	'2022-07-05 22:26:00'),
(549,	1000,	12,	'credit_card',	'2022-07-05 22:30:54'),
(599,	1000,	12,	'credit_card',	'2022-07-05 22:33:01'),
(662,	1000,	12,	'credit_card',	'2022-07-05 22:40:40'),
(691,	1000,	12,	'credit_card',	'2022-07-05 22:35:22'),
(706,	1000,	12,	'credit_card',	'2022-07-05 22:36:08'),
(735,	1000,	12,	'credit_card',	'2022-07-05 22:24:53'),
(742,	1000,	12,	'credit_card',	'2022-07-05 22:39:47'),
(789,	1000,	12,	'credit_card',	'2022-07-05 22:30:36'),
(812,	1000,	12,	'credit_card',	'2022-07-05 22:40:22'),
(824,	1000,	12,	'credit_card',	'2022-07-05 22:41:27'),
(825,	1000,	12,	'credit_card',	'2022-07-05 22:37:31'),
(826,	1000,	12,	'credit_card',	'2022-07-05 22:35:00'),
(893,	1000,	12,	'credit_card',	'2022-07-05 22:33:55'),
(901,	1000,	12,	'credit_card',	'2022-07-05 22:38:35'),
(940,	1000,	12,	'credit_card',	'2022-07-05 22:26:57'),
(970,	1000,	12,	'credit_card',	'2022-07-05 22:28:28');

-- 2022-07-06 01:42:45

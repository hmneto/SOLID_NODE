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
(102,	1000,	12,	'credit_card',	'2022-07-05 17:10:51'),
(125,	1000,	12,	'credit_card',	'2022-07-05 15:28:05'),
(126,	1000,	12,	'credit_card',	'2022-07-05 16:59:03'),
(150,	1000,	12,	'credit_card',	'2022-07-05 15:25:42'),
(154,	1000,	12,	'credit_card',	'2022-07-05 15:27:34'),
(202,	1000,	12,	'credit_card',	'2022-07-05 17:16:24'),
(394,	1000,	12,	'credit_card',	'2022-07-05 16:59:52'),
(423,	1000,	12,	'credit_card',	'2022-07-05 17:20:15'),
(459,	1000,	12,	'credit_card',	'2022-07-05 17:19:10'),
(470,	1000,	12,	'credit_card',	'2022-07-05 16:57:01'),
(476,	1000,	12,	'credit_card',	'2022-07-05 17:09:35'),
(582,	1000,	12,	'credit_card',	'2022-07-05 17:15:25'),
(742,	1000,	12,	'credit_card',	'2022-07-05 17:00:35'),
(755,	1000,	12,	'credit_card',	'2022-07-05 17:12:36'),
(784,	1000,	12,	'credit_card',	'2022-07-05 17:19:47'),
(831,	1000,	12,	'credit_card',	'2022-07-05 17:14:03'),
(843,	1000,	12,	'credit_card',	'2022-07-05 16:45:27'),
(865,	1000,	12,	'credit_card',	'2022-07-05 16:54:27'),
(979,	1000,	12,	'credit_card',	'2022-07-05 16:57:50');

-- 2022-07-06 00:26:15

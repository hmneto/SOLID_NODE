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
  `amount` float NOT NULL
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


-- 2022-07-06 21:27:33

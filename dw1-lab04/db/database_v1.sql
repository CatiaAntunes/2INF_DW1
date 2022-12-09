CREATE SCHEMA `schedules`;

USE `schedules`;

CREATE TABLE `schedule` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `color` char(7) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `lesson` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(45) NOT NULL,
  `course` varchar(45) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `group` varchar(45) DEFAULT NULL,
  `room` varchar(45) DEFAULT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `duration` int(2) NOT NULL,
  -- `schedule_id` bigint NOT NULL,
  -- KEY `schedule_id_fk_idx` (`schedule_id`),
  -- CONSTRAINT `schedule_id_fk` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'
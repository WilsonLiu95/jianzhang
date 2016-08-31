DROP TABLE IF EXISTS `docs`;

CREATE TABLE `docs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `dir` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `thumbnailUrl` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `sourceSize` varchar(11) DEFAULT NULL,
  `compressSize` varchar(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `dateFullYear` varchar(11) DEFAULT NULL,
  `dateMonth` varchar(11) DEFAULT NULL,
  `dateDate` varchar(11) DEFAULT NULL,
  `dateHours` varchar(11) DEFAULT NULL,
  `dateMinutes` varchar(11) DEFAULT NULL,
  `dateSeconds` varchar(11) DEFAULT NULL,
  `author` varchar(11) NOT NULL,
  `authorId` varchar(255) NOT NULL,
  `time` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL unique,
  `salt` varchar(255) NOT NULL unique,
  `userPassword` varchar(255) NOT NULL,
  `userAccount` varchar(255) NOT NULL unique,
  `userName` varchar(255) NOT NULL,
  `dateFullYear` varchar(11) DEFAULT NULL,
  `dateMonth` varchar(11) DEFAULT NULL,
  `dateDate` varchar(11) DEFAULT NULL,
  `dateHours` varchar(11) DEFAULT NULL,
  `dateMinutes` varchar(11) DEFAULT NULL,
  `dateSeconds` varchar(11) DEFAULT NULL,
  `time` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `account_note`.`user`;
CREATE TABLE `account_note`.`user` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
	`uid` CHAR(64) NOT NULL unique, 
	`salt` CHAR(64) NOT NULL, 
	`password` CHAR(64) NOT NULL, 
	`account` VARCHAR(255) NOT NULL unique, 
	`create_time` DATETIME NOT NULL, 
	`name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `account_note`.`bill_record`;
CREATE TABLE `account_note`.`bill_record` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
	`uid` INT(64) NOT NULL, 
	`seq_num` INT(11) NOT NULL, 
	`note_book_id` INT(11) NOT NULL, 
	`account` VARCHAR(128) NOT NULL, 
	`create_time` DATETIME NOT NULL, 
	`delete_time` DATETIME NULL, 
	`year` CHAR(4) NOT NULL, 
	`month` CHAR(2) NOT NULL, 
	`date` CHAR(2) NOT NULL, 
	`day_of_week` TINYINT(4) NOT NULL, 
	`history` VARCHAR(1024) NULL, 
	`type` TINYINT(4) NOT NULL, 
	`custom_type` INT(25) NOT NULL, 
	`comment` VARCHAR(255) NOT NULL, 
	`money` INT(11) NOT NULL, 
	PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `account_note`.`note_book`; CREATE TABLE `account_note`.`note_book` (
		`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
		`uid` INT(64) NOT NULL, 
		`note_book_name` INT(128) NOT NULL, 
		`note_book_id` INT(11) NOT NULL, 
		`create_time` DATETIME NOT NULL, 
		`delete_time` DATETIME NULL, 
		`year` CHAR(4) NOT NULL, 
		`month` CHAR(2) NOT NULL, 
		`date` CHAR(2) NOT NULL, 
		`bill_json` VARCHAR(8192) NULL, 
		`record_array` VARCHAR(8192) NULL, 
		`custom_conf` VARCHAR(2048) NULL, 
		PRIMARY KEY (`id`)
	) ENGINE = InnoDB DEFAULT CHARSET = utf8;


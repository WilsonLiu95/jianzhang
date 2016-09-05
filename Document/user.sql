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

DROP TABLE IF EXISTS `account_note`.`note_record`;
CREATE TABLE `account_note`.`note_record` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
	`uid` INT(64) NOT NULL, 

	`note_book_id` INT(11) NOT NULL, 
    `record_seq_num` INT(11) NOT NULL, 

	`create_time` DATETIME NOT NULL, 
	`update_time` DATETIME NULL,
    `state`  TINYINT(4) NOT NULL DEFAULT 0,
	
	`record_type` TINYINT(4) NOT NULL, 
	`account_type` VARCHAR(128) NOT NULL,  
	`custom_type` INT(25) NOT NULL, 

	`comment` VARCHAR(255) NOT NULL, 
	`money` INT(11) NOT NULL, 
	PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `account_note`.`note_book`;
CREATE TABLE `account_note`.`note_book` (
		`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
		`uid` INT(64) NOT NULL, 
		
        `create_time` DATETIME NOT NULL, 
		`update_time` DATETIME NULL, 
        `state`  TINYINT(4) NOT NULL DEFAULT 0,


		`note_book_name` INT(128) NOT NULL, 
		`note_book_id` INT(11) NOT NULL, 
		
        `budget` INT(11) NULL,
        `custom_conf` VARCHAR(2048) NULL, 
        
        `bill_json` VARCHAR(8192) NULL, 
		`record_array` VARCHAR(8192) NULL, 
		

		PRIMARY KEY (`id`)
	) ENGINE = InnoDB DEFAULT CHARSET = utf8;


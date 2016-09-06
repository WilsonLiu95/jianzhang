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
	`uid` CHAR(64) NOT NULL, 

	`note_book_id` INT(11)  NOT NULL,
    `record_seq_num` INT(11)  NOT NULL, 
	`user_seq_num` INT(11)  NOT NULL, 

	`create_time` DATETIME NOT NULL, 
	`update_time` DATETIME  NULL,
    `state`  TINYINT(4) NOT NULL DEFAULT 0,
	
    `day_of_week` TINYINT(4) NOT NULL, 
    `date` DATE NOT NULL,

	`record_type` TINYINT(4) NOT NULL DEFAULT 0, 
	`account_name` VARCHAR(20)  NULL,  
	`custom_name` VARCHAR(20) NOT NULL, 

	`comment` VARCHAR(255)  NULL, 
	`money`  INT(11)  NOT NULL, 
	PRIMARY KEY (`id`),
    KEY `uid_book_record` (uid,note_book_id,record_seq_num)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `account_note`.`note_book`;
CREATE TABLE `account_note`.`note_book` (
		`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
		`uid` CHAR(64) NOT NULL, 
		
        `create_time` DATETIME NOT NULL, 
		`update_time` DATETIME NULL, 
        `state`  TINYINT(4) NOT NULL DEFAULT 0,

		`note_book_name` INT(128) NOT NULL, 
		`note_book_id`  INT(11)  NOT NULL, 
		
        `budget` INT(11)  NULL,
        `custom_conf` VARCHAR(1024) NULL, 
        
		`record_array` VARCHAR(1024) NULL, 
        `bill_json` VARCHAR(8192) NULL, 
        PRIMARY KEY (`id`),
        key `uid_book` (uid,note_book_id)
	) ENGINE = InnoDB DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `account_note`.`user_config`;
CREATE TABLE `account_note`.`user_config` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
	`uid` CHAR(64) NOT NULL, 
	`bkg_img` VARCHAR(255) NOT NULL , 
	`head_url` VARCHAR(255) NOT NULL unique, 
	`age` TINYINT(4) NULL, 
	`jobs` VARCHAR(40)  NULL,
	`address` VARCHAR(128)  NULL,
	`custom_type_conf` VARCHAR(1024) NOT NULL DEFAULT "[{"custom_type":"用餐","record_type":"支出"},{"custom_type":"工资","record_type":"收入"},{"custom_type":"零食","record_type":"支出"},{"custom_type":"交通","record_type":"支出"},{"custom_type":"娱乐","record_type":"支出"},{"custom_type":"社交","record_type":"支出"},{"custom_type":"购物","record_type":"支出"}]", 
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

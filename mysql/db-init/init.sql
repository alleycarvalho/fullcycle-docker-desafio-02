USE nodedb;

CREATE TABLE IF NOT EXISTS `people` (
`id` int(9) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

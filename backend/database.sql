
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema externatic
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `king_web_site` ;

-- -----------------------------------------------------
-- Schema externatic
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `king_web_site` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `king_web_site` ;

-- -----------------------------------------------------
-- Table `administrator`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `administrator`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
    PRIMARY KEY (`id`),
  UNIQUE INDEX `mail_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `royal_assets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `assets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `number` INT NOT NULL,
  `worth` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  administrator (name, firstname, email, password)
 VALUES (
    'Dupont',
    'Jean',
    'dupont.jean@gmail.com',
    'Toto'
     ),
(
    'Durand',
    'Paul',
    'durand.paul@gmail.com',
    'Titi'
     );


      INSERT INTO
  assets(name, number, worth)VALUES("Castles", 6, 400000),("Guards", 15000, 120000), ("Canons", 110, 115000);
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Maio-2024 às 14:28
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_node_udemy`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `notices`
--

DROP TABLE IF EXISTS `notices`;
CREATE TABLE `notices` (
  `id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `title` varchar(100) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `author` varchar(100) NOT NULL,
  `date_notice` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `notices`
--

INSERT INTO `notices` (`id`, `created_at`, `updated_at`, `title`, `summary`, `description`, `author`, `date_notice`) VALUES
(16, '2024-05-17 14:48:43', '2024-05-17 14:48:43', 'Título 1', 'Resumo do título 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Maurício', '2024-05-17'),
(17, '2024-05-17 15:35:05', '2024-05-17 15:35:05', 'Título controller', 'Implementando controller', 'Implementação do controller no padrão mvc.', 'Maurício', '2024-05-18');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `notices`
--
ALTER TABLE `notices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

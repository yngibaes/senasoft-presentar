-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2023 a las 03:36:37
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `signin`
--

CREATE TABLE `signin` (
  `id_signin` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `passw` varchar(50) DEFAULT NULL,
  `f_ingreso` datetime DEFAULT NULL,
  `fk_signup` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `signin`
--

INSERT INTO `signin` (`id_signin`, `email`, `passw`, `f_ingreso`, `fk_signup`) VALUES
(12, 'mariasssa21@gmail.com', 'Ana103367.', '2023-09-18 00:00:00', NULL),
(13, 'mariasssa21@gmail.com', 'akjskajdljsad', '2023-09-18 00:00:00', NULL),
(14, 'mariasssa@gmail.com', 'sndjlsadjshajdkhjsa', '2023-09-18 00:00:00', NULL),
(15, 'mariasssa@gmail.com', 'sndjlsadjshajdkhjsa', '2023-09-18 19:56:50', NULL),
(16, 'mariasssa@gmail.com', 'sndjlsadjshajdkhjsa', '2023-09-18 20:06:47', NULL),
(17, 'mariasssa@gmail.com', 'sndjlsadjshajdkhjsa', '2023-09-18 20:07:20', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `signup`
--

CREATE TABLE `signup` (
  `id_signup` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `passw` varchar(50) DEFAULT NULL,
  `tele` varchar(15) DEFAULT NULL,
  `tipo_usuario` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `signup`
--

INSERT INTO `signup` (`id_signup`, `nombre`, `apellido`, `email`, `passw`, `tele`, `tipo_usuario`) VALUES
(25, 'Ana', 'Amaya', 'mariasssa21@gmail.com', 'Ana10336.', '3227572108', 'administrador'),
(26, NULL, NULL, 'mariasssa21@gmail.com', 'Ana10336.', NULL, NULL),
(27, NULL, NULL, 'mariasssa21@gmail.com', 'Ana10336.', NULL, NULL),
(28, 'sadsa', 'dsads', 'adasd@sadsad.sdaljkaskl', 'kljsdklajdl', 'lkjsadkljdk', 'lkjsakldj');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `signin`
--
ALTER TABLE `signin`
  ADD PRIMARY KEY (`id_signin`),
  ADD KEY `fk_signup` (`fk_signup`);

--
-- Indices de la tabla `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id_signup`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `signin`
--
ALTER TABLE `signin`
  MODIFY `id_signin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `signup`
--
ALTER TABLE `signup`
  MODIFY `id_signup` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `signin`
--
ALTER TABLE `signin`
  ADD CONSTRAINT `fk_signup` FOREIGN KEY (`fk_signup`) REFERENCES `signup` (`id_signup`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

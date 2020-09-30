-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Sep 2020 pada 13.28
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrsql`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sector` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `developers`
--

CREATE TABLE `developers` (
  `id` int(11) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `gitlab` varchar(255) DEFAULT NULL,
  `portfolio` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `repository` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `portfolios`
--

INSERT INTO `portfolios` (`id`, `name`, `description`, `link`, `repository`, `company`, `type`, `photo`, `createdAt`, `updatedAt`) VALUES
(2, 'Rizki Ganteng Banget', 'Aplikasi Keuangan Kelurahan', 'www.keuangankita.com', 'github.com/keuangankita', 'Tokopedia', 'Team', 'payload.png', '2020-09-30 05:20:11', '2020-09-30 05:35:19'),
(3, 'Rizki Ganteng Banget', 'Aplikasi Keuangan Kelurahan', 'www.keuangankita.com', 'github.com/keuangankita', 'Tokopedia', 'Team', 'payload.png', '2020-09-30 09:48:21', '2020-09-30 09:48:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `projectdevs`
--

CREATE TABLE `projectdevs` (
  `id` int(11) NOT NULL,
  `developer` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `projectdevs`
--

INSERT INTO `projectdevs` (`id`, `developer`, `message`, `price`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'Sultan', 'Project Asli', '500000', 'Aktif', '2020-09-20 02:32:46', '2020-09-20 02:32:46'),
(3, 'Sultan', 'Project Asli', '500000', 'Aktif', '2020-09-20 02:33:46', '2020-09-20 02:33:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `deadline` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `deadline`, `company`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'Rizki Ganteng', 'Rizki Ganteng', 'Rizki Ganteng', 'Rizki Ganteng', 'Rizki Ganteng', '2020-09-19 06:04:27', '2020-09-19 06:04:27'),
(2, 'Rizki Tampan', 'Rizki Tampan', 'Rizki Tampan', 'Rizki Tampan', 'Rizki Tampan', '2020-09-19 06:05:16', '2020-09-19 06:05:16'),
(3, NULL, NULL, NULL, NULL, NULL, '2020-09-19 06:07:21', '2020-09-19 06:07:21'),
(4, NULL, NULL, NULL, NULL, NULL, '2020-09-19 06:07:50', '2020-09-19 06:07:50'),
(5, NULL, NULL, NULL, NULL, NULL, '2020-09-19 06:08:05', '2020-09-19 06:08:05'),
(6, NULL, NULL, NULL, NULL, NULL, '2020-09-19 06:09:40', '2020-09-19 06:09:40'),
(9, NULL, NULL, NULL, NULL, NULL, '2020-09-23 14:13:05', '2020-09-23 14:13:05'),
(10, 'Agung Cahyadi', 'ini adalah ', '18 agustus 2022', 'Setia Jaya Budi', '20191119_235932.jpg', '2020-09-24 03:02:24', '2020-09-24 03:02:24'),
(11, 'Agung Herculas', 'ini adalah ', '18 agustus 2022', 'Setia Jaya Budi', NULL, '2020-09-24 11:56:51', '2020-09-24 11:56:51'),
(12, 'Agung Herculas', 'ini adalah ', '18 agustus 2022', 'Setia Jaya Budi', 'ex.jpg', '2020-09-24 12:03:12', '2020-09-24 12:03:12'),
(13, 'Agung Sarifudin', 'ini adalah ', '18 agustus 2022', 'Setia Jaya Budi', 'api.png', '2020-09-24 12:05:54', '2020-09-24 12:05:54'),
(14, 'Muhammad Rizki', 'Tampan BRani', '20 agustus 2022', 'Setia Jaya Budi', 'Blue and Brown How To Wear a Mask Coronavirus Awareness Poster.png', '2020-09-24 12:10:35', '2020-09-24 12:10:35'),
(15, 'Muhammad Bharudin', 'Tampan BRani', '20 agustus 2022', 'Setia Jaya Budi', 'nodejs.png', '2020-09-25 03:01:47', '2020-09-25 03:01:47'),
(16, 'Muhammad Bharudin', 'Tampan BRani', '20 agustus 2022', 'Setia Jaya Budi', 'nodejs.png', '2020-09-25 03:12:50', '2020-09-25 03:12:50'),
(17, 'Muhammad Bharudin', 'Tampan BRani', '20 agustus 2022', 'Setia Jaya Budi', 'api2.jpg', '2020-09-25 12:38:48', '2020-09-25 12:38:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200917122426-create-developer.js'),
('20200918091916-create-company.js'),
('20200919055404-create-project.js'),
('20200919063436-create-project-dev.js'),
('20200920145619-create-portfolio.js'),
('20200920152041-create-experience.js'),
('20200921010307-create-account.js'),
('20200922131919-create-user.js'),
('20200925125416-rename-column-icon-to-photo-in-experiences.js'),
('20200925125912-rename-column-image-to-photo-in-companies.js'),
('20200929024529-create-portfolio.js'),
('20200929031045-create-portfolio.js'),
('20200930095504-create-experience.js'),
('20200930102028-create-developer.js'),
('20200930103825-create-company.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'rizki07', 'rizkimuhammad2301@gmail.com', '$2a$10$bCvK.iEL4HwB0g9jeRpiwuj24t6h62c/9McG0NIzX9de0qIywAome', 'Developer', '2020-09-22 13:32:02', '2020-09-22 13:32:02'),
(2, 'rizki07', 'rizkimuhammad2301@gmail.com', '$2a$10$i2p3re/3kfFk5kKpM4/hyOcj8Q37UvGX.yRRutjeOc.cj35nyjqmS', 'Developer', '2020-09-22 13:34:31', '2020-09-22 13:34:31'),
(4, 'Muhammad Rizki', 'rizki@gmail.com', '$2a$10$OGbAZ4gGFMR0B80N4AxHlOsJMnMV2HlChYzf46UTqyEwcDO1lrJUO', 'Developer', '2020-09-24 12:09:00', '2020-09-24 12:09:00'),
(5, 'Muhammad Rizki', 'agus@gmail.com', '$2a$10$5RKrBSO0kzf5EJimOvZ.BuEPHQ35mJ2rDV2qcoSbz3ogZPbljKDdy', 'Developer', '2020-09-26 12:03:40', '2020-09-26 12:03:40'),
(6, 'Muhammad Rizki', 'dina@gmail.com', '$2a$10$1h9C34nOrmniWAUlHj8sN.QplBgcw2MYZSKoxSgK9JnbLCh7JL6QW', 'Developer', '2020-09-26 12:50:03', '2020-09-26 12:50:03'),
(8, 'ilham', 'ilham@gmail.com', '$2a$10$tmR36KZ7swYPJYuv/AOD/eViA62VJttEepwnJwzlTe2iFpOjkA2yS', 'Developer', '2020-09-28 11:58:23', '2020-09-28 11:58:23');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `developers`
--
ALTER TABLE `developers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `projectdevs`
--
ALTER TABLE `projectdevs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `developers`
--
ALTER TABLE `developers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `projectdevs`
--
ALTER TABLE `projectdevs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

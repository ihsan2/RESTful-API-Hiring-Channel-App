-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Jan 2020 pada 05.17
-- Versi server: 10.1.37-MariaDB
-- Versi PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hiring_channel_app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id`, `email`, `password`, `name`, `image`, `location`, `description`) VALUES
('12', 'sdasda', 'dasdas', 'ans', 'dasd', 'SINJAI', 'dasd'),
('13', 'nihsan727@gmail.com', 'dasd', 'haris', 'sada', 'asdas', 'dasd'),
('444a141a-979d-42ae-ae38-25a18e57ae39', 'p1@gmail.com', '1234', 'P1', 'image-1577322550301.jpg', 'MKS', 'perusahnna 1'),
('f1d9317d-1606-4844-aa75-3cd962ae85b7', 'coca@gmail.com', '1234', 'Coca', 'sdasd', 'Banten, Indonesia', 'Coca is drink');

-- --------------------------------------------------------

--
-- Struktur dari tabel `engineer`
--

CREATE TABLE `engineer` (
  `id` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `skill` varchar(100) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `expected_salary` bigint(20) DEFAULT NULL,
  `showcase` varchar(150) DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `engineer`
--

INSERT INTO `engineer` (`id`, `email`, `password`, `name`, `image`, `description`, `skill`, `location`, `date_of_birth`, `expected_salary`, `showcase`, `date_created`, `date_updated`) VALUES
('07ddc477-b13a-4651-9585-8f4454b43fea', 'noelsinggih@gmail.com', '1234', 'Noel Singgih', 'image-1576478574239.jpg', 'Back-End Developer', 'Phyton, Java', 'Jaipur, India', '1987-08-19', 555, 'github.com/noel19', '2019-12-16 13:42:54', '2019-12-16 13:42:54'),
('0b287e24-b972-4e6b-8fd4-04a255e66d0b', 'philipr@gmail.com', '1234', 'Philip Rowland', 'image-1576478761375.jpg', 'Back-End Developer', 'Ruby, R', 'Lund, Swedia', '1986-09-04', 565, 'github.com/philip4', '2019-12-16 13:46:01', '2019-12-16 13:46:01'),
('17121c6a-81bf-4bf9-9228-2272cc4816eb', 'michaelmartens@gmail.com', '1234', 'Michael Martens', 'image-1576478448872.jpg', 'Back-End Developer', 'C++, Ruby, C#', 'Birmingham, Inggris', '1987-08-17', 570, 'github.com/michaelmar17', '2019-12-16 13:40:48', '2019-12-16 13:40:48'),
('17c70602-29f3-44b2-b2d2-fdda3efd2ef2', 'iip@gmail.com', '1234', 'IIP Aja', 'image-1577747039316.jpg', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-31 06:03:59', '2019-12-31 06:03:59'),
('1d982f1a-fc80-405b-8b77-32483155c7c2', 'ulrichfrek@gmail.com', '1234', 'Ulrich Freking', 'image-1576480286348.jpg', 'Back-End Developer', 'PHP, Java, Ruby, C#, R', 'Mancheste, Inggris', '1991-07-27', 740, 'github.com/ulrich27', '2019-12-16 14:11:26', '2019-12-16 14:11:26'),
('1df845eb-7e54-4025-ab4a-b990d90d728f', 'austinwade@gmail.com', '1234', 'Austin Wade', 'image-1576476118059.jpg', 'Back-End Developer', 'Javascript, React.js, Node.js', 'Victoria, Australia', '1991-05-14', 500, 'github.com/austin14', '2019-12-16 13:01:58', '2019-12-16 13:01:58'),
('301662d5-8607-41d2-86ce-08b41d754741', 'patrick@gmail.com', '1234', 'Patrick Neisen', 'image-1576478683792.jpg', 'Back-End Developer', 'Java, Javascript', 'Kiruna, Swedia', '1981-02-03', 570, 'github.com/patrick23', '2019-12-16 13:44:43', '2019-12-16 13:44:43'),
('3ed7fecd-75ba-4c48-86ba-ad01db378025', 'thomasruff@gmail.com', '1234', 'Thomas Ruffing', 'image-1576480183847.jpg', 'Full-Stack Developer', 'SASS, HTML, CSS, PHP, Javascript', 'Skive, Denmark', '1988-06-03', 770, 'github.com/thomasruff03', '2019-12-16 14:09:43', '2019-12-16 14:09:43'),
('3f33350f-c284-4185-9612-6b319db8ea79', 'ashkanforouzani@gmail.com', '1234', 'Ashkan Forouzani', 'image-1576475949798.jpg', 'Full-Stack Developer', 'React.js, PHP, Node.js', 'Ardabil, Iran', '1990-02-10', 570, 'github.com/ashkan210', '2019-12-16 12:59:10', '2019-12-16 12:59:10'),
('40f1bf5d-7253-4c42-81ea-018b518c5779', 'harishan334@gmail.com', '1234', 'Harishan Kobalasingam', 'image-1576477108686.jpg', 'Back-End Developer', 'Java, Phyton', 'Sikiim, India', '1992-03-27', 560, 'github.com/harishan334', '2019-12-16 13:18:28', '2019-12-16 13:18:28'),
('45d873c3-3df1-4856-8e2a-7126bb6919b5', 'anastasiavityuko@gmail.com', '1234', 'Anastasia Vityuko', 'image-1576475302829.jpg', 'Front-End Developer', 'HTML, CSS, Javascript', 'Nolinsk, Rusia', '1995-06-12', 540, 'github.com/anastasiav12', '2019-12-16 12:48:22', '2019-12-16 12:48:22'),
('57b6ec19-6b76-4e66-bdc2-067e06677f9b', 'gordonweb@gmail.com', '1234', 'Gordon Weber', 'image-1576476961896.jpg', 'Back-End Developer', 'Node.js, PHP', 'Toronto, Canada', '1983-03-13', 550, 'github.com/gordonweb12', '2019-12-16 13:16:01', '2019-12-16 13:16:01'),
('5921a92a-76f9-42d8-93fb-a4e2904e3682', 'emilianovit@gmail.com', '1234', 'Emiliano Vittoriosi', 'image-1576476831194.jpg', 'Front-End Developer', 'HTML, CSS, AngularJS', 'Milan, Italia', '1990-02-07', 510, 'github.com/emiliano34', '2019-12-16 13:13:51', '2019-12-16 13:13:51'),
('5fbf50fc-29da-4b32-8ec2-df163a5a3dcb', 'robertodelga@gmail.com', '1234', 'Roberto Delgadowebb', 'image-1576479559063.jpg', 'Front-End Developer', 'HTML, CSS', 'Viborg, Denmark', '1989-06-11', 500, 'github.com/robert611', '2019-12-16 13:59:19', '2019-12-16 13:59:19'),
('643238c1-1c75-442f-9b6a-cfd6face08d5', 'arshadkhan@gmail.com', '1234', 'Arshad Khan', 'image-1576475652936.jpg', 'Front-End Developer', 'AngularJS, SASS', 'Bihar, India', '1991-09-23', 510, 'github.com/arshadkhan23', '2019-12-16 12:54:13', '2019-12-16 12:54:13'),
('660f4498-bbc1-4a3f-87f3-0b33bd752f74', 'martinrothm@gmail.com', '1234', 'Martin Roth', 'image-1576478341917.jpg', 'Back-End Developer', 'C++, PHP', 'Liverpool, Inggris', '1985-10-23', 545, 'github.com/martin23', '2019-12-16 13:39:02', '2019-12-16 13:39:02'),
('730eb559-0c25-4ff7-b5c3-1cca5e65aa82', 'berndgemein@gmail.com', '1234', 'Bernd Gemein', 'image-1576476437323.jpg', 'Full-Stack Developer', 'Javascript, Phyton, C#', 'Munich, Jerman', '1985-06-13', 620, 'github.com/bernd13', '2019-12-16 13:07:17', '2019-12-16 13:07:17'),
('75db9d16-37b2-4d33-9f39-b19c418f17b8', 'azamatzhani@gmail.com', '1234', 'Azamat Zhanisov', 'image-1576476282178.jpg', 'Front-End Developer', 'React.js, Javascript', 'Omsk, Rusia', '1992-07-18', 490, 'github.com/azamat718', '2019-12-16 13:04:42', '2019-12-16 13:04:42'),
('8425ffca-aa17-4e94-aa9e-fd19bf1b990f', 'jasondsou@gmail.com', '1234', 'Jason Dsouza', 'image-1576477801640.jpg', 'Back-End Developer', 'R, Phyton', 'Lisburn, Irlandia', '1981-04-04', 540, 'github.com/jason44', '2019-12-16 13:30:01', '2019-12-16 13:30:01'),
('85727341-ad93-414e-b714-617f7f228c05', 'drikolufs@gmail.com', '1234', 'Dirk Olufs', 'image-1576476713542.jpg', 'Back-End Developer', 'Phyton, PHP', 'Amsterdam, Belanda', '1982-09-10', 595, 'github.com/dirk10', '2019-12-16 13:11:53', '2019-12-16 13:11:53'),
('94f075bd-812d-4fe8-a2e3-d5a9725d5c9d', 'karstenmu@gmail.com', '1234', 'Karsten Mueller', 'image-1576477922074.jpg', 'Full-Stack Developer', 'R, HTML, CSS, JavaScript', 'Hamburg, Jerman', '1980-12-25', 660, 'github.com/karsten12', '2019-12-16 13:32:02', '2019-12-16 13:32:02'),
('afed9083-1ab7-459e-bee7-d4516ad47905', 'jakefegan@gmail.com', '1234', 'Jake Fegan', 'image-1576477696439.jpg', 'Back-End Developer', 'Ruby, C#', 'Leeds, Inggris', '1989-02-28', 535, 'github.com/jakefegan2', '2019-12-16 13:28:16', '2019-12-16 13:28:16'),
('b357339f-f22d-44e9-8cfc-ac353cc05c25', 'valerieelash@gmail.com', '1234', 'Valerie Elash', 'image-1576479774754.jpg', 'Front-End Developer', 'AngularJS, Javascript', 'London, Inggris', '1994-02-02', 520, 'github.com/valerie221', '2019-12-16 14:02:55', '2019-12-16 14:02:55'),
('b6d16c71-ffda-4b2f-8cfe-a17d99629cab', 'rolandmueller@gmail.com', '1234', 'Roland Mueller', 'image-1576479672866.jpg', 'Back-End Developer', 'Phyton, ASP', 'Erfurt, Jerman', '1980-05-01', 575, 'github.com/roland51', '2019-12-16 14:01:12', '2019-12-16 14:01:12'),
('bad251c8-8080-46fa-a64b-1857d8d754e8', 'nihsan27@gmail.com', '1234', 'Nur Ihsan', 'image-1576500160854.jpg', 'Back-End Developer', 'Pascal', 'Makassar, Indonesia', '1997-01-27', 250, 'github.com/ihsan2', '2019-12-16 19:42:41', '2019-12-16 19:42:41'),
('bee1f7c4-5058-4de3-8ba7-c42a5c47fc56', 'rezabiazar@gmail.com', '1234', 'Reza Biazar', 'image-1576479080223.jpg', 'Front-End Developer', 'CSS, HTML', 'Madrid, Spanyol', '1987-07-01', 515, 'github.com/rezab17', '2019-12-16 13:51:20', '2019-12-16 13:51:20'),
('c32c1a02-6c13-4956-be66-4ac69cfeb6f8', 'iip@gmail.com', '1234', 'IIP Aja', '', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-31 06:06:34', '2019-12-31 06:06:34'),
('cf6e3080-6431-48ba-8dba-24f0d3802e27', 'ricardobarr@gmail.com', '1234', 'Ricardo Barta', 'image-1576479418815.jpg', 'Full-Stack Developer', 'HTML, CSS, PHP, Ruby', 'Aarhus, Denmark', '1990-07-10', 590, 'github.com/ricardo17', '2019-12-16 13:56:58', '2019-12-16 13:56:58'),
('d291d221-38c7-4f43-a241-d5f9aac5e9cc', 'thomas12@gmail.com', '1234', 'Thomas Ogilvie', 'image-1576480050836.jpg', 'Full-Stack Developer', 'React.js, Javascript, Node.js', 'Randers, Denmark', '1989-08-09', 750, 'github.com/thomas12', '2019-12-16 14:07:30', '2019-12-16 14:07:30'),
('d8c10601-208f-422e-b4e3-4665e1891e3a', 'lindie@gmail.com', '1234', 'Lindie Wilton', 'image-1576478206192.jpg', 'Front-End Developer', 'HTML, CSS, AngularJS', 'Oxford, Inggris', '1993-11-21', 535, 'github.com/lindie1121', '2019-12-16 13:36:46', '2019-12-16 13:36:46'),
('d8ecfd6c-5052-406d-87c1-32f0c9a938a6', 'houcine@gmail.com', '1234', 'Houcine Ncib', 'image-1576477568497.jpg', 'Front-End Developer', 'React.js', 'London, Inggris', '1994-01-27', 485, 'github.com/houcine27', '2019-12-16 13:26:08', '2019-12-16 13:26:08'),
('dc380164-d64f-4c45-9944-340ecdf30907', 'artembeliaikin@gmail.com', '1234', 'Artem Beliaikin', 'image-1576475808615.jpg', 'Full-Stack Developer', 'Javascript, HTML, CSS, PHP', 'Gujarat, India', '1989-01-08', 585, 'github.com/artem08', '2019-12-16 12:56:48', '2019-12-16 12:56:48'),
('edde481c-dbaf-4860-a31c-5e59a5787686', 'dickvan22@gmail.com', '1234', 'Dick Van Driel', 'image-1576476584191.jpg', 'Back-End Developer', 'Phyton, C#, C++', 'Breda, Belanda', '1985-06-22', 600, 'github.com/dickvan22', '2019-12-16 13:09:44', '2019-12-16 13:09:44'),
('f1f89c67-6f69-468d-9cdc-8ccd83e1ba0b', 'siljeskog@gmail.com', '1234', 'Silje Skogstad', 'image-1576479899301.jpg', 'Front-End Developer', 'React.js, Javascript', 'Glasgow, Skotlandia', '1992-06-29', 525, 'github.com/silje29', '2019-12-16 14:04:59', '2019-12-16 14:04:59'),
('f2144c05-6271-41bc-ac33-5affbeea8fe5', 'bab@gmail.com', '1234', 'Bam', '', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-31 06:07:53', '2019-12-31 06:07:53'),
('f4426909-a0ab-40a4-a4bb-cf48c83d0422', 'ralfpank@gmail.com', '1234', 'Ralf Pankotsch', 'image-1576478891281.jpg', 'Front-End Developer', 'jQuery, Javascript', 'Granada, Spanyol', '1987-08-02', 545, 'github.com/ralf2', '2019-12-16 13:48:11', '2019-12-16 13:48:11'),
('fd8a9426-83cd-40ac-b6ee-263d39c96f9e', 'katrinko@gmail.com', '1234', 'Katrin Koenig', 'image-1576478082832.jpg', 'Front-End Developer', 'HTML, CSS, PHP', 'Dresden, Jerman', '1992-12-13', 520, 'github.com/katrin13', '2019-12-16 13:34:42', '2019-12-16 13:34:42');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `message`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `message` (
`id_message` varchar(100)
,`id_company` varchar(50)
,`company_name` varchar(100)
,`company_image` varchar(200)
,`id_engineer` varchar(50)
,`engineer_name` varchar(50)
,`engineer_image` varchar(200)
,`message` text
,`date_created` datetime
,`role` varchar(10)
);

-- --------------------------------------------------------

--
-- Struktur dari tabel `message_to_company`
--

CREATE TABLE `message_to_company` (
  `id_message` varchar(100) NOT NULL,
  `id_company` varchar(50) NOT NULL,
  `id_engineer` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `date_created` datetime NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'engineer'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `message_to_company`
--

INSERT INTO `message_to_company` (`id_message`, `id_company`, `id_engineer`, `message`, `date_created`, `role`) VALUES
('444a141a-979d-42ae-ae38-25a18e57ae39_07ddc477-b13a-4651-9585-8f4454b43fea_1578347644776', '444a141a-979d-42ae-ae38-25a18e57ae39', '07ddc477-b13a-4651-9585-8f4454b43fea', 'Hy too', '2020-01-07 04:54:04', 'engineer'),
('444a141a-979d-42ae-ae38-25a18e57ae39_0b287e24-b972-4e6b-8fd4-04a255e66d0b_1578350128714', '444a141a-979d-42ae-ae38-25a18e57ae39', '0b287e24-b972-4e6b-8fd4-04a255e66d0b', 'Hello juga', '2020-01-07 05:35:28', 'engineer');

-- --------------------------------------------------------

--
-- Struktur dari tabel `message_to_engineer`
--

CREATE TABLE `message_to_engineer` (
  `id_message` varchar(100) NOT NULL,
  `id_company` varchar(50) NOT NULL,
  `id_engineer` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `date_created` datetime NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'company'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `message_to_engineer`
--

INSERT INTO `message_to_engineer` (`id_message`, `id_company`, `id_engineer`, `message`, `date_created`, `role`) VALUES
('444a141a-979d-42ae-ae38-25a18e57ae39_07ddc477-b13a-4651-9585-8f4454b43fea_1578347626264', '444a141a-979d-42ae-ae38-25a18e57ae39', '07ddc477-b13a-4651-9585-8f4454b43fea', 'Hy', '2020-01-07 04:53:46', 'company'),
('444a141a-979d-42ae-ae38-25a18e57ae39_0b287e24-b972-4e6b-8fd4-04a255e66d0b_1578350117623', '444a141a-979d-42ae-ae38-25a18e57ae39', '0b287e24-b972-4e6b-8fd4-04a255e66d0b', 'Hello', '2020-01-07 05:35:17', 'company');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tes`
--

CREATE TABLE `tes` (
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tes`
--

INSERT INTO `tes` (`name`) VALUES
('Ihsan'),
('Aldi'),
('Ansar'),
('Bambang'),
('Reza');

-- --------------------------------------------------------

--
-- Struktur untuk view `message`
--
DROP TABLE IF EXISTS `message`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `message`  AS  select `me`.`id_message` AS `id_message`,`me`.`id_company` AS `id_company`,`c`.`name` AS `company_name`,`c`.`image` AS `company_image`,`me`.`id_engineer` AS `id_engineer`,`e`.`name` AS `engineer_name`,`e`.`image` AS `engineer_image`,`me`.`message` AS `message`,`me`.`date_created` AS `date_created`,`me`.`role` AS `role` from ((`message_to_engineer` `me` left join `engineer` `e` on((`e`.`id` = `me`.`id_engineer`))) left join `company` `c` on((`c`.`id` = `me`.`id_company`))) union all select `mc`.`id_message` AS `id_message`,`mc`.`id_company` AS `id_company`,`c`.`name` AS `company_name`,`c`.`image` AS `company_image`,`mc`.`id_engineer` AS `id_engineer`,`e`.`name` AS `engineer_name`,`e`.`image` AS `engineer_image`,`mc`.`message` AS `message`,`mc`.`date_created` AS `date_created`,`mc`.`role` AS `role` from ((`message_to_company` `mc` left join `engineer` `e` on((`e`.`id` = `mc`.`id_engineer`))) left join `company` `c` on((`c`.`id` = `mc`.`id_company`))) ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `message_to_company`
--
ALTER TABLE `message_to_company`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `id_company` (`id_company`),
  ADD KEY `id_engineer` (`id_engineer`);

--
-- Indeks untuk tabel `message_to_engineer`
--
ALTER TABLE `message_to_engineer`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `id_company` (`id_company`),
  ADD KEY `id_engineer` (`id_engineer`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `message_to_company`
--
ALTER TABLE `message_to_company`
  ADD CONSTRAINT `message_to_company_ibfk_1` FOREIGN KEY (`id_engineer`) REFERENCES `engineer` (`id`),
  ADD CONSTRAINT `message_to_company_ibfk_2` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`);

--
-- Ketidakleluasaan untuk tabel `message_to_engineer`
--
ALTER TABLE `message_to_engineer`
  ADD CONSTRAINT `message_to_engineer_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`),
  ADD CONSTRAINT `message_to_engineer_ibfk_2` FOREIGN KEY (`id_engineer`) REFERENCES `engineer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO "Locations"
("Id", "Name", "Latitude", "Longitude")
VALUES
(1, N'Tears Island', 53.909681, 27.554582),
(2, N'National Library', 53.931938, 27.645489),
(3, N'Lenin Square', 53.895357, 27.547705),
(4, N'Big Ben', 51.500843, -0.124647),
(5, N'National Gallery', 51.509388, -0.128731);

CREATE EXTENSION IF NOT EXISTS "pgcrypto" SCHEMA public;

INSERT INTO "Users"
("Id", "Name", "FirstName", "LastName", "Email", "PasswordSalt", "PasswordHash")
VALUES
(1, N'nmatch', N'Natalia', N'Motovaya', N'n.match@yandex.ru',
	decode('JRJS8H7aGCzd_Q-Ht$*F!s8MmJ4y22wSq#SfMw85@rCMFtYrF%JK=?d^un+MqvSsg3YqQdWuydE54G+z4MkgQQZHEUfz$vuQsK%$P?B=g993E-arbnxs!@^b2Rs_Ua2@', 'escape'), 
	hmac('montenegro44', 'JRJS8H7aGCzd_Q-Ht$*F!s8MmJ4y22wSq#SfMw85@rCMFtYrF%JK=?d^un+MqvSsg3YqQdWuydE54G+z4MkgQQZHEUfz$vuQsK%$P?B=g993E-arbnxs!@^b2Rs_Ua2@', 'sha512')),
(2, N'katatinak', N'Katya', N'Kaliukhovich', N'kaliukhovich@gmail.com',
	decode('JRJS8H7aGCzd_Q-Ht$*F!s8MmJ4y22wSq#SfMw85@rCMFtYrF%JK=?d^un+MqvSsg3YqQdWuydE54G+z4MkgQQZHEUfz$vuQsK%$P?B=g993E-arbnxs!@^b2Rs_Ua2@', 'escape'), 
	hmac('montenegro44', 'JRJS8H7aGCzd_Q-Ht$*F!s8MmJ4y22wSq#SfMw85@rCMFtYrF%JK=?d^un+MqvSsg3YqQdWuydE54G+z4MkgQQZHEUfz$vuQsK%$P?B=g993E-arbnxs!@^b2Rs_Ua2@', 'sha512'));

INSERT INTO "Adventures"
("Id", "Name", "Description", "StartsOn", "EndsOn", "CreatedById")
VALUES
(1, N'Trip to Minsk', N'Would like to visit Belarus', timezone('UTC', now()), timezone('UTC', now()), 1),
(2, N'Trip to London', N'Nice to have BigBen toy', timezone('UTC', now()), timezone('UTC', now()), 2);

INSERT INTO "Experiences"
("Id", "Name", "Description", "LocationId", "AdventureId", "StartsOn", "EndsOn")
VALUES
(1, N'Nemiga', N'Driving catamaran', 1, 1, timezone('UTC', now()), timezone('UTC', now())),
(2, N'Capital Shopping Mall', N'Crazy shopping', 3, 1, timezone('UTC', now()), timezone('UTC', now())),
(3, N'National Library', N'Reading books', 2, 1, timezone('UTC', now()), timezone('UTC', now())),
(4, N'Big Ben Building', N'Learn national culture', 4, 2, timezone('UTC', now()), timezone('UTC', now())),
(5, N'National Gallery', N'Gallery', 5, 2, timezone('UTC', now()), timezone('UTC', now()));

INSERT INTO "AdventureUsers"
("Id", "AdventureId", "UserId")
VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1);
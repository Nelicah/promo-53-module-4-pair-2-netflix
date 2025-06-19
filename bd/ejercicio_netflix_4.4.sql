SELECT * FROM netflix.users_has_movies;

DESCRIBE users_has_movies;

SELECT COUNT(*) FROM users_has_movies;


SELECT COUNT(movies_idMovie) AS Favoritas
FROM users_has_movies
GROUP BY users_idUser;

SELECT COUNT(movies_idMovie) AS Favoritas, users_idUser
FROM users_has_movies
GROUP BY users_idUser
HAVING COUNT(*) >1

SELECT * FROM netflix.users;

SELECT name
FROM users
WHERE plan_details = 'Standard';

DELETE name
FROM users
WHERE name LIKE 'm%';
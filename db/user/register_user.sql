insert into personal_users(
    email,password
)values(
    $1,$2
)
returning *;
update personal_users
set first_name=($1), last_name=($2), img=($3)
where id=($4)
returning *;
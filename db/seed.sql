create table personal_users(
    user_id serial primary key,
    email varchar(100),
    password varchar(250),
    first_name varchar(100),
    last_name varchar(100),
    img text
);

-- haven't created yet
-- create table event(
--     event_id serial primary,
--     user_id int references personal_users(user_id),
--     event_start text,
--     event_end text,
--     event_detail varchar(500),
--     event_type varchar(50),
--     img text
-- );
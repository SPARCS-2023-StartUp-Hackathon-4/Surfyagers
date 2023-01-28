CREATE TABLE User (
    user_id bigint not null primary key,
    nickname varchar(255),
    level int,
    register_time bigint,
    title varchar(255),
    tags varchar(1024)
);
CREATE TABLE Tag (
    tag_id bigint not null primary key, 
    tag_title varchar(255)
);
CREATE TABLE Product (
    product_id bigint not null primary key, 
    product_name varchar(255),
    compeney varchar(255),
    compeney_url varchar(255),
    imgs varchar(1024), 
    tags varchar(1024), 
    heart bigint, 
    star int, 
    money bigint,
    point int
);
CREATE TABLE Feed (
    feeds_id bigint not null primary key, 
    user_id bigint, 
    content text, 
    star int
);
CREATE TABLE Image (
    images_id bigint not null primary key, 
    image_url varchar(1024)
);
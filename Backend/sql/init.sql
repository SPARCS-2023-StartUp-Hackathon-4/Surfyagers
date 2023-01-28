CREATE TABLE User (
    user_id bigint not null primary key,
    nickname varchar(255),
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
    compeney varchar(255),
    compeney_url varchar(255),
    img varchar(1024), 
    tags varchar(1024), 
    heart bigint, 
    star int, 
    money bigint
);
CREATE TABLE Feed (
    feeds_id bigint not null primary key, 
    user_id bigint, 
    heart bigint, 
    money bigint, 
    content text, 
    star bigint
);
CREATE TABLE Images (
    images_id bigint not null primary key, 
    image_url varchar(1024)
);
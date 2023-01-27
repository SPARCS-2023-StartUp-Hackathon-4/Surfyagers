CREATE User (user_id bigint not null primary key, nickname varchar(255), register_time bigint, title varchar(255), tags varchar(1024));
CREATE Tag (tag_id bigint not null primary key, tag_title varchar(255));
CREATE Product (product_id bigint not null primary key, compeney varchar(255) compeney_url varchar(255), img varchar(1024), tags varchar(1024), heart bigint, star int, money bigint);
CREATE Feads (feads_id bigint not null, primary key, user_id bigint, heart bigint, money bigint, content text, star bigint);
CREATE Images (images_id bigint not primary key, image_url varchar(255));
CREATE DATABASE shortly_url;

CREATE TABLE shortly_table(
    url_id BIGSERIAL NOT NULL PRIMARY KEY,
    value_input VARCHAR(255) NOT NULL,
    shorten_url VARCHAR(255) 
);
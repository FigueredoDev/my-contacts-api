CREATE DATABASE mycontacts;

CREATE TABLE
  IF NOT EXISTS categories (id uuid PRIMARY KEY NOT NULL, name VARCHAR(255));

CREATE TABLE
  IF NOT EXISTS contacts (
    id uuid PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(255),
    category_id uuid,
    FOREIGN KEY (category_id) REFERENCES categories (id)
  );

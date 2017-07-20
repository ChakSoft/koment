CREATE TABLE domains (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) UNIQUE NOT NULL,
    dns VARCHAR(255) UNIQUE NOT NULL,
    access_key VARCHAR(255) NULL,
    enabled TINYINT(1) DEFAULT 1,
    deleted TINYINT(1) DEFAULT 0
);
CREATE TABLE pages (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    domain_id INTEGER NOT NULL,
    uri VARCHAR(255) NOT NULL,
    enabled TINYINT(1) DEFAULT 1,
    deleted TINYINT(1) DEFAULT 0,
    CONSTRAINT fk_pages_domain_id FOREIGN KEY (domain_id)
        REFERENCES domains(id) ON DELETE CASCADE
);
CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    page_id INTEGER NOT NULL,
    author VARCHAR(100) NOT NULL,
    email VARCHAR(150) NULL,
    website VARCHAR(150) NULL,
    content TEXT NOT NULL,
    status TINYINT(1) DEFAULT 1,
    deleted TINYINT(1) DEFAULT 0,
    CONSTRAINT fk_comments_page_id FOREIGN KEY (page_id)
        REFERENCES pages(id) ON DELETE CASCADE
);

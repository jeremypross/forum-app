# Project 2: Forum Crud App

## Wireframe:

![Wireframe 1](/public/img/wireframe1.png)

![Wireframe 2](/public/img/wireframe2.png)

![Wireframe 3](/public/img/wireframe3.png)

## ERD:
![ERD](/public/img/erd.png)

## Approach:

* My approach was to first build each table's schema and establish the database's structure. Next, I built out each of the methods of the topics controller one at a time.  After, I was able to create, edit, delete and like topics, I built out the comments controller, where users can create and like comments.

## User Stories:

* User should be able to post a new topic.

* User should be able to edit and delete topics.

* User should be able to comment on topics.

* User should be able to like both topics and comments.

* Comments and topics will be displayed based on their like counts.

## Technologies Used:

* HTML - built views
* CSS - styled views
* Javascript / jQuery
* PostgreSQL - built database and created object models for each table
* Node.js / Express.js
* Node Dependencies:
  - body-parser - bundles form data
  - ejs - templating agent
  - method-override - adding PUT and DELETE actions
  - morgan - workflow tool - logger
  - path - directs to public assets folder
  - pg-promise - database connection

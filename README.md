## Booktonica

Booktonica is a full-stack app displaying collection of books from [Techtonica's curriculum](https://github.com/Techtonica/final-full-stack-assessment-h1-2020).  Users can view books as well as books from a specfic list.

View Booktonica here: https://booktonica-react-app.herokuapp.com/



<img src="assets/booktonica-preview.gif" alt="booktonica-preview" style="zoom:40%;" />



## Project Design

### Listopia

The [Features/Requirements](https://github.com/lisaau/Booktonica/wiki/Features-Requirements) to let users create curated lists of books was completed in a day. This includes understanding a new codebase, modeling the data, and implementation of the feature.

![viewing-booklists](assets/viewing-booklists.gif)



### Data Modeling

A join table was used as multiple books can be in a list and a list can have multiple books in it. 

[Database schema](https://github.com/lisaau/Booktonica/wiki/Schema)



## Technologies

<u>Frontend</u>: React, Reactstrap 

<u>Backend</u>: Express and Node 

<u>Database</u>: Postgres



## Setup Instructions

1. Set up the database with Postgres:

- `createdb booktonica`
- `psql booktonica < booktonica.sql`

2. Install dependencies and run:

- `cd express-api`
- `npm install`
- `npm start`
- `cd ../react-app`
- `npm install`
- `npm start`



## Future Features

- Login section to allow multiple users to save books
- Adding more books in the UI

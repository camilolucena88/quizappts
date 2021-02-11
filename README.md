# Typescript App with Nestjs, Postgres and Docker

## Documentation
*Quiz API for activities, quizzes or surveys*
### Docker
*Environment*

``cp .env-example .env``

### Docker
*Postgres database*

docker-compose up

### NPM

``npm install``

``npm run migration:run ``

``npm run start:dev ``

### Endpoints

* *http://localhost:3000/api/activities*
* *http://localhost:3000/api/activities/1*
* *http://localhost:3000/api/activities/questions*
* *http://localhost:3000/api/activities/questions/1*
* *http://localhost:3000/api/activities/questions/options*
* *http://localhost:3000/api/activities/questions/options/1*
* *http://localhost:3000/api/clients*
* *http://localhost:3000/api/clients/1*
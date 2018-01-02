# decentapi

decent's official boilerplate for web APIs.

## Getting Started

### Prerequisites

* `node` / `npm`

* `yarn`

* `sqlite`

### Setup

```sh
$ git clone https://github.com/decentorganization/api.js
```

```sh
$ yarn install
```

```sh
$ knex migrate:latest
```

```sh
$ knex seed:run
```

## Commands

To start a development environment:

```sh
$ yarn develop
```

To build a production application:

```sh
$ yarn build
```

To run the production application:

```sh
$ yarn start
```

To lint the `src/` directory:

```sh
$ yarn lint
```

### Githooks

To execute `yarn lint`:

```sh
$ yarn precommit
```

To execute `yarn build && yarn lint`:

```sh
$ yarn prepush
```

## Database

`api.js` uses `knex` and `Objection.js` for database interactions. The documentation for `knex` is
available [here](http://knexjs.org/) and the documentation for `Objection.js` is available
[here](http://vincit.github.io/objection.js/).

All alterations to the schema and seeding should be handled through `knex` migrations, all querying
should be handled through `Objection.js`.

Database connection details are stored in the `knexfile.js` and the database connection is
created in `src/api/database/index.js`.

## Application Structure

The application contains a few components:

* `api/`
  * `config/`
  * `controllers/`
  * `database/`
  * `models/`
  * `routes.js`
  * `server.js`

### api/

`api/` is the container surrounding the rest of the application.

### config/

`config/` is a folder for constants and api-internal configuration.

### controllers/

`controllers/` contains files which are intended to execute upon specific API route calls.

### database/

`database/` contains files relevant to the database, including the connection object, migrations,
and seed files.

### models/

`models/` contains Model files that allow easy access and definition of datbase entitites.

### routes.js

`routes.js` define routes that execute controller methods.

### server.js

`server.js` creates our HTTP server.

Made with :heart: in Cleveland.

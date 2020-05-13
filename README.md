# README

## Requirements

- Ruby (>= 2.5.0)
- npm, yarn
- Postgres (`docker-compose up -d` to use container)

## Running the project

1. `cp .env.example .env`
2. `yarn install`
3. `bundle install`
4. `bundle exec rails db:setup`
5. `bundle exec rails s`
6. `bin/webpack-dev-server`
7. Visit localhost:3000 in your browser or use the following command to make requests.

```sh
curl -XPOST localhost:3000/link -d '{ "link": { "original_url": "www.google.com" } }' -H 'Content-Type: application/json'
```

## Running tests

- Backend tests: `bundle exec rspec`
- Frontend tests: `yarn test`

## Code structure

The frontend React code is located at `app/javascript/packs/react`

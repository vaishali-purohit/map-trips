# Map Trips

## Preview
[map-trips.webm](https://user-images.githubusercontent.com/37063887/194312929-492cc58b-134a-4408-ba89-83742636c73d.webm)


## Requirements
- node v16+
- yarn v1.22+

## Development Preparation

Add Environment Variable in `.env` file
```
REACT_APP_MAPBOX_ACCESS_TOKEN=<your_mabox_api_key>
```
Notes: To get API key please visit [MAPBOX](https://account.mapbox.com/access-tokens/)

## Deployment

```sh
yarn install
yarn start
```

Run commands to Check for `lint` issues in app
```sh
yarn lint
yarn lint:fix
yarn format
```

Run commands to check for `test` cases
```sh
yarn test (to run the test cases)
yarn test:watch (to watch the test)
yarn test:coverage (to check total coverage covered by test cases)
```

Run command for `storybook`
```sh
yarn storybook (to run)
yarn build-storybook (to build)
```

Run with `Docker`
```sh
yarn install
yarn start:docker
```

You can also check Application deployed on Netlify
[https://map-trips.netlify.app/](https://map-trips.netlify.app/)

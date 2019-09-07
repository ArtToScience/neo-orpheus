# orpheus-gql-app

## Quick overview of filestructure
* /client
  * React/redux frontend, with React Vis and Ace Editor + scss stylesheets
  * Makes requests to the server in /orpheus and visualizes response
* /server
  * literally just serves client build
* /orpheus
  * sandbox implementation of Express-GraphQL
  * has some utils for timing/benching GQL, but none are implemented
  * may need some cleanup / DB access may be broken
  
## Other

There's some cruft left over from a half-baked attempt to implement Electron. We might want to think of using a frontend framework for GQL, like Relay. The .ds_store files should be culled from the filesystem.

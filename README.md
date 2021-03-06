<h1>
  <img src="./papel-logo.svg" alt="Papel Logo" width="128px">
</h1>

Papel is a frontend code playground built on top of [Nebulas](https://nebulas.io).

https://papel.app

Contract address (mainnet): [n1y6zyNJb9iHkjdk3jbhL1iPKkDvigSbSYE](https://explorer.nebulas.io/#/address/n1y6zyNJb9iHkjdk3jbhL1iPKkDvigSbSYE)

## Build Setup

``` bash
$ git clone https://github.com/mallendeo/papel.git
$ cd papel
$ yarn

# Serve with hot reload at localhost:3000
$ yarn dev
```

## Clone and run papel-preview
```bash
$ git clone https://github.com/mallendeo/papel-preview
$ cd papel-preview
$ yarn

# Serve with hot reload at localhost:3001
$ yarn dev
```

# Production Build
```bash
# Build for production and launch server
$ USE_MAINNET="true" yarn build
$ yarn start
```

## TODO
- ~~Create home and profile pages~~
- ~~Show compiler errors~~
- ~~File upload / file sync to project ipfs cid~~
- ~~Create profile edit and settings page~~
- ~~Fix favicon not showing on editor~~
- Re-run script on live reload when changing html
- Fix `undefined` message when adding a external library

### Next version
- Comments and comment likes
- Save settings on blockchain
- Create and deploy smart contracts from editor
- Show message if the remote version is newer than the local one
- Replace SASS with a WebAssembly version
- Be able to like and donate to a project
- Account activity and notifications
- Export / Download projects
- Project tagging

## Smart Contract and Preview repositories

https://github.com/mallendeo/papel-neb-contract

https://github.com/mallendeo/papel-preview

# License
GNU General Public License v3.0

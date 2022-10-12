# hello.dev

This repo contains the source code for the Hellō Button CSS and JS at https://cdn.hello.coop/css/hello-css.js and https://cdn.hello.coop/js/hello-btn.js

## Getting started

### Prerequisites

1. Git
1. A fork of the repo (for any contributions)
1. Run `git clone https://github.com/hellocoop/button.git --recursive` to get a copy of the repo on your local machine. (`--recursive` flag must be passed because the repo contains [hellocoop/wallet-i18n](https://github.com/hellocoop/wallet-i18n) as a git submodule)

### Installation

1. `cd button` to go into the project root
1. `npm i` to install the npm dependencies

### Running locally

`npm run dev` to start the hot-reloading development server (powered by [Vite](https://vitejs.dev/))

Edits made in `hello-btn.js` and `hello-btn.css` will reflect in `index.html` which is loaded by the dev server.

> Since the repo contains a git submodule, to pull the latest changes:
`git pull && git submodule update`


## License

[MIT](LICENSE)

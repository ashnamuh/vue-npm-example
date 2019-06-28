# vue-npm-example

An example project for publishing vue component on NPM

## Usage
### Install inside a NPM project
```
npm install -D @ashnamuh/vue-npm-example
```

or

```
yarn add -D @ashnamuh/vue-npm-example
```

### Use all components
```js
import Vue from 'vue'
import Ash from '@ashnamuh/vue-npm-example'

import '@ashnamuh/vue-npm-example/dist/ash.css'
Vue.use(Ash)
```

### or individual components
```js
import Vue from 'vue'
import { AshButton } from '@ashnamuh/vue-npm-example'
import '@ashnamuh/vue-npm-example/dist/ash.css'

Vue.use(AshButton)
```

---

## Development setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production lib
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Contribution
Feel free to contribute anything!
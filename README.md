# hellonpm

Learn how to publish npm package

## Installation

Using npm:

```bash
npm install @phumo/hellonpm
```

Using yarn:

```bash
yarn add @phumo/hellonpm
```

## Usage

CommonJS:
```js
const hellonpm = require('@phumo/hellonpm').default

hellonpm.hellonpm()
hellonpm.logAuthorInfo()
hellonpm.logLicense()
```

ESModule:
```js
import hellonpm from '@phumo/hellonpm'

hellonpm.hellonpm()
hellonpm.logAuthorInfo()
hellonpm.logLicense()
```
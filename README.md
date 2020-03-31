# Schema
[![npm version](https://badge.fury.io/js/%40telegramv%2Fschema.svg)](https://badge.fury.io/js/%40telegramv%2Fschema)

Current TL-schema from [core.telegram.org/schema](https://core.telegram.org/schema).

## Installation
NPM:
```shell script
npm install @telegramv/schema
```

Yarn:
```shell script
yarn add @telegramv/schema
```

## Usage
Example:
```javascript
import schema from "@telegramv/schema"
import mtSchema from "@telegramv/schema/mtproto"

console.log(schema)
console.log(mtSchema)
```

De/Serializer: [github.com/TelegramV/TypeLanguage](https://github.com/TelegramV/TypeLanguage)
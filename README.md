# Schema
[![npm version](https://badge.fury.io/js/protov-tl-schema.svg)](https://badge.fury.io/js/protov-tl-schema)

Current TL-schema from [core.telegram.org/schema](https://core.telegram.org/schema).

## Installation
NPM:
```shell script
npm install protov-tl-schema
```

Yarn:
```shell script
yarn add protov-tl-schema

Specific version:
```shell script
yarn add protov-tl-schema@x.y.z

# x.y.z => 
#   x - mtproto schema version;
#   y - api schema version;
#   z - npm package version;
# example: 2.113.0
```

## Usage
Example:
```javascript
import schema from "protov-tl-schema"
import mtSchema from "protov-tl-schema/mtproto"

console.log(schema)
console.log(mtSchema)
```

De/Serializer: [github.com/TelegramV/TypeLanguage](https://github.com/TelegramV/TypeLanguage)
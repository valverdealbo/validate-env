# @valbo/validate-env

Validate node environment variables

![npm (scoped)](https://img.shields.io/npm/v/@valbo/validate-env)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Build Status](https://img.shields.io/github/workflow/status/valverdealbo/validate-env/CI)
[![Coverage Status](https://coveralls.io/repos/github/valverdealbo/validate-env/badge.svg?branch=main)](https://coveralls.io/github/valverdealbo/validate-env?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/valverdealbo/validate-env/badge.svg?targetFile=package.json)](https://snyk.io/test/github/valverdealbo/validate-env?targetFile=package.json)

## Install

```bash
npm install @valbo/validate-env
```

## Usage

Import this package and specify which environment variables are required and which ones are optional:

```typescript
import { requiredEnv, optionalEnv } from '@valbo/validate-env';

process.env.PORT = '3001';
process.env.MONGODB_URI = 'mongodb://localhost:27017';
process.env.DATABASE_NAME = 'tests';
process.env.LOG_TAG = 'development';

export const env = {
  ...requiredEnv('PORT', 'MONGODB_URI', 'DATABASE_NAME'),
  ...optionalEnv('LOG_TAG'),
};

export type Env = typeof env;
```

In the above example the **Env** type is equivalent to:

```typescript
export type Env = {
  PORT: string;
  MONGODB_URI: string;
  DATABASE_NAME: string;
  LOG_TAG: string | undefined;
}
```

The **requiredEnv()** function will throw when any of the specified environment variables are missing:

```typescript
import { requiredEnv } from '@valbo/validate-env';

process.env.PORT = '3001';

export const env = requiredEnv('PORT', 'MONGODB_URI', 'DATABASE_NAME');
// throws error "missing required environment variables MONGODB_URI, DATABASE_NAME"
```

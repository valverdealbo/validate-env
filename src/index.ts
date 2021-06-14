export function optionalEnv<T extends string>(...envKeys: T[]): Record<T, string | undefined> {
  return envKeys.reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {} as Record<T, string | undefined>);
}

export function requiredEnv<T extends string>(...envKeys: T[]): Record<T, string> {
  const missing = envKeys.filter(key => process.env[key] === undefined);
  if (missing.length > 0) {
    throw new Error(`missing required environment variables ${missing.join(', ')}`);
  }
  return envKeys.reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {} as Record<T, string>);
}

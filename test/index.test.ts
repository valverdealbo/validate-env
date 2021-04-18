import { requiredEnv, optionalEnv } from '../src';

const PORT = '3001';
const MONGODB_URI = 'mongodb://localhost:27017';
const DATABASE_NAME = 'tests';

beforeEach(() => {
  delete process.env.PORT;
  delete process.env.MONGODB_URI;
  delete process.env.DATABASE_NAME;
});

describe('requiredEnv()', () => {
  test('should return the env variables when all are found', () => {
    process.env.PORT = PORT;
    process.env.MONGODB_URI = MONGODB_URI;
    process.env.DATABASE_NAME = DATABASE_NAME;
    const result = requiredEnv('PORT', 'MONGODB_URI', 'DATABASE_NAME');
    expect(result).toEqual({ PORT, MONGODB_URI, DATABASE_NAME });
  });

  test('should throw when any env variables are missing', () => {
    process.env.PORT = PORT;
    expect(() => requiredEnv('PORT', 'MONGODB_URI', 'DATABASE_NAME')).toThrow();
  });
});

describe('optionalEnv()', () => {
  test('should return only the found env variables', () => {
    process.env.MONGODB_URI = MONGODB_URI;
    process.env.DATABASE_NAME = DATABASE_NAME;
    const result = optionalEnv('PORT', 'MONGODB_URI', 'DATABASE_NAME');
    expect(result).toEqual({ MONGODB_URI, DATABASE_NAME });
  });
});

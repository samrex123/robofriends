const googleSearch = require('./script');

const dbMock = [
  'testing.com',
  'mytestsite.com',
  'dog.com',
  'disney.com',
  'dogpictures.com',
];

describe('googleSearch', () => {

it('this is a silly test', () => {
  expect('hello').toBe('hello');
});

it('this is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});

it('work with undefined and null input', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([]);
  expect(googleSearch(null, dbMock)).toEqual([]);
});

it('does not return more than 3 results', () => {
  expect(googleSearch('com', dbMock).length).toBeLessThanOrEqual(3);
});
});

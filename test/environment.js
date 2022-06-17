const nock = require('nock');

beforeEach(() => {
  // It's very important to disable net connect before the tests
  // Otherwise real network requests have a tendency to creep in accidentally
  nock.disableNetConnect();
  nock.enableNetConnect('127.0.0.1');
  nock.cleanAll();
});

import { expect } from 'chai';
import nock from 'nock';
import httpClient from '../../src/client.mjs';

describe('HTTP Client wrapper', () => {

  describe('DELETE requests', () => {
    it('makes a delete request when it receives just a url', async () => {
      const scope = nock('https://www.example.com')
        .delete('/test/')
        .reply(200, {});
      const response = await httpClient.remove({ url: 'https://www.example.com/test/' });
      expect(response.body).to.deep.equal({});
      expect(scope.isDone()).to.deep.equal(true);
    });

    it('makes a delete request when it receives a url with params and headers', async () => {
      const scope = nock('https://www.example.com', {
          reqheaders: {
            "accept-encoding": "gzip, deflate",
            "content-type": "application/json",
            test: 'anotherOne',
          }
        })
        .delete('/test?foo=bar',
          { },
          {
            test: 'anotherOne',
          })
        .reply(200, {});
      await httpClient.remove({
        url: 'https://www.example.com/test',
        params: { foo: 'bar' },
        headers:
          { test: 'anotherOne' },
      });
      expect(scope.isDone()).to.equal(true);
    });

    it('makes a delete request when it receives just a url', async () => {
      const scope = nock('https://www.example.com')
        .delete('/test/')
        .reply(200, {});
      const response = await httpClient.remove({ url: 'https://www.example.com/test/' });
      expect(response.body).to.deep.equal({});
      expect(scope.isDone()).to.deep.equal(true);
    });
  });
});

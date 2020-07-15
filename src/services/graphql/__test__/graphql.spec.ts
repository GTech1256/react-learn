import 'cross-fetch/polyfill';

import { getRepositories } from '../index';


describe('GraphQL', () => {
  it('should return 10 repositiries', async () => {
    expect(await getRepositories()).toHaveLength(10);
  })
})
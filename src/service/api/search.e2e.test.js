'use strict';

const request = require(`supertest`);
const serverApi = require(`../cli/server`);

const getMockData = require(`../lib/get-mock-data`);
const {HttpCode} = require(`../../constants`);
const {getRandomInt} = require(`../../utils`);

let server;
let mockData;

beforeAll(async () => {
  server = await serverApi.initServer();
  mockData = await getMockData();
});

describe(`Search API end-to-end tests`, () => {
  test(`When search exists title, code should be 200`, async () => {
    const indexOffer = getRandomInt(0, mockData.length - 1);
    const offerIdMock = mockData[indexOffer].id;
    const fragmentTitleMock = mockData[indexOffer].title.substr(0, 6);
    const res = await request(server)
    .get(`/api/search?query=${encodeURI(fragmentTitleMock)}`);

    expect(res.statusCode).toBe(HttpCode.OK);
    expect(res.body.some((offer) => offer.id === offerIdMock)).toBe(true);
  });

  test(`When search non exists title, code should be 200`, async () => {
    const res = await request(server)
    .get(`/api/search?query=${encodeURI(`notExistTitle`)}`);

    expect(res.statusCode).toBe(HttpCode.NOT_FOUND);
  });
});

import axios from 'axios';

import { MARVEL } from '$/utils/constants';

const apikey = '88afc73c960dd17242a16a42cc8c492b';
const hash = '08f49c78ef7ee6d774933ae9e5298f71';
const ts = '1';

export const getDataMarvel = axios.create({
  params: {
    ts,
    apikey,
    hash,
    limit: 100,
    offset: 10,
  },
  baseURL: MARVEL,
});

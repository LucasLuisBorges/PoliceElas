import { connect } from 'socket.io-client';
import axios from 'axios';

const BASE_URL =
  'https://1e16-2804-4d98-152-1100-30f0-1375-8eb4-59e1.sa.ngrok.io';

export const api = axios.create({
  baseURL: `${BASE_URL}/v1`,
});

export const socket = connect(BASE_URL);

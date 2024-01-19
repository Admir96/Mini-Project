import cors from 'cors';
import next from 'next';
import { parse } from 'url';



const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  
  
// handle cors middleware
  server.use(cors());
  
  server.get('*', (req : any, res : any) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/api/login' || pathname === '/api/register') {
      return handle(req, res);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(3000, (err : any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
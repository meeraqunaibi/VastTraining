import http from 'http';
import { handleRoutes } from './routes/routes.js';

const PORT = 8080;

http.createServer((request, response) => {
    handleRoutes(request, response);
}).listen(PORT);


import url from 'url';
import { getTasks, addTask, deleteTask, updateTask } from "../controller/task.controller.js"
import { getUser } from '../controller/user.controller.js';
import jwt from 'jsonwebtoken';

export const handleRoutes = (request, response) => {
    const { pathname, query } = url.parse(request.url, true);
    console.log(pathname, request.method);

    request.on('error', err => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });

    response.on('error', err => {
        console.error(err);
    });

    if (request.method === 'POST' && request.url === '/') {
        let data = '';
        request.on('data', chunk => {
            data += chunk.toString();
        });
        request.on('end', () => {
            const parsedRequest = JSON.parse(data);
            const { username, password } = parsedRequest;

            if (!username || !password) {
                response.statusCode = 400;
                response.end("Username, and password are required");
            }
            const user = getUser(username, password);
            if (user) {
                const token = jwt.sign({ username: user.username }, "oldedmvugjlf", { expiresIn: '1h' })
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ ...user, token }));
            }
            else {
                response.end("user does not exist");
            }
        });
    }

    else if (request.method === 'POST' && request.url === '/todo') {
        let data = '';
        request.on('data', chunk => {
            data += chunk.toString();
        });
        request.on('end', () => {
            addTask(data);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end('Todo added successfully');
        });
    } else if (request.method === 'GET' && request.url === '/todo') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(getTasks()));
    } else if (request.method === 'DELETE' && pathname === '/todo/') {
        deleteTask(query.id);
        response.end('Todo deleted successfully');
    } else if (request.method === 'PUT' && pathname === '/todo/') {
        let data = '';
        request.on('data', chunk => {
            data += chunk.toString();
        });
        request.on('end', () => {
            const todoId = query.id;
            updateTask(data, todoId);
            response.end('Todo updated successfully');
        });
    } else {
        response.statusCode = 404;
        response.end();
    }
}
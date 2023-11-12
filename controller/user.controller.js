import { users } from "../data/users.js";

export const getUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    return user;
}
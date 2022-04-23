import axios from "axios";

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;
const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "af17f9c2-d67a-4927-b686-20b173009084"
    }
})

export const getUsers = (currentPage, pageSize) => {
    return axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    });
}

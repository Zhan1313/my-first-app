import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "af17f9c2-d67a-4927-b686-20b173009084"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`).then(response => response.data);
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`).then(response => response.data);
    }
}

export const authAPI = {
    getUserAuthData() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    getAuthProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    }
}

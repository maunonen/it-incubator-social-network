import * as axios from "axios";

//@ts-ignore
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2b182661-e190-4de5-9b14-eb5b65f7ac8a"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            //@ts-ignore
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.delete(`follow/${userId}`)
            //@ts-ignore
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.post(`follow/${userId}`)
            //@ts-ignore
            .then(response => response.data)
    },
    authMe() {
        return instance.get('auth/me')
            //@ts-ignore
            .then( responce  => responce.data)
    },
    getProfile(userId : number) {
        return instance.get(`profile/${userId}`)
            //@ts-ignore
            .then( responce  => responce.data)
    }
}
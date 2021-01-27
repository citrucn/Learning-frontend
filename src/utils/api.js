import request from '/@/utils/request'

export function getAuthUser() {
    return request({
        url: '/oauth/user',
        method: 'get'
    })
}

export function getUsers(params) {
    return request({
        url: '/users',
        method: 'get',
        params
    })
}

export function createUser(data) {
    return request({
        url: '/users',
        method: 'post',
        data
    })
}

export function updateUser(data) {
    return request({
        url: '/users',
        method: 'put',
        data
    })
}

export function deleteUser(pathVariable) {
    return request({
        url: '/users/' + pathVariable,
        method: 'delete'
    })
}
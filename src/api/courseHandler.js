import request from './request'


export function getAll() {
    return request({
        url: 'courses',
        method: 'get'
    })
}

export function deleteCourse(id) {
    return request({
        url: 'courses/' + id,
        method: 'delete'
    })
}

export function addCourse(newcourse) {
    return request({
        url: 'courses',
        method: 'post',
        data: {
            cname: newcourse.cname,
            isChecked: newcourse.isChecked
        }
    })
}





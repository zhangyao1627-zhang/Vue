import { ADDCOURSE, DELETECOURSE, GETALL } from './actiontypes'
import { getAll, deleteCourse, addCourse } from '@/api/courseHandler'

export default {
    [ADDCOURSE]: ({ commit }, cname) => {
        addCourse(cname).then(() => {
            let courses;
            getAll().then((response) => {
                courses = response.data;
                commit(GETALL, { courses })
            })
        })

    },
    [GETALL]: ({ commit }) => {
        let courses;
        getAll().then((response) => {
            courses = response.data;
            commit(GETALL, { courses })
        })
        console.log(commit);
        // commit(GETALL, { courses })

        // return new Promise((resolve, reject) => {   //not use mutations, use action part
        //     getAll().then(response => {
        //         console.log(commit);
        //         resolve(response)
        //     }).catch(error => {
        //         reject(error)
        //     })
        // })
    },
    [DELETECOURSE]: ({ commit }, id) => {

        deleteCourse(id).then(()=>{
            console.log('deleteCourse is OK');
        })

        let courses;
        getAll().then((response) => {
            courses = response.data;
            // console.log(courses, 'courses1111');
            commit(GETALL,{courses})
        })
        // commit(DELETECOURSE,{courses})
        // deleteCourse(id).then(() => {
        //     let courses;
        //     getAll().then((response) => {
        //         courses = response.data;
        //         commit(GETALL, { courses })
        //     })
        // })

    }
}


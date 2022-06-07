import * as types from './actiontypes'


export default {
    [types.ADDCOURSE](state, { course }) {
        state.courses.unshift(course);
    },
    // [types.DELETECOURSE](state, { courses }) {
    //     state.courses = courses;
    // },
    [types.GETALL](state, { courses }) {
        state.courses = courses;
    }
}

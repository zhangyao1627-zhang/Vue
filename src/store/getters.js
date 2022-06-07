export default {
    completedCourses(state) {
        return state.courses.filter((course) => course.isChecked).length;
    },
    totalCourses(state) {
        return state.courses.length
    },
    gAllChecked(state, getters) {
        return getters.completedCourses === getters.totalCourses
    }
}





/**
 * @return {string}
 */
function parseIDGetRole(userID) {
    var patternStudent = new RegExp(/[0-9]{4}[a-z]+[0-9]{4}/i);
    var patternTeacher = new RegExp(/te[a-z]+[0-9]{4}/i);
    var patternAdmin = new RegExp(/admin/i);
    if (patternStudent.test(userID)) {
        return "student";
    }
    else {
        if (patternTeacher.test(userID)) {
            return "teacher";
        }
        else {
            if (patternAdmin.test(userID)) {
                return "admin";
            }
            else {
                return "invalid";
            }
        }
    }
}
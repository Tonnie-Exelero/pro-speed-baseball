class InstructorStudentsCtrl {
    constructor(User, InstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = InstructorHome;

        this._Reviews.getStudents().then(
            (students) => this.students = students
        );
    }
}

export default InstructorStudentsCtrl;

class UnlimitedInstructorStudentsCtrl {
    constructor(User, UnlimitedInstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = UnlimitedInstructorHome;

        this._Reviews.getStudents().then(
            (students) => this.students = students
        );
    }
}

export default UnlimitedInstructorStudentsCtrl;

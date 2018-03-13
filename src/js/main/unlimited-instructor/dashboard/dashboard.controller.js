class UnlimitedInstructorDashboardCtrl {
    constructor(User, review, AppConstants, $scope, InstructorHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this.review = review;
    }
}

export default UnlimitedInstructorDashboardCtrl;

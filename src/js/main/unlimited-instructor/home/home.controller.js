class UnlimitedInstructorHomeCtrl {
    constructor(User, UnlimitedInstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._UnInHome = UnlimitedInstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this._UnInHome.getReviews().then(
            (reviews) => this.reviews = reviews
        );
    }
}

export default UnlimitedInstructorHomeCtrl;

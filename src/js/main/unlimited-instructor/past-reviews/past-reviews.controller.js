class UnlimitedPastReviewsCtrl {
    constructor(User, UnlimitedInstructorHome, AppConstants, $scope, reviews) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = UnlimitedInstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this.reviews = reviews;
    }
}

export default UnlimitedPastReviewsCtrl;

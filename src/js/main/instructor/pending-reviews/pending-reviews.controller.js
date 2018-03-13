class PendingReviewsCtrl {
    constructor(User, InstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this._InHome.getPendingReviews().then(
            (reviews) => this.reviews = reviews
        );
    }
}

export default PendingReviewsCtrl;

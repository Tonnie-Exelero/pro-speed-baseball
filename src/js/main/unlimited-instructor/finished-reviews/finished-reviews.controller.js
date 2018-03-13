class UnlimitedFinishedReviewsCtrl {
    constructor(User, UnlimitedInstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = UnlimitedInstructorHome;

        this._Reviews.getFinishedReviews().then(
            (reviews) => this.reviews = reviews
        );
    }
}

export default UnlimitedFinishedReviewsCtrl;

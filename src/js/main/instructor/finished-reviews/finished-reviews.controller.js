class FinishedReviewsCtrl {
    constructor(User, InstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = InstructorHome;

        this._Reviews.getFinishedReviews().then(
            (reviews) => this.reviews = reviews
        );
    }
}

export default FinishedReviewsCtrl;

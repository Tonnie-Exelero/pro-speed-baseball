class BasicReviewsCtrl {
    constructor(AppConstants, $scope, BasicReviews) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = BasicReviews;

        this._Reviews.getBasicReviews().then(
            (reviews) => this.reviews = reviews
        );
    }
}

export default BasicReviewsCtrl;

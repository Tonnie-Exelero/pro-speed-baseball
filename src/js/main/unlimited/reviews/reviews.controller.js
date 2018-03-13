class UnlimitedReviewsCtrl {
    constructor(AppConstants, $scope, UnlimitedReviews) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._UnReviews = UnlimitedReviews;

        this._UnReviews.getUnlimitedReviews().then(
            (reviews) => this.reviews = reviews
        );
    }


}

export default UnlimitedReviewsCtrl;

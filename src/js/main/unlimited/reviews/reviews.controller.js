class UnlimitedReviewsCtrl {
    constructor(AppConstants, $scope, BasicReviews) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = BasicReviews;

        this._Reviews.getBasicReviews().then(
            (reviews) => this.reviews = reviews
        );

        this.markRead = function (video) {
            this.isSubmitting = true;

            var videoChecked = {
                reviewChecked: true
            };

            this._Reviews.updateRead(video, videoChecked).then(
                (res) => {
                    console.log('Marked as read')
                },

                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        }
    }
}

export default UnlimitedReviewsCtrl;

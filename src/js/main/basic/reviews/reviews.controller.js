class BasicReviewsCtrl {
    constructor(AppConstants, $scope, BasicReviews, $stateParams) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = BasicReviews;

        this._Reviews.getBasicReviews().then(
            (reviews) => {

                var i;

                for (i=0; i<reviews.length; i++){

                    if(reviews[i].video){

                        this._Reviews.getSingleVideo(reviews[i].video).then(
                            (theVideo) => this.theVideo = theVideo
                        );
                    }
                }

                this.reviews = reviews;
            }
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

export default BasicReviewsCtrl;

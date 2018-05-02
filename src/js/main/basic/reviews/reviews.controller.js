class BasicReviewsCtrl {
    constructor(AppConstants, $scope, BasicReviews, InstructorHome, $stateParams) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this.api = AppConstants.api;
        this._Reviews = BasicReviews;
        this._InHome = InstructorHome;

        this._Reviews.getBasicReviews().then(
            (reviews) => {
                 /*for (let i=0; i<reviews.length; i++){
                    if(reviews[i].video){

                        this._Reviews.getSingleVideo(reviews[i].video).then(
                            (theVideo) => {
                                return this.theVideo = theVideo;
                            }
                        );

                        reviews[i].theVideo = this.theVideo;
                    }
                }*/

                this.reviews = reviews;
            }
        );

        this.downloadFile = function(file){
            this.isSubmitting = true;

            for (let i=0; i<file.length; i++){
                this._InHome.download(file[i]).then(
                    (res) => {
                        console.log('Successful download');
                        window.open(this.api + '/instructor/download?file=' + file[i])
                    },
                    (err) => {
                        this.isSubmitting = false;
                        this.errors = err.data.errors;
                    }
                )
            }
        };

        this.markRead = function (video) {
            this.isSubmitting = true;

            let videoChecked = {
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

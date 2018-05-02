class UnlimitedReviewsCtrl {
    constructor(AppConstants, $scope, BasicReviews, InstructorHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = BasicReviews;
        this.api = AppConstants.api;
        this._InHome = InstructorHome;

        this._Reviews.getBasicReviews().then(
            (reviews) => {
                /*
                var i;

                for (i=0; i<reviews.length; i++){

                    if(reviews[i].video){

                        this._Reviews.getSingleVideo(reviews[i].video).then(
                            (theVideo) => this.theVideo = theVideo
                        );

                        reviews[i].theVideo = this.theVideo;
                    }
                }
*/
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

class FinishedReviewsCtrl {
    constructor(User, InstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Reviews = InstructorHome;

        this._Reviews.getFinishedReviews().then(
            (reviews) => this.reviews = reviews
        );

        this.downloadFile = function(file){
            this.isSubmitting = true;

            this._Reviews.download(file).then(
                (res) => {
                    console.log('Successful download');
                    window.open('http://localhost:3000/api/instructor/download?file=' + file)
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        }
    }
}

export default FinishedReviewsCtrl;

class UnlimitedPendingReviewsCtrl {
    constructor(User, InstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this._InHome.getPendingReviews().then(
            (reviews) => this.reviews = reviews
        );

        this.downloadFile = function(file){
            this.isSubmitting = true;

            this._InHome.download(file).then(
                (res) => {
                    console.log('Successful download');
                    window.open(this.api + '/instructor/download?file=' + file)
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        }
    }
}

export default UnlimitedPendingReviewsCtrl;

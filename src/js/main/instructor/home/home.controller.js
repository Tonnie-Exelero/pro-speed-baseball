class InstructorHomeCtrl {
    constructor(User, AppConstants, $scope, InstructorHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this._InHome.getReviews().then(
            (reviews) => this.reviews = reviews
        );

        this.downloadFile = function(file){
            this.isSubmitting = true;

            this._InHome.download(file).then(
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

export default InstructorHomeCtrl;

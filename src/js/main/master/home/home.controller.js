class MasterHomeCtrl {
    constructor(AppConstants, $scope, $state, MasterHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._$state = $state;
        this._User = MasterHome;
        this.authType = 'app.register';
    }

    submitForm() {
        this.isSubmitting = true;

        this._User.createUser(this.formData).then(
            (res) => {
                this.success = "Instructor successfully added.";

                this.formData = {}
            },
            (err) => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        )
    }
}

export default MasterHomeCtrl;

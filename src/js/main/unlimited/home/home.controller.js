class UnlimitedHomeCtrl {
    constructor(AppConstants, $scope, User, UnlimitedHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._User = User;
        this._UnHome = UnlimitedHome;
        this.currentUser = User.current;

        this.formData = {};
    }

    submitForm() {
        this.isSubmitting = true;

        this.formData = {
            category: this.formData.category,
            video: this.formData.video,
            notes: this.formData.notes,
            name: this.currentUser.username,
            reviewed: false
        };

        this._UnHome.uploadUnlimitedVideo(this.formData).then(
            (res) => {
                this.success = "Sent! Your videos have been uploaded and you will be notified via email when review is ready.";
                this.nextVideo = "Next upload will be available when the instructor completes review.";

                this.formData = {};
            },
            (err) => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        )
    }
}

export default UnlimitedHomeCtrl;

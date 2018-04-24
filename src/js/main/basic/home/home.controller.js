class BasicHomeCtrl {
    constructor(AppConstants, $scope, BasicHome, BasicReviews, User, Upload) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._User = User;
        this.currentUser = User.current;
        this._Reviews = BasicReviews;
        this._Basic = BasicHome;

        this.formData = {};

        this.fileInput = document.getElementById('upload');

        this._Reviews.getBasicReviews().then(
            (reviews) => {
                this.reviews = reviews;

                var i;
                for (i=0; i<reviews.length; i++){
                    if (reviews[i].reviewed === true && reviews[i].reviewChecked === false){
                        this.newReview = true
                    }
                }
            }
        );

        this.submitForm = function()
        {
            this.isSubmitting = true;

            if (this.videoForm.file.$valid) { //check if from is valid

                var files = this.fileInput.files;

                for(let i =0; i < files.length; i++){

                    Upload.upload({
                        url: this.api + '/basic/videoUpload', //webAPI exposed to upload the file
                        data: {file: files[i]} //pass files as data, should be user ng-model
                    }).then(function (resp) { //upload function returns a promise
                        if (resp.data.error_code === 0) { //validate success
                            console.log('Video uploaded successfully.');
                        } else {
                            console.log('An error occurred');
                        }
                    }, function (resp) { //catch error
                        console.log('Error status: ' + resp.status);
                    }, function (evt) {
                        console.log(evt);
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('Progress: ' + progressPercentage + '% ');
                    });

                    this.formData = {
                        category: this.formData.category,
                        video: files[i].name,
                        notes: this.formData.notes,
                        name: this.currentUser.username,
                        reviewed: false
                    };

                    this._Basic.add(this.formData).then(
                        (res) => {
                            this.success = "Sent! Your videos have been uploaded and you will be notified via email when review is ready.";
                            this.nextVideo = "Next upload will be available the 1st and 15th of every month.";

                            this.formData = {};
                        },
                        (err) => {
                            this.isSubmitting = false;
                            this.errors = err.data.errors;
                        }
                    )
                }
            }
        }
    }
}

export default BasicHomeCtrl;

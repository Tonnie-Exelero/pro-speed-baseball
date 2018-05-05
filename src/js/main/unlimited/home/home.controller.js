class UnlimitedHomeCtrl {
    constructor(AppConstants, $scope, BasicHome, BasicReviews, User, $state, Upload) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._User = User;
        this.currentUser = User.current;
        this._Reviews = BasicReviews;
        this._Basic = BasicHome;

        this.formData = {};

        this.videoNames = [];

        const date = new Date(), y = date.getFullYear(), m = date.getMonth();
        const firstDay = new Date(y, m, 1);
        const fifteenthDay = new Date(y, m, 15);

        this.fDay = Date.parse(firstDay);
        this.fthDay = Date.parse(fifteenthDay);

        this.checkFiles = function (files) {
            if (files.length > 6){
                alert("You are only allowed to upload a maximum of 6 files. Please select only 6 files.");

                let gogo = document.getElementById('upload');
                gogo.value = '';
            }
        };

        this._Reviews.getBasicReviews().then(
            (reviews) => {
                for (let i=0; i<reviews.length; i++){
                    if (reviews[i].reviewed === true && reviews[i].reviewChecked === false){
                        this.newReview = true
                    }
                }

                this.reviews = reviews;

                let last = reviews[0];

                if(last.reviewed === true){
                    this.showForm = true;
                } else if (last.reviewed === false){
                    this.showForm = false;
                }
            }
        );

        this.upload = function (videos) {
            let files = videos;

            for(let i =0; i < files.length; i++) {
                Upload.upload({
                    url: this.api + '/basic/videoUpload', //webAPI exposed to upload the file
                    data: {file: files[i]} //pass files as data, should be user ng-model
                }).then(function (resp) { //upload function returns a promise
                    if (resp.data.error_code === 0) { //validate success
                        console.log('Video(s) uploaded successfully.');
                    } else {
                        console.log('An error occurred');
                    }
                }, function (resp) { //catch error
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                    console.log(evt);
                    let progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('Progress: ' + progressPercentage + '% ');
                });

                this.videoNames.push(files[i].name);
            }
        };

        this.submitForm = function()
        {
            this.isSubmitting = true;

            if(this.formData.video){
                this.upload(this.formData.video);
            }

            this.formData = {
                category: this.formData.category,
                video: this.videoNames,
                notes: this.formData.notes,
                name: this.currentUser.username,
                reviewed: false
            };

            this._Basic.add(this.formData).then(
                (res) => {
                    this.success = "Sent! Your videos have been uploaded and you will be notified via email when review is ready.";
                    this.nextVideo = "Next upload will be available when the instructor has reviewed the videos.";

                    this.formData = {};
                    // $state.reload();
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        }
    }
}

export default UnlimitedHomeCtrl;
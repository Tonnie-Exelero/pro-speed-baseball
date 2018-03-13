class MasterArchiveCtrl {
    constructor(User, MasterHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Dash = MasterHome;

        this._Dash.getMonthReviews().then(
            (reviewsCount) => this.reviewsCount = reviewsCount
        );

        this._Dash.getCompletedReviews().then(
            (completedCount) => this.completedCount = completedCount
        );

        this._Dash.getInstructors().then(
            (instructors) => this.instructors = instructors
        );
    }
}

export default MasterArchiveCtrl;

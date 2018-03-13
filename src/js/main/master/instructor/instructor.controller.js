class MasterInstructorCtrl {
  constructor(User, MasterHome, AppConstants, $scope, instructor) {
      'ngInject';

      this.appName = AppConstants.appName;
      this._$scope = $scope;
      this._Dash = MasterHome;

      this.instructor = instructor;

      this._Dash.getInstructorCompletedReviews(this.instructor.username).then(
          (completedCount) => this.completedCount = completedCount
      );

      this._Dash.getInstructors().then(
          (instructors) => this.instructors = instructors
      );
  }
}

export default MasterInstructorCtrl;

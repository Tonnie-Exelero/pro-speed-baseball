function UnlimitedPastReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_past_reviews', {
    url: '/unlimited-past-reviews/:username',
    controller: 'UnlimitedPastReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/past-reviews/past-reviews.html',
    title: 'Unlimited past reviews',
      resolve: {
          reviews: function(InstructorHome, $state, $stateParams) {
              return InstructorHome.getPastReviews($stateParams.username).then(
                  (reviews) => reviews,
                  (err) => $state.go('app.instructor_home')
              )
          }
      }
  });

};

export default UnlimitedPastReviewsConfig;

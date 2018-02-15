function UnlimitedPastReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_past_reviews', {
    url: '/unlimited-past-reviews',
    controller: 'UnlimitedPastReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/past-reviews/past-reviews.html',
    title: 'Unlimited past reviews'
  });

};

export default UnlimitedPastReviewsConfig;

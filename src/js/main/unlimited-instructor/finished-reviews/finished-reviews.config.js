function UnlimitedFinishedReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_finished_reviews', {
    url: '/unlimited-finished-reviews',
    controller: 'UnlimitedFinishedReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/finished-reviews/finished-reviews.html',
    title: 'Finished reviews'
  });
}

export default UnlimitedFinishedReviewsConfig;

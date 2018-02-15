function UnlimitedPendingReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_pending_reviews', {
    url: '/unlimited-pending-reviews',
    controller: 'UnlimitedPendingReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/pending-reviews/pending-reviews.html',
    title: 'Unlimited pending reviews'
  });

};

export default UnlimitedPendingReviewsConfig;

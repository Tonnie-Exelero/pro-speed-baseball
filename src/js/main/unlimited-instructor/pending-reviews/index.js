import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedPendingReviewsModule = angular.module('app.unlimited_pending_reviews', []);

// Include our UI-Router config settings
import UnlimitedPendingReviewsConfig from './pending-reviews.config';
unlimitedPendingReviewsModule.config(UnlimitedPendingReviewsConfig);

// Controllers
import UnlimitedPendingReviewsCtrl from './pending-reviews.controller';
unlimitedPendingReviewsModule.controller('UnlimitedPendingReviewsCtrl', UnlimitedPendingReviewsCtrl);

export default unlimitedPendingReviewsModule;

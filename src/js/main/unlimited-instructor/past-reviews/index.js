import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedPastReviewsModule = angular.module('app.unlimited_past_reviews', []);

// Include our UI-Router config settings
import UnlimitedPastReviewsConfig from './past-reviews.config';
unlimitedPastReviewsModule.config(UnlimitedPastReviewsConfig);

// Controllers
import UnlimitedPastReviewsCtrl from './past-reviews.controller';
unlimitedPastReviewsModule.controller('UnlimitedPastReviewsCtrl', UnlimitedPastReviewsCtrl);

export default unlimitedPastReviewsModule;

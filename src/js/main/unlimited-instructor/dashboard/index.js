import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedInstructorDashboardModule = angular.module('app.unlimited_instructor_dashboard', ['ngFileUpload']);

// Include our UI-Router config settings
import UnlimitedInstructorDashboardConfig from './dashboard.config';
unlimitedInstructorDashboardModule.config(UnlimitedInstructorDashboardConfig);

// Controllers
import UnlimitedInstructorDashboardCtrl from './dashboard.controller';
unlimitedInstructorDashboardModule.controller('UnlimitedInstructorDashboardCtrl', UnlimitedInstructorDashboardCtrl, ['Upload']);


export default unlimitedInstructorDashboardModule;

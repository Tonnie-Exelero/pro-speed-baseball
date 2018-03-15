import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedUnstructorHomeModule = angular.module('app.unlimited_instructor_home', []);

// Include our UI-Router config settings
import UnlimitedInstructorHomeConfig from './home.config';
unlimitedUnstructorHomeModule.config(UnlimitedInstructorHomeConfig);

// Controllers
import UnlimitedInstructorHomeCtrl from './home.controller';
unlimitedUnstructorHomeModule.controller('UnlimitedInstructorHomeCtrl', UnlimitedInstructorHomeCtrl);


export default unlimitedUnstructorHomeModule;

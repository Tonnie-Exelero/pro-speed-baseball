import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedInstructorStudentsModule = angular.module('app.unlimited_instructor_students', []);

// Include our UI-Router config settings
import UnlimitedInstructorStudentsConfig from './students.config';
unlimitedInstructorStudentsModule.config(UnlimitedInstructorStudentsConfig);

// Controllers
import UnlimitedInstructorStudentsCtrl from './students.controller';
unlimitedInstructorStudentsModule.controller('UnlimitedInstructorStudentsCtrl', UnlimitedInstructorStudentsCtrl);

export default unlimitedInstructorStudentsModule;

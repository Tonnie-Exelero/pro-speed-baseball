/**
 * Created by TONNIE on 2/21/2018.
 */
export default class MasterHome {
    constructor(AppConstants, $http, $q) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;

    }

    createUser(credentials) {
        return this._$http({
            url: this._AppConstants.api + '/users',
            method: 'POST',
            data: {
                user: credentials
            }
        }).then((res) => res.data);
    }

    getMonthReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/this_month',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviewsCount);
    }

    getCompletedReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/completed',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.completedCount);
    }

    getInstructorCompletedReviews(name, fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/instructorCompleted?author=' + name,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.completedCount);
    }

    getInstructors(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/instructors',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.instructors);
    }

    getSingleInstructor(name, fields) {
        let deferred = this._$q.defer();

        if (!name.replace(" ", "")) {
            deferred.reject("Video slug is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/master/singleInstructor?name=' + name,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.instructor),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }
}
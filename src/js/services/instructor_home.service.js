/**
 * Created by TONNIE on 3/9/2018.
 */
export default class InstructorHome {
    constructor(AppConstants, $http, $q) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
    }

    getReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/reviews',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    get(slug, fields) {
        let deferred = this._$q.defer();

        if (!slug.replace(" ", "")) {
            deferred.reject("Video slug is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/instructor/review?slug=' + slug,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.review),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }

    getPastReviews(author, fields) {
        let deferred = this._$q.defer();

        if (!author.replace(" ", "")) {
            deferred.reject("Video slug is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/instructor/past_reviews?author=' + author,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.reviews),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }

    getPendingReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/pending_reviews',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getFinishedReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/finished_reviews',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getStudents(fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/students',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.students);
    }

    download(file){
        return this._$http({
            url: this._AppConstants.api + '/instructor/download?file=' + file,
            method: 'GET'
        }).then((res) => res.data);
    }

    update(video, field) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/update?slug=' + video.slug,
            method: 'PUT',
            data: {basic: field}
        }).then((res) => res.data.review);
    }
}
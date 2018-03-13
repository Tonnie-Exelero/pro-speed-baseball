/**
 * Created by TONNIE on 2/21/2018.
 */
export default class BasicReviews {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;

    }

    getBasicReviews() {
        return this._$http({
            url: this._AppConstants.api + '/basic/reviews',
            method: 'GET'
        }).then((res) => res.data.reviews);
    }
}
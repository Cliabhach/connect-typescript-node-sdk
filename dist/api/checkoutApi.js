"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const models_2 = require("../model/models");
let defaultBasePath = 'https://connect.squareup.com';
var CheckoutApiApiKeys;
(function (CheckoutApiApiKeys) {
})(CheckoutApiApiKeys = exports.CheckoutApiApiKeys || (exports.CheckoutApiApiKeys = {}));
class CheckoutApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'oauth2': new models_2.OAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[CheckoutApiApiKeys[key]].apiKey = value;
    }
    set accessToken(token) {
        this.authentications.oauth2.accessToken = token;
    }
    async createCheckout(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/checkouts'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createCheckout.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createCheckout.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "CreateCheckoutRequest")
        };
        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "CreateCheckoutResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
exports.CheckoutApi = CheckoutApi;
//# sourceMappingURL=checkoutApi.js.map
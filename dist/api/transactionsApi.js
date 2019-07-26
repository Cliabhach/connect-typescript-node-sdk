"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const models_2 = require("../model/models");
let defaultBasePath = 'https://connect.squareup.com';
var TransactionsApiApiKeys;
(function (TransactionsApiApiKeys) {
})(TransactionsApiApiKeys = exports.TransactionsApiApiKeys || (exports.TransactionsApiApiKeys = {}));
class TransactionsApi {
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
        this.authentications[TransactionsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(token) {
        this.authentications.oauth2.accessToken = token;
    }
    async captureTransaction(locationId, transactionId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/transactions/{transaction_id}/capture'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'transaction_id' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling captureTransaction.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling captureTransaction.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "CaptureTransactionResponse");
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
    async charge(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/transactions'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling charge.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling charge.');
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
            body: models_1.ObjectSerializer.serialize(body, "ChargeRequest")
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
                        body = models_1.ObjectSerializer.deserialize(body, "ChargeResponse");
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
    async createRefund(locationId, transactionId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/transactions/{transaction_id}/refund'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'transaction_id' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createRefund.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling createRefund.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createRefund.');
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
            body: models_1.ObjectSerializer.serialize(body, "CreateRefundRequest")
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
                        body = models_1.ObjectSerializer.deserialize(body, "CreateRefundResponse");
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
    async listRefunds(locationId, beginTime, endTime, sortOrder, cursor, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/refunds'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listRefunds.');
        }
        if (beginTime !== undefined) {
            localVarQueryParameters['begin_time'] = models_1.ObjectSerializer.serialize(beginTime, "string");
        }
        if (endTime !== undefined) {
            localVarQueryParameters['end_time'] = models_1.ObjectSerializer.serialize(endTime, "string");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sort_order'] = models_1.ObjectSerializer.serialize(sortOrder, "string");
        }
        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
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
                        body = models_1.ObjectSerializer.deserialize(body, "ListRefundsResponse");
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
    async listTransactions(locationId, beginTime, endTime, sortOrder, cursor, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/transactions'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listTransactions.');
        }
        if (beginTime !== undefined) {
            localVarQueryParameters['begin_time'] = models_1.ObjectSerializer.serialize(beginTime, "string");
        }
        if (endTime !== undefined) {
            localVarQueryParameters['end_time'] = models_1.ObjectSerializer.serialize(endTime, "string");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sort_order'] = models_1.ObjectSerializer.serialize(sortOrder, "string");
        }
        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
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
                        body = models_1.ObjectSerializer.deserialize(body, "ListTransactionsResponse");
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
    async retrieveTransaction(locationId, transactionId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/transactions/{transaction_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'transaction_id' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling retrieveTransaction.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling retrieveTransaction.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
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
                        body = models_1.ObjectSerializer.deserialize(body, "RetrieveTransactionResponse");
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
    async voidTransaction(locationId, transactionId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/transactions/{transaction_id}/void'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'transaction_id' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling voidTransaction.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling voidTransaction.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "VoidTransactionResponse");
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
exports.TransactionsApi = TransactionsApi;
//# sourceMappingURL=transactionsApi.js.map
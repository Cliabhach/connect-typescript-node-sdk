"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const models_2 = require("../model/models");
let defaultBasePath = 'https://connect.squareup.com';
var ReportingApiApiKeys;
(function (ReportingApiApiKeys) {
})(ReportingApiApiKeys = exports.ReportingApiApiKeys || (exports.ReportingApiApiKeys = {}));
class ReportingApi {
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
        this.authentications[ReportingApiApiKeys[key]].apiKey = value;
    }
    set accessToken(token) {
        this.authentications.oauth2.accessToken = token;
    }
    async listAdditionalRecipientReceivableRefunds(locationId, beginTime, endTime, sortOrder, cursor, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/additional-recipient-receivable-refunds'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listAdditionalRecipientReceivableRefunds.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "ListAdditionalRecipientReceivableRefundsResponse");
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
    async listAdditionalRecipientReceivables(locationId, beginTime, endTime, sortOrder, cursor, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/additional-recipient-receivables'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listAdditionalRecipientReceivables.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "ListAdditionalRecipientReceivablesResponse");
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
exports.ReportingApi = ReportingApi;
//# sourceMappingURL=reportingApi.js.map
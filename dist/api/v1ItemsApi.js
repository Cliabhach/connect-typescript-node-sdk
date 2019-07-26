"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const models_2 = require("../model/models");
let defaultBasePath = 'https://connect.squareup.com';
var V1ItemsApiApiKeys;
(function (V1ItemsApiApiKeys) {
})(V1ItemsApiApiKeys = exports.V1ItemsApiApiKeys || (exports.V1ItemsApiApiKeys = {}));
class V1ItemsApi {
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
        this.authentications[V1ItemsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(token) {
        this.authentications.oauth2.accessToken = token;
    }
    async adjustInventory(locationId, variationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/inventory/{variation_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'variation_id' + '}', encodeURIComponent(String(variationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling adjustInventory.');
        }
        if (variationId === null || variationId === undefined) {
            throw new Error('Required parameter variationId was null or undefined when calling adjustInventory.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling adjustInventory.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1AdjustInventoryRequest")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1InventoryEntry");
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
    async applyFee(locationId, itemId, feeId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/fees/{fee_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'fee_id' + '}', encodeURIComponent(String(feeId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling applyFee.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling applyFee.');
        }
        if (feeId === null || feeId === undefined) {
            throw new Error('Required parameter feeId was null or undefined when calling applyFee.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async applyModifierList(locationId, modifierListId, itemId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling applyModifierList.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling applyModifierList.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling applyModifierList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async createCategory(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/categories'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createCategory.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createCategory.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1Category")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Category");
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
    async createDiscount(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/discounts'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createDiscount.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createDiscount.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1Discount")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Discount");
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
    async createFee(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/fees'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createFee.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createFee.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1Fee")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Fee");
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
    async createItem(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createItem.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createItem.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1Item")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async createModifierList(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createModifierList.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createModifierList.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1ModifierList")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierList");
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
    async createModifierOption(locationId, modifierListId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createModifierOption.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling createModifierOption.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createModifierOption.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1ModifierOption")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierOption");
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
    async createPage(locationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/pages'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createPage.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createPage.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1Page")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Page");
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
    async createVariation(locationId, itemId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/variations'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createVariation.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling createVariation.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createVariation.');
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
            body: models_1.ObjectSerializer.serialize(body, "V1Variation")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Variation");
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
    async deleteCategory(locationId, categoryId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/categories/{category_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'category_id' + '}', encodeURIComponent(String(categoryId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteCategory.');
        }
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling deleteCategory.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Category");
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
    async deleteDiscount(locationId, discountId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/discounts/{discount_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'discount_id' + '}', encodeURIComponent(String(discountId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteDiscount.');
        }
        if (discountId === null || discountId === undefined) {
            throw new Error('Required parameter discountId was null or undefined when calling deleteDiscount.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Discount");
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
    async deleteFee(locationId, feeId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/fees/{fee_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'fee_id' + '}', encodeURIComponent(String(feeId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteFee.');
        }
        if (feeId === null || feeId === undefined) {
            throw new Error('Required parameter feeId was null or undefined when calling deleteFee.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Fee");
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
    async deleteItem(locationId, itemId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteItem.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling deleteItem.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async deleteModifierList(locationId, modifierListId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists/{modifier_list_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteModifierList.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling deleteModifierList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierList");
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
    async deleteModifierOption(locationId, modifierListId, modifierOptionId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)))
            .replace('{' + 'modifier_option_id' + '}', encodeURIComponent(String(modifierOptionId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteModifierOption.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling deleteModifierOption.');
        }
        if (modifierOptionId === null || modifierOptionId === undefined) {
            throw new Error('Required parameter modifierOptionId was null or undefined when calling deleteModifierOption.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierOption");
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
    async deletePage(locationId, pageId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/pages/{page_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'page_id' + '}', encodeURIComponent(String(pageId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deletePage.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling deletePage.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Page");
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
    async deletePageCell(locationId, pageId, row, column, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/pages/{page_id}/cells'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'page_id' + '}', encodeURIComponent(String(pageId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deletePageCell.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling deletePageCell.');
        }
        if (row !== undefined) {
            localVarQueryParameters['row'] = models_1.ObjectSerializer.serialize(row, "string");
        }
        if (column !== undefined) {
            localVarQueryParameters['column'] = models_1.ObjectSerializer.serialize(column, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Page");
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
    async deleteVariation(locationId, itemId, variationId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/variations/{variation_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'variation_id' + '}', encodeURIComponent(String(variationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteVariation.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling deleteVariation.');
        }
        if (variationId === null || variationId === undefined) {
            throw new Error('Required parameter variationId was null or undefined when calling deleteVariation.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Variation");
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
    async listCategories(locationId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/categories'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listCategories.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1Category>");
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
    async listDiscounts(locationId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/discounts'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listDiscounts.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1Discount>");
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
    async listFees(locationId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/fees'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listFees.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1Fee>");
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
    async listInventory(locationId, limit, batchToken, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/inventory'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listInventory.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
        }
        if (batchToken !== undefined) {
            localVarQueryParameters['batch_token'] = models_1.ObjectSerializer.serialize(batchToken, "string");
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1InventoryEntry>");
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
    async listItems(locationId, batchToken, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listItems.');
        }
        if (batchToken !== undefined) {
            localVarQueryParameters['batch_token'] = models_1.ObjectSerializer.serialize(batchToken, "string");
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1Item>");
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
    async listModifierLists(locationId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listModifierLists.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1ModifierList>");
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
    async listPages(locationId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/pages'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling listPages.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "Array<V1Page>");
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
    async removeFee(locationId, itemId, feeId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/fees/{fee_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'fee_id' + '}', encodeURIComponent(String(feeId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling removeFee.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling removeFee.');
        }
        if (feeId === null || feeId === undefined) {
            throw new Error('Required parameter feeId was null or undefined when calling removeFee.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async removeModifierList(locationId, modifierListId, itemId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling removeModifierList.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling removeModifierList.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling removeModifierList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async retrieveItem(locationId, itemId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling retrieveItem.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling retrieveItem.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async retrieveModifierList(locationId, modifierListId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists/{modifier_list_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling retrieveModifierList.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling retrieveModifierList.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierList");
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
    async updateCategory(locationId, categoryId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/categories/{category_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'category_id' + '}', encodeURIComponent(String(categoryId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateCategory.');
        }
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling updateCategory.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCategory.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1Category")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Category");
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
    async updateDiscount(locationId, discountId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/discounts/{discount_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'discount_id' + '}', encodeURIComponent(String(discountId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateDiscount.');
        }
        if (discountId === null || discountId === undefined) {
            throw new Error('Required parameter discountId was null or undefined when calling updateDiscount.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateDiscount.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1Discount")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Discount");
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
    async updateFee(locationId, feeId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/fees/{fee_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'fee_id' + '}', encodeURIComponent(String(feeId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateFee.');
        }
        if (feeId === null || feeId === undefined) {
            throw new Error('Required parameter feeId was null or undefined when calling updateFee.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateFee.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1Fee")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Fee");
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
    async updateItem(locationId, itemId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateItem.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling updateItem.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateItem.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1Item")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Item");
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
    async updateModifierList(locationId, modifierListId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists/{modifier_list_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateModifierList.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling updateModifierList.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateModifierList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1UpdateModifierListRequest")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierList");
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
    async updateModifierOption(locationId, modifierListId, modifierOptionId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'modifier_list_id' + '}', encodeURIComponent(String(modifierListId)))
            .replace('{' + 'modifier_option_id' + '}', encodeURIComponent(String(modifierOptionId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateModifierOption.');
        }
        if (modifierListId === null || modifierListId === undefined) {
            throw new Error('Required parameter modifierListId was null or undefined when calling updateModifierOption.');
        }
        if (modifierOptionId === null || modifierOptionId === undefined) {
            throw new Error('Required parameter modifierOptionId was null or undefined when calling updateModifierOption.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateModifierOption.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1ModifierOption")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1ModifierOption");
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
    async updatePage(locationId, pageId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/pages/{page_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'page_id' + '}', encodeURIComponent(String(pageId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updatePage.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling updatePage.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePage.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1Page")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Page");
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
    async updatePageCell(locationId, pageId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/pages/{page_id}/cells'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'page_id' + '}', encodeURIComponent(String(pageId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updatePageCell.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling updatePageCell.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePageCell.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1PageCell")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Page");
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
    async updateVariation(locationId, itemId, variationId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/v1/{location_id}/items/{item_id}/variations/{variation_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'variation_id' + '}', encodeURIComponent(String(variationId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateVariation.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling updateVariation.');
        }
        if (variationId === null || variationId === undefined) {
            throw new Error('Required parameter variationId was null or undefined when calling updateVariation.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateVariation.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(body, "V1Variation")
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1Variation");
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
exports.V1ItemsApi = V1ItemsApi;
//# sourceMappingURL=v1ItemsApi.js.map
/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CreateCheckoutRequest } from '../model/createCheckoutRequest';
import { CreateCheckoutResponse } from '../model/createCheckoutResponse';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { OAuth } from '../model/models';

let defaultBasePath = 'https://connect.squareup.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CheckoutApiApiKeys {
}

export class CheckoutApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CheckoutApiApiKeys, value: string) {
        (this.authentications as any)[CheckoutApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
     * @summary CreateCheckout
     * @param locationId The ID of the business location to associate the checkout with.
     * @param body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     */
    public async createCheckout (locationId: string, body: CreateCheckoutRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateCheckoutResponse;  }> {
        const localVarPath = this.basePath + '/v2/locations/{location_id}/checkouts'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling createCheckout.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createCheckout.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "CreateCheckoutRequest")
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: CreateCheckoutResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "CreateCheckoutResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}

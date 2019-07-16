/// <reference types="node" />
import http = require('http');
import { CreateCheckoutRequest } from '../model/createCheckoutRequest';
import { CreateCheckoutResponse } from '../model/createCheckoutResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum CheckoutApiApiKeys {
}
export declare class CheckoutApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'oauth2': OAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CheckoutApiApiKeys, value: string): void;
    accessToken: string;
    createCheckout(locationId: string, body: CreateCheckoutRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCheckoutResponse;
    }>;
}

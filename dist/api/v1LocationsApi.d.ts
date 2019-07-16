/// <reference types="node" />
import http = require('http');
import { V1Merchant } from '../model/v1Merchant';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum V1LocationsApiApiKeys {
}
export declare class V1LocationsApi {
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
    setApiKey(key: V1LocationsApiApiKeys, value: string): void;
    accessToken: string;
    listLocations(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Merchant>;
    }>;
    retrieveBusiness(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Merchant;
    }>;
}

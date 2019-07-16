/// <reference types="node" />
import http = require('http');
import { ListLocationsResponse } from '../model/listLocationsResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum LocationsApiApiKeys {
}
export declare class LocationsApi {
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
    setApiKey(key: LocationsApiApiKeys, value: string): void;
    accessToken: string;
    listLocations(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListLocationsResponse;
    }>;
}

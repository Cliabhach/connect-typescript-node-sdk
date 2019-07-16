/// <reference types="node" />
import http = require('http');
import { ObtainTokenRequest } from '../model/obtainTokenRequest';
import { ObtainTokenResponse } from '../model/obtainTokenResponse';
import { RenewTokenRequest } from '../model/renewTokenRequest';
import { RenewTokenResponse } from '../model/renewTokenResponse';
import { RevokeTokenRequest } from '../model/revokeTokenRequest';
import { RevokeTokenResponse } from '../model/revokeTokenResponse';
import { Authentication } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum OAuthApiApiKeys {
    oauth2ClientSecret = 0
}
export declare class OAuthApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'oauth2ClientSecret': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: OAuthApiApiKeys, value: string): void;
    obtainToken(body: ObtainTokenRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ObtainTokenResponse;
    }>;
    renewToken(clientId: string, body: RenewTokenRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RenewTokenResponse;
    }>;
    revokeToken(body: RevokeTokenRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RevokeTokenResponse;
    }>;
}

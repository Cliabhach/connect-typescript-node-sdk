/// <reference types="node" />
import http = require('http');
import { CreateMobileAuthorizationCodeRequest } from '../model/createMobileAuthorizationCodeRequest';
import { CreateMobileAuthorizationCodeResponse } from '../model/createMobileAuthorizationCodeResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum MobileAuthorizationApiApiKeys {
}
export declare class MobileAuthorizationApi {
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
    setApiKey(key: MobileAuthorizationApiApiKeys, value: string): void;
    accessToken: string;
    createMobileAuthorizationCode(body: CreateMobileAuthorizationCodeRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateMobileAuthorizationCodeResponse;
    }>;
}

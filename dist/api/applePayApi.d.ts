/// <reference types="node" />
import http = require('http');
import { RegisterDomainRequest } from '../model/registerDomainRequest';
import { RegisterDomainResponse } from '../model/registerDomainResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum ApplePayApiApiKeys {
}
export declare class ApplePayApi {
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
    setApiKey(key: ApplePayApiApiKeys, value: string): void;
    accessToken: string;
    registerDomain(body: RegisterDomainRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RegisterDomainResponse;
    }>;
}

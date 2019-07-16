/// <reference types="node" />
import http = require('http');
import { ListAdditionalRecipientReceivableRefundsResponse } from '../model/listAdditionalRecipientReceivableRefundsResponse';
import { ListAdditionalRecipientReceivablesResponse } from '../model/listAdditionalRecipientReceivablesResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum ReportingApiApiKeys {
}
export declare class ReportingApi {
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
    setApiKey(key: ReportingApiApiKeys, value: string): void;
    accessToken: string;
    listAdditionalRecipientReceivableRefunds(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAdditionalRecipientReceivableRefundsResponse;
    }>;
    listAdditionalRecipientReceivables(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAdditionalRecipientReceivablesResponse;
    }>;
}

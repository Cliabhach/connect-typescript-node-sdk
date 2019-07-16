/// <reference types="node" />
import http = require('http');
import { CaptureTransactionResponse } from '../model/captureTransactionResponse';
import { ChargeRequest } from '../model/chargeRequest';
import { ChargeResponse } from '../model/chargeResponse';
import { CreateRefundRequest } from '../model/createRefundRequest';
import { CreateRefundResponse } from '../model/createRefundResponse';
import { ListRefundsResponse } from '../model/listRefundsResponse';
import { ListTransactionsResponse } from '../model/listTransactionsResponse';
import { RetrieveTransactionResponse } from '../model/retrieveTransactionResponse';
import { VoidTransactionResponse } from '../model/voidTransactionResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum TransactionsApiApiKeys {
}
export declare class TransactionsApi {
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
    setApiKey(key: TransactionsApiApiKeys, value: string): void;
    accessToken: string;
    captureTransaction(locationId: string, transactionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CaptureTransactionResponse;
    }>;
    charge(locationId: string, body: ChargeRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ChargeResponse;
    }>;
    createRefund(locationId: string, transactionId: string, body: CreateRefundRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateRefundResponse;
    }>;
    listRefunds(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRefundsResponse;
    }>;
    listTransactions(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTransactionsResponse;
    }>;
    retrieveTransaction(locationId: string, transactionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveTransactionResponse;
    }>;
    voidTransaction(locationId: string, transactionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VoidTransactionResponse;
    }>;
}

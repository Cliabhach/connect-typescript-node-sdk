/// <reference types="node" />
import http = require('http');
import { V1BankAccount } from '../model/v1BankAccount';
import { V1CreateRefundRequest } from '../model/v1CreateRefundRequest';
import { V1Order } from '../model/v1Order';
import { V1Payment } from '../model/v1Payment';
import { V1Refund } from '../model/v1Refund';
import { V1Settlement } from '../model/v1Settlement';
import { V1UpdateOrderRequest } from '../model/v1UpdateOrderRequest';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum V1TransactionsApiApiKeys {
}
export declare class V1TransactionsApi {
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
    setApiKey(key: V1TransactionsApiApiKeys, value: string): void;
    accessToken: string;
    createRefund(locationId: string, body: V1CreateRefundRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Refund;
    }>;
    listBankAccounts(locationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1BankAccount>;
    }>;
    listOrders(locationId: string, order?: string, limit?: number, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Order>;
    }>;
    listPayments(locationId: string, order?: string, beginTime?: string, endTime?: string, limit?: number, batchToken?: string, includePartial?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Payment>;
    }>;
    listRefunds(locationId: string, order?: string, beginTime?: string, endTime?: string, limit?: number, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Refund>;
    }>;
    listSettlements(locationId: string, order?: string, beginTime?: string, endTime?: string, limit?: number, status?: string, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Settlement>;
    }>;
    retrieveBankAccount(locationId: string, bankAccountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1BankAccount;
    }>;
    retrieveOrder(locationId: string, orderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Order;
    }>;
    retrievePayment(locationId: string, paymentId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Payment;
    }>;
    retrieveSettlement(locationId: string, settlementId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Settlement;
    }>;
    updateOrder(locationId: string, orderId: string, body: V1UpdateOrderRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Order;
    }>;
}

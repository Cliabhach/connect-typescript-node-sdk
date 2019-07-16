/// <reference types="node" />
import http = require('http');
import { BatchRetrieveOrdersRequest } from '../model/batchRetrieveOrdersRequest';
import { BatchRetrieveOrdersResponse } from '../model/batchRetrieveOrdersResponse';
import { CreateOrderRequest } from '../model/createOrderRequest';
import { CreateOrderResponse } from '../model/createOrderResponse';
import { SearchOrdersRequest } from '../model/searchOrdersRequest';
import { SearchOrdersResponse } from '../model/searchOrdersResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum OrdersApiApiKeys {
}
export declare class OrdersApi {
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
    setApiKey(key: OrdersApiApiKeys, value: string): void;
    accessToken: string;
    batchRetrieveOrders(locationId: string, body: BatchRetrieveOrdersRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchRetrieveOrdersResponse;
    }>;
    createOrder(locationId: string, body: CreateOrderRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateOrderResponse;
    }>;
    searchOrders(body: SearchOrdersRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SearchOrdersResponse;
    }>;
}

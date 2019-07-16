/// <reference types="node" />
import http = require('http');
import { CreateCustomerCardRequest } from '../model/createCustomerCardRequest';
import { CreateCustomerCardResponse } from '../model/createCustomerCardResponse';
import { CreateCustomerRequest } from '../model/createCustomerRequest';
import { CreateCustomerResponse } from '../model/createCustomerResponse';
import { DeleteCustomerCardResponse } from '../model/deleteCustomerCardResponse';
import { DeleteCustomerResponse } from '../model/deleteCustomerResponse';
import { ListCustomersResponse } from '../model/listCustomersResponse';
import { RetrieveCustomerResponse } from '../model/retrieveCustomerResponse';
import { SearchCustomersRequest } from '../model/searchCustomersRequest';
import { SearchCustomersResponse } from '../model/searchCustomersResponse';
import { UpdateCustomerRequest } from '../model/updateCustomerRequest';
import { UpdateCustomerResponse } from '../model/updateCustomerResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum CustomersApiApiKeys {
}
export declare class CustomersApi {
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
    setApiKey(key: CustomersApiApiKeys, value: string): void;
    accessToken: string;
    createCustomer(body: CreateCustomerRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCustomerResponse;
    }>;
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCustomerCardResponse;
    }>;
    deleteCustomer(customerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteCustomerResponse;
    }>;
    deleteCustomerCard(customerId: string, cardId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteCustomerCardResponse;
    }>;
    listCustomers(cursor?: string, sortField?: string, sortOrder?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListCustomersResponse;
    }>;
    retrieveCustomer(customerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveCustomerResponse;
    }>;
    searchCustomers(body: SearchCustomersRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SearchCustomersResponse;
    }>;
    updateCustomer(customerId: string, body: UpdateCustomerRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateCustomerResponse;
    }>;
}

/// <reference types="node" />
import http = require('http');
import { ListEmployeesResponse } from '../model/listEmployeesResponse';
import { RetrieveEmployeeResponse } from '../model/retrieveEmployeeResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum EmployeesApiApiKeys {
}
export declare class EmployeesApi {
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
    setApiKey(key: EmployeesApiApiKeys, value: string): void;
    accessToken: string;
    listEmployees(locationId?: string, status?: string, limit?: number, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListEmployeesResponse;
    }>;
    retrieveEmployee(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveEmployeeResponse;
    }>;
}

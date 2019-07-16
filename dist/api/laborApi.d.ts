/// <reference types="node" />
import http = require('http');
import { CreateBreakTypeRequest } from '../model/createBreakTypeRequest';
import { CreateBreakTypeResponse } from '../model/createBreakTypeResponse';
import { CreateShiftRequest } from '../model/createShiftRequest';
import { CreateShiftResponse } from '../model/createShiftResponse';
import { DeleteBreakTypeResponse } from '../model/deleteBreakTypeResponse';
import { DeleteShiftResponse } from '../model/deleteShiftResponse';
import { GetBreakTypeResponse } from '../model/getBreakTypeResponse';
import { GetEmployeeWageResponse } from '../model/getEmployeeWageResponse';
import { GetShiftResponse } from '../model/getShiftResponse';
import { ListBreakTypesResponse } from '../model/listBreakTypesResponse';
import { ListEmployeeWagesResponse } from '../model/listEmployeeWagesResponse';
import { ListWorkweekConfigsResponse } from '../model/listWorkweekConfigsResponse';
import { SearchShiftsRequest } from '../model/searchShiftsRequest';
import { SearchShiftsResponse } from '../model/searchShiftsResponse';
import { UpdateBreakTypeRequest } from '../model/updateBreakTypeRequest';
import { UpdateBreakTypeResponse } from '../model/updateBreakTypeResponse';
import { UpdateShiftRequest } from '../model/updateShiftRequest';
import { UpdateShiftResponse } from '../model/updateShiftResponse';
import { UpdateWorkweekConfigRequest } from '../model/updateWorkweekConfigRequest';
import { UpdateWorkweekConfigResponse } from '../model/updateWorkweekConfigResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum LaborApiApiKeys {
}
export declare class LaborApi {
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
    setApiKey(key: LaborApiApiKeys, value: string): void;
    accessToken: string;
    createBreakType(body: CreateBreakTypeRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateBreakTypeResponse;
    }>;
    createShift(body: CreateShiftRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateShiftResponse;
    }>;
    deleteBreakType(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteBreakTypeResponse;
    }>;
    deleteShift(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteShiftResponse;
    }>;
    getBreakType(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetBreakTypeResponse;
    }>;
    getEmployeeWage(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEmployeeWageResponse;
    }>;
    getShift(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetShiftResponse;
    }>;
    listBreakTypes(locationId?: string, limit?: number, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListBreakTypesResponse;
    }>;
    listEmployeeWages(employeeId?: string, limit?: number, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListEmployeeWagesResponse;
    }>;
    listWorkweekConfigs(limit?: number, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWorkweekConfigsResponse;
    }>;
    searchShifts(body: SearchShiftsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SearchShiftsResponse;
    }>;
    updateBreakType(id: string, body: UpdateBreakTypeRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateBreakTypeResponse;
    }>;
    updateShift(id: string, body: UpdateShiftRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateShiftResponse;
    }>;
    updateWorkweekConfig(id: string, body: UpdateWorkweekConfigRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateWorkweekConfigResponse;
    }>;
}

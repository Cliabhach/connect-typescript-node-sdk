/// <reference types="node" />
import http = require('http');
import { V1CashDrawerShift } from '../model/v1CashDrawerShift';
import { V1Employee } from '../model/v1Employee';
import { V1EmployeeRole } from '../model/v1EmployeeRole';
import { V1Timecard } from '../model/v1Timecard';
import { V1TimecardEvent } from '../model/v1TimecardEvent';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum V1EmployeesApiApiKeys {
}
export declare class V1EmployeesApi {
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
    setApiKey(key: V1EmployeesApiApiKeys, value: string): void;
    accessToken: string;
    createEmployee(body: V1Employee, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Employee;
    }>;
    createEmployeeRole(employeeRole: V1EmployeeRole, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1EmployeeRole;
    }>;
    createTimecard(body: V1Timecard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Timecard;
    }>;
    deleteTimecard(timecardId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    listCashDrawerShifts(locationId: string, order?: string, beginTime?: string, endTime?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1CashDrawerShift>;
    }>;
    listEmployeeRoles(order?: string, limit?: number, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1EmployeeRole>;
    }>;
    listEmployees(order?: string, beginUpdatedAt?: string, endUpdatedAt?: string, beginCreatedAt?: string, endCreatedAt?: string, status?: string, externalId?: string, limit?: number, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Employee>;
    }>;
    listTimecardEvents(timecardId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1TimecardEvent>;
    }>;
    listTimecards(order?: string, employeeId?: string, beginClockinTime?: string, endClockinTime?: string, beginClockoutTime?: string, endClockoutTime?: string, beginUpdatedAt?: string, endUpdatedAt?: string, deleted?: boolean, limit?: number, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Timecard>;
    }>;
    retrieveCashDrawerShift(locationId: string, shiftId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1CashDrawerShift;
    }>;
    retrieveEmployee(employeeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Employee;
    }>;
    retrieveEmployeeRole(roleId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1EmployeeRole;
    }>;
    retrieveTimecard(timecardId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Timecard;
    }>;
    updateEmployee(employeeId: string, body: V1Employee, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Employee;
    }>;
    updateEmployeeRole(roleId: string, body: V1EmployeeRole, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1EmployeeRole;
    }>;
    updateTimecard(timecardId: string, body: V1Timecard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Timecard;
    }>;
}

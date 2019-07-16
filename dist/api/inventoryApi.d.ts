/// <reference types="node" />
import http = require('http');
import { BatchChangeInventoryRequest } from '../model/batchChangeInventoryRequest';
import { BatchChangeInventoryResponse } from '../model/batchChangeInventoryResponse';
import { BatchRetrieveInventoryChangesRequest } from '../model/batchRetrieveInventoryChangesRequest';
import { BatchRetrieveInventoryChangesResponse } from '../model/batchRetrieveInventoryChangesResponse';
import { BatchRetrieveInventoryCountsRequest } from '../model/batchRetrieveInventoryCountsRequest';
import { BatchRetrieveInventoryCountsResponse } from '../model/batchRetrieveInventoryCountsResponse';
import { RetrieveInventoryAdjustmentResponse } from '../model/retrieveInventoryAdjustmentResponse';
import { RetrieveInventoryChangesResponse } from '../model/retrieveInventoryChangesResponse';
import { RetrieveInventoryCountResponse } from '../model/retrieveInventoryCountResponse';
import { RetrieveInventoryPhysicalCountResponse } from '../model/retrieveInventoryPhysicalCountResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum InventoryApiApiKeys {
}
export declare class InventoryApi {
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
    setApiKey(key: InventoryApiApiKeys, value: string): void;
    accessToken: string;
    batchChangeInventory(body: BatchChangeInventoryRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchChangeInventoryResponse;
    }>;
    batchRetrieveInventoryChanges(body: BatchRetrieveInventoryChangesRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchRetrieveInventoryChangesResponse;
    }>;
    batchRetrieveInventoryCounts(body: BatchRetrieveInventoryCountsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchRetrieveInventoryCountsResponse;
    }>;
    retrieveInventoryAdjustment(adjustmentId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveInventoryAdjustmentResponse;
    }>;
    retrieveInventoryChanges(catalogObjectId: string, locationIds?: string, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveInventoryChangesResponse;
    }>;
    retrieveInventoryCount(catalogObjectId: string, locationIds?: string, cursor?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveInventoryCountResponse;
    }>;
    retrieveInventoryPhysicalCount(physicalCountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveInventoryPhysicalCountResponse;
    }>;
}

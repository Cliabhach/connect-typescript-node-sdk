/// <reference types="node" />
import http = require('http');
import { BatchDeleteCatalogObjectsRequest } from '../model/batchDeleteCatalogObjectsRequest';
import { BatchDeleteCatalogObjectsResponse } from '../model/batchDeleteCatalogObjectsResponse';
import { BatchRetrieveCatalogObjectsRequest } from '../model/batchRetrieveCatalogObjectsRequest';
import { BatchRetrieveCatalogObjectsResponse } from '../model/batchRetrieveCatalogObjectsResponse';
import { BatchUpsertCatalogObjectsRequest } from '../model/batchUpsertCatalogObjectsRequest';
import { BatchUpsertCatalogObjectsResponse } from '../model/batchUpsertCatalogObjectsResponse';
import { CatalogInfoResponse } from '../model/catalogInfoResponse';
import { DeleteCatalogObjectResponse } from '../model/deleteCatalogObjectResponse';
import { ListCatalogResponse } from '../model/listCatalogResponse';
import { RetrieveCatalogObjectResponse } from '../model/retrieveCatalogObjectResponse';
import { SearchCatalogObjectsRequest } from '../model/searchCatalogObjectsRequest';
import { SearchCatalogObjectsResponse } from '../model/searchCatalogObjectsResponse';
import { UpdateItemModifierListsRequest } from '../model/updateItemModifierListsRequest';
import { UpdateItemModifierListsResponse } from '../model/updateItemModifierListsResponse';
import { UpdateItemTaxesRequest } from '../model/updateItemTaxesRequest';
import { UpdateItemTaxesResponse } from '../model/updateItemTaxesResponse';
import { UpsertCatalogObjectRequest } from '../model/upsertCatalogObjectRequest';
import { UpsertCatalogObjectResponse } from '../model/upsertCatalogObjectResponse';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum CatalogApiApiKeys {
}
export declare class CatalogApi {
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
    setApiKey(key: CatalogApiApiKeys, value: string): void;
    accessToken: string;
    batchDeleteCatalogObjects(body: BatchDeleteCatalogObjectsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchDeleteCatalogObjectsResponse;
    }>;
    batchRetrieveCatalogObjects(body: BatchRetrieveCatalogObjectsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchRetrieveCatalogObjectsResponse;
    }>;
    batchUpsertCatalogObjects(body: BatchUpsertCatalogObjectsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchUpsertCatalogObjectsResponse;
    }>;
    catalogInfo(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CatalogInfoResponse;
    }>;
    deleteCatalogObject(objectId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteCatalogObjectResponse;
    }>;
    listCatalog(cursor?: string, types?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListCatalogResponse;
    }>;
    retrieveCatalogObject(objectId: string, includeRelatedObjects?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RetrieveCatalogObjectResponse;
    }>;
    searchCatalogObjects(body: SearchCatalogObjectsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SearchCatalogObjectsResponse;
    }>;
    updateItemModifierLists(body: UpdateItemModifierListsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateItemModifierListsResponse;
    }>;
    updateItemTaxes(body: UpdateItemTaxesRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateItemTaxesResponse;
    }>;
    upsertCatalogObject(body: UpsertCatalogObjectRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpsertCatalogObjectResponse;
    }>;
}

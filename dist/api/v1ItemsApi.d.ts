/// <reference types="node" />
import http = require('http');
import { V1AdjustInventoryRequest } from '../model/v1AdjustInventoryRequest';
import { V1Category } from '../model/v1Category';
import { V1Discount } from '../model/v1Discount';
import { V1Fee } from '../model/v1Fee';
import { V1InventoryEntry } from '../model/v1InventoryEntry';
import { V1Item } from '../model/v1Item';
import { V1ModifierList } from '../model/v1ModifierList';
import { V1ModifierOption } from '../model/v1ModifierOption';
import { V1Page } from '../model/v1Page';
import { V1PageCell } from '../model/v1PageCell';
import { V1UpdateModifierListRequest } from '../model/v1UpdateModifierListRequest';
import { V1Variation } from '../model/v1Variation';
import { Authentication } from '../model/models';
import { OAuth } from '../model/models';
export declare enum V1ItemsApiApiKeys {
}
export declare class V1ItemsApi {
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
    setApiKey(key: V1ItemsApiApiKeys, value: string): void;
    accessToken: string;
    adjustInventory(locationId: string, variationId: string, body: V1AdjustInventoryRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1InventoryEntry;
    }>;
    applyFee(locationId: string, itemId: string, feeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    applyModifierList(locationId: string, modifierListId: string, itemId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    createCategory(locationId: string, body: V1Category, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Category;
    }>;
    createDiscount(locationId: string, body: V1Discount, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Discount;
    }>;
    createFee(locationId: string, body: V1Fee, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Fee;
    }>;
    createItem(locationId: string, body: V1Item, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    createModifierList(locationId: string, body: V1ModifierList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierList;
    }>;
    createModifierOption(locationId: string, modifierListId: string, body: V1ModifierOption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierOption;
    }>;
    createPage(locationId: string, body: V1Page, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Page;
    }>;
    createVariation(locationId: string, itemId: string, body: V1Variation, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Variation;
    }>;
    deleteCategory(locationId: string, categoryId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Category;
    }>;
    deleteDiscount(locationId: string, discountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Discount;
    }>;
    deleteFee(locationId: string, feeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Fee;
    }>;
    deleteItem(locationId: string, itemId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    deleteModifierList(locationId: string, modifierListId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierList;
    }>;
    deleteModifierOption(locationId: string, modifierListId: string, modifierOptionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierOption;
    }>;
    deletePage(locationId: string, pageId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Page;
    }>;
    deletePageCell(locationId: string, pageId: string, row?: string, column?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Page;
    }>;
    deleteVariation(locationId: string, itemId: string, variationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Variation;
    }>;
    listCategories(locationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Category>;
    }>;
    listDiscounts(locationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Discount>;
    }>;
    listFees(locationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Fee>;
    }>;
    listInventory(locationId: string, limit?: number, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1InventoryEntry>;
    }>;
    listItems(locationId: string, batchToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Item>;
    }>;
    listModifierLists(locationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1ModifierList>;
    }>;
    listPages(locationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<V1Page>;
    }>;
    removeFee(locationId: string, itemId: string, feeId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    removeModifierList(locationId: string, modifierListId: string, itemId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    retrieveItem(locationId: string, itemId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    retrieveModifierList(locationId: string, modifierListId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierList;
    }>;
    updateCategory(locationId: string, categoryId: string, body: V1Category, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Category;
    }>;
    updateDiscount(locationId: string, discountId: string, body: V1Discount, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Discount;
    }>;
    updateFee(locationId: string, feeId: string, body: V1Fee, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Fee;
    }>;
    updateItem(locationId: string, itemId: string, body: V1Item, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Item;
    }>;
    updateModifierList(locationId: string, modifierListId: string, body: V1UpdateModifierListRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierList;
    }>;
    updateModifierOption(locationId: string, modifierListId: string, modifierOptionId: string, body: V1ModifierOption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1ModifierOption;
    }>;
    updatePage(locationId: string, pageId: string, body: V1Page, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Page;
    }>;
    updatePageCell(locationId: string, pageId: string, body: V1PageCell, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Page;
    }>;
    updateVariation(locationId: string, itemId: string, variationId: string, body: V1Variation, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1Variation;
    }>;
}

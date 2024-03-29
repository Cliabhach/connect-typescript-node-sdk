/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InventoryChange } from './inventoryChange';
import { SquareError } from './squareError';

/**
* 
*/
export class BatchRetrieveInventoryChangesResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;
    /**
    * The current calculated inventory changes for the requested objects and locations.
    */
    'changes'?: Array<InventoryChange>;
    /**
    * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Pagination](/basics/api101/pagination) for more information.
    */
    'cursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "changes",
            "baseName": "changes",
            "type": "Array<InventoryChange>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BatchRetrieveInventoryChangesResponse.attributeTypeMap;
    }
}


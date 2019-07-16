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

/**
* 
*/
export class RetrieveInventoryChangesResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<Error>;
    /**
    * The set of inventory changes for the requested object and locations.
    */
    'changes'?: Array<InventoryChange>;
    /**
    * The pagination cursor to be used in a subsequent request. If unset, this is the final response.  See [Pagination](/basics/api101/pagination) for more information.
    */
    'cursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
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
        return RetrieveInventoryChangesResponse.attributeTypeMap;
    }
}

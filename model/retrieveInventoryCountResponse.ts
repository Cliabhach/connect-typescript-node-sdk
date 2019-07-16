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

import { InventoryCount } from './inventoryCount';

/**
* 
*/
export class RetrieveInventoryCountResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<Error>;
    /**
    * The current calculated inventory counts for the requested object and locations.
    */
    'counts'?: Array<InventoryCount>;
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
            "name": "counts",
            "baseName": "counts",
            "type": "Array<InventoryCount>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RetrieveInventoryCountResponse.attributeTypeMap;
    }
}

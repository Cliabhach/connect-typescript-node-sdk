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

import { CatalogObject } from './catalogObject';
import { SquareError } from './squareError';

/**
* 
*/
export class ListCatalogResponse {
    /**
    * The set of [SquareError](#type-squareerror)s encountered.
    */
    'errors'?: Array<SquareError>;
    /**
    * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Pagination](/basics/api101/pagination) for more information.
    */
    'cursor'?: string;
    /**
    * The [CatalogObject](#type-catalogobject)s returned.
    */
    'objects'?: Array<CatalogObject>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<CatalogObject>"
        }    ];

    static getAttributeTypeMap() {
        return ListCatalogResponse.attributeTypeMap;
    }
}


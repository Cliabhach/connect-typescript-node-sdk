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

import { CatalogIdMapping } from './catalogIdMapping';
import { CatalogObject } from './catalogObject';
import { SquareError } from './squareError';

/**
* 
*/
export class UpsertCatalogObjectResponse {
    /**
    * The set of [SquareError](#type-squareerror)s encountered.
    */
    'errors'?: Array<SquareError>;
    'catalogObject'?: CatalogObject;
    /**
    * The mapping between client and server IDs for this Upsert.
    */
    'idMappings'?: Array<CatalogIdMapping>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "catalogObject",
            "baseName": "catalog_object",
            "type": "CatalogObject"
        },
        {
            "name": "idMappings",
            "baseName": "id_mappings",
            "type": "Array<CatalogIdMapping>"
        }    ];

    static getAttributeTypeMap() {
        return UpsertCatalogObjectResponse.attributeTypeMap;
    }
}


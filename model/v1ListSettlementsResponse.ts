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

import { V1Settlement } from './v1Settlement';

/**
* 
*/
export class V1ListSettlementsResponse {
    /**
    * 
    */
    'items'?: Array<V1Settlement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1Settlement>"
        }    ];

    static getAttributeTypeMap() {
        return V1ListSettlementsResponse.attributeTypeMap;
    }
}


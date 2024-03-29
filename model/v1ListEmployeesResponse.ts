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

import { V1Employee } from './v1Employee';

/**
* 
*/
export class V1ListEmployeesResponse {
    /**
    * 
    */
    'items'?: Array<V1Employee>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1Employee>"
        }    ];

    static getAttributeTypeMap() {
        return V1ListEmployeesResponse.attributeTypeMap;
    }
}


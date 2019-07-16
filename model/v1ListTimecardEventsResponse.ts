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

import { V1TimecardEvent } from './v1TimecardEvent';

/**
* 
*/
export class V1ListTimecardEventsResponse {
    /**
    * 
    */
    'items'?: Array<V1TimecardEvent>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1TimecardEvent>"
        }    ];

    static getAttributeTypeMap() {
        return V1ListTimecardEventsResponse.attributeTypeMap;
    }
}


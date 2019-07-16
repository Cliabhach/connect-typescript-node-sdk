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

import { Shift } from './shift';

/**
* Represents a request to create a `Shift`
*/
export class CreateShiftRequest {
    /**
    * Unique string value to insure the idempotency of the operation.
    */
    'idempotencyKey'?: string;
    'shift': Shift;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idempotencyKey",
            "baseName": "idempotency_key",
            "type": "string"
        },
        {
            "name": "shift",
            "baseName": "shift",
            "type": "Shift"
        }    ];

    static getAttributeTypeMap() {
        return CreateShiftRequest.attributeTypeMap;
    }
}


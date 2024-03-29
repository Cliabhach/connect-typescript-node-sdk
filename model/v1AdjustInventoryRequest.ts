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


/**
* V1AdjustInventoryRequest
*/
export class V1AdjustInventoryRequest {
    /**
    * The number to adjust the variation\'s quantity by.
    */
    'quantityDelta'?: number;
    /**
    * The reason for the inventory adjustment. See [V1AdjustInventoryRequestAdjustmentType](#type-v1adjustinventoryrequestadjustmenttype) for possible values
    */
    'adjustmentType'?: string;
    /**
    * A note about the inventory adjustment.
    */
    'memo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "quantityDelta",
            "baseName": "quantity_delta",
            "type": "number"
        },
        {
            "name": "adjustmentType",
            "baseName": "adjustment_type",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1AdjustInventoryRequest.attributeTypeMap;
    }
}


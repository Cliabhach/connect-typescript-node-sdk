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

import { V1Money } from './v1Money';

/**
* V1PaymentDiscount
*/
export class V1PaymentDiscount {
    /**
    * The discount\'s name.
    */
    'name'?: string;
    'appliedMoney'?: V1Money;
    /**
    * The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID.
    */
    'discountId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "appliedMoney",
            "baseName": "applied_money",
            "type": "V1Money"
        },
        {
            "name": "discountId",
            "baseName": "discount_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PaymentDiscount.attributeTypeMap;
    }
}


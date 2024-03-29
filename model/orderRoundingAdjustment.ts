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

import { Money } from './money';

/**
* A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination of currency.
*/
export class OrderRoundingAdjustment {
    /**
    * Unique ID that identifies the rounding adjustment only within this order.  This field is read-only.
    */
    'uid'?: string;
    /**
    * The name of the rounding adjustment from the original sale Order.
    */
    'name'?: string;
    'amountMoney'?: Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "amountMoney",
            "baseName": "amount_money",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return OrderRoundingAdjustment.attributeTypeMap;
    }
}


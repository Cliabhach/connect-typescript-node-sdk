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
* A collection of various money amounts.
*/
export class OrderMoneyAmounts {
    'totalMoney'?: Money;
    'taxMoney'?: Money;
    'discountMoney'?: Money;
    'tipMoney'?: Money;
    'serviceChargeMoney'?: Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "totalMoney",
            "baseName": "total_money",
            "type": "Money"
        },
        {
            "name": "taxMoney",
            "baseName": "tax_money",
            "type": "Money"
        },
        {
            "name": "discountMoney",
            "baseName": "discount_money",
            "type": "Money"
        },
        {
            "name": "tipMoney",
            "baseName": "tip_money",
            "type": "Money"
        },
        {
            "name": "serviceChargeMoney",
            "baseName": "service_charge_money",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return OrderMoneyAmounts.attributeTypeMap;
    }
}


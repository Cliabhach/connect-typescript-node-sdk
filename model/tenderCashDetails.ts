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
* Represents the details of a tender with `type` `CASH`.
*/
export class TenderCashDetails {
    'buyerTenderedMoney'?: Money;
    'changeBackMoney'?: Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "buyerTenderedMoney",
            "baseName": "buyer_tendered_money",
            "type": "Money"
        },
        {
            "name": "changeBackMoney",
            "baseName": "change_back_money",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return TenderCashDetails.attributeTypeMap;
    }
}


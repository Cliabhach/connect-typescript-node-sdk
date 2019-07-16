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
* A refund of an [AdditionalRecipientReceivable](#type-additionalrecipientreceivable). This includes the ID of the additional recipient receivable associated to this object, as well as a reference to the [Refund](#type-refund) that created this receivable refund.
*/
export class AdditionalRecipientReceivableRefund {
    /**
    * The receivable refund\'s unique ID, issued by Square payments servers.
    */
    'id': string;
    /**
    * The ID of the receivable that the refund was applied to.
    */
    'receivableId': string;
    /**
    * The ID of the refund that is associated to this receivable refund.
    */
    'refundId': string;
    /**
    * The ID of the location that created the receivable. This is the location ID on the associated transaction.
    */
    'transactionLocationId': string;
    'amountMoney': Money;
    /**
    * The time when the refund was created, in RFC 3339 format.
    */
    'createdAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "receivableId",
            "baseName": "receivable_id",
            "type": "string"
        },
        {
            "name": "refundId",
            "baseName": "refund_id",
            "type": "string"
        },
        {
            "name": "transactionLocationId",
            "baseName": "transaction_location_id",
            "type": "string"
        },
        {
            "name": "amountMoney",
            "baseName": "amount_money",
            "type": "Money"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalRecipientReceivableRefund.attributeTypeMap;
    }
}


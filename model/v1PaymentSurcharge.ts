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
import { V1PaymentTax } from './v1PaymentTax';

/**
* V1PaymentSurcharge
*/
export class V1PaymentSurcharge {
    /**
    * The name of the surcharge.
    */
    'name'?: string;
    'appliedMoney'?: V1Money;
    /**
    * The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, \"0.7\" corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set.
    */
    'rate'?: string;
    'amountMoney'?: V1Money;
    /**
    * Indicates the source of the surcharge. For example, if it was applied as an automatic gratuity for a large group. See [V1PaymentSurchargeType](#type-v1paymentsurchargetype) for possible values
    */
    'type'?: string;
    /**
    * Indicates whether the surcharge is taxable.
    */
    'taxable'?: boolean;
    /**
    * The list of taxes that should be applied to the surcharge.
    */
    'taxes'?: Array<V1PaymentTax>;
    /**
    * A Square-issued unique identifier associated with the surcharge.
    */
    'surchargeId'?: string;

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
            "name": "rate",
            "baseName": "rate",
            "type": "string"
        },
        {
            "name": "amountMoney",
            "baseName": "amount_money",
            "type": "V1Money"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "taxable",
            "baseName": "taxable",
            "type": "boolean"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<V1PaymentTax>"
        },
        {
            "name": "surchargeId",
            "baseName": "surcharge_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PaymentSurcharge.attributeTypeMap;
    }
}


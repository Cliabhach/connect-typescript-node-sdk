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

import { SquareError } from './squareError';
import { V1Money } from './v1Money';

/**
* V1PaymentTax
*/
export class V1PaymentTax {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;
    /**
    * The merchant-defined name of the tax.
    */
    'name'?: string;
    'appliedMoney'?: V1Money;
    /**
    * The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
    */
    'rate'?: string;
    /**
    * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See [V1PaymentTaxInclusionType](#type-v1paymenttaxinclusiontype) for possible values
    */
    'inclusionType'?: string;
    /**
    * The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
    */
    'feeId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
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
            "name": "inclusionType",
            "baseName": "inclusion_type",
            "type": "string"
        },
        {
            "name": "feeId",
            "baseName": "fee_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PaymentTax.attributeTypeMap;
    }
}


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
import { OrderLineItemTax } from './orderLineItemTax';

/**
* Represents a service charge applied to an order.
*/
export class OrderServiceCharge {
    /**
    * Unique ID that identifies the service charge only within this order.  This field is read-only.
    */
    'uid'?: string;
    /**
    * The name of the service charge.
    */
    'name'?: string;
    /**
    * The catalog object ID referencing the service charge [CatalogObject](#type-catalogobject).
    */
    'catalogObjectId'?: string;
    /**
    * The service charge percentage, as a string representation of a decimal number.  For example, `7.25` indicates 7.25%  Exactly one of `percentage` or `amount_money` should be set.
    */
    'percentage'?: string;
    'amountMoney'?: Money;
    'appliedMoney'?: Money;
    'totalMoney'?: Money;
    'totalTaxMoney'?: Money;
    /**
    * The calculation phase at which to apply the service charge. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values
    */
    'calculationPhase'?: string;
    /**
    * Indicates whether the service charge can be taxed. If set to `true`, any order-level taxes will automatically apply to this service charge. Note that service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
    */
    'taxable'?: boolean;
    /**
    * Taxes applied to the service charge. By default, order-level taxes apply to service charges calculated in the `SUBTOTAL_PHASE` if `taxable` is set to `true`.
    */
    'taxes'?: Array<OrderLineItemTax>;

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
            "name": "catalogObjectId",
            "baseName": "catalog_object_id",
            "type": "string"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "string"
        },
        {
            "name": "amountMoney",
            "baseName": "amount_money",
            "type": "Money"
        },
        {
            "name": "appliedMoney",
            "baseName": "applied_money",
            "type": "Money"
        },
        {
            "name": "totalMoney",
            "baseName": "total_money",
            "type": "Money"
        },
        {
            "name": "totalTaxMoney",
            "baseName": "total_tax_money",
            "type": "Money"
        },
        {
            "name": "calculationPhase",
            "baseName": "calculation_phase",
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
            "type": "Array<OrderLineItemTax>"
        }    ];

    static getAttributeTypeMap() {
        return OrderServiceCharge.attributeTypeMap;
    }
}


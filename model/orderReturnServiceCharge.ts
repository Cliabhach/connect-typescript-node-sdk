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
import { OrderReturnTax } from './orderReturnTax';

/**
* The service charge applied to the original order.
*/
export class OrderReturnServiceCharge {
    /**
    * Unique ID that identifies the return service charge only within this order.  This field is read-only.
    */
    'uid'?: string;
    /**
    * `uid` of the Service Charge from the Order which contains the original charge of this service charge, null for unlinked returns.
    */
    'sourceServiceChargeUid'?: string;
    /**
    * The name of the service charge.
    */
    'name'?: string;
    /**
    * The ID referencing the service charge [CatalogObject](#type-catalogobject)
    */
    'catalogObjectId'?: string;
    /**
    * The percentage of the service charge, as a string representation of a decimal number.  A value of `7.25` corresponds to a percentage of 7.25%.  Exactly one of percentage or amount_money should be set.
    */
    'percentage'?: string;
    'amountMoney'?: Money;
    'appliedMoney'?: Money;
    'totalMoney'?: Money;
    'totalTaxMoney'?: Money;
    /**
    * The calculation phase after which to apply the service charge.  This field is read-only. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values
    */
    'calculationPhase'?: string;
    /**
    * Indicates whether the surcharge can be taxed. Service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
    */
    'taxable'?: boolean;
    /**
    * The taxes which apply to the service charge. Return-level taxes apply by default to service charge calculated in the `SUBTOTAL_PHASE` if the service charge is marked as taxable.
    */
    'returnTaxes'?: Array<OrderReturnTax>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "sourceServiceChargeUid",
            "baseName": "source_service_charge_uid",
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
            "name": "returnTaxes",
            "baseName": "return_taxes",
            "type": "Array<OrderReturnTax>"
        }    ];

    static getAttributeTypeMap() {
        return OrderReturnServiceCharge.attributeTypeMap;
    }
}


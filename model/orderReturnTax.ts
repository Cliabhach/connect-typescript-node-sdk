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
* The line item tax being returned.
*/
export class OrderReturnTax {
    /**
    * Unique ID that identifies the return tax only within this order.  This field is read-only.
    */
    'uid'?: string;
    /**
    * `uid` of the Tax from the Order which contains the original charge of this tax.
    */
    'sourceTaxUid'?: string;
    /**
    * The catalog object id referencing [CatalogTax](#type-catalogtax).
    */
    'catalogObjectId'?: string;
    /**
    * The tax\'s name.
    */
    'name'?: string;
    /**
    * Indicates the calculation method used to apply the tax. See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values
    */
    'type'?: string;
    /**
    * The percentage of the tax, as a string representation of a decimal number.  A value of `7.25` corresponds to a percentage of 7.25%.
    */
    'percentage'?: string;
    'appliedMoney'?: Money;
    /**
    * Indicates the level at which the tax applies. This field is set by the server. If set in a CreateOrder request, it will be ignored on write. See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values
    */
    'scope'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "sourceTaxUid",
            "baseName": "source_tax_uid",
            "type": "string"
        },
        {
            "name": "catalogObjectId",
            "baseName": "catalog_object_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "string"
        },
        {
            "name": "appliedMoney",
            "baseName": "applied_money",
            "type": "Money"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderReturnTax.attributeTypeMap;
    }
}


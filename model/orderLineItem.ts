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
import { OrderLineItemDiscount } from './orderLineItemDiscount';
import { OrderLineItemModifier } from './orderLineItemModifier';
import { OrderLineItemTax } from './orderLineItemTax';
import { OrderQuantityUnit } from './orderQuantityUnit';

/**
* Represents a line item in an order. Each line item describes a different product to purchase, with its own quantity and price details.
*/
export class OrderLineItem {
    /**
    * Unique ID that identifies the line item only within this order.  This field is read-only.
    */
    'uid'?: string;
    /**
    * The name of the line item.
    */
    'name'?: string;
    /**
    * The quantity purchased, formatted as a decimal number. For example: `\"3\"`.  Line items with a `quantity_unit` can have non-integer quantities. For example: `\"1.70000\"`.
    */
    'quantity': string;
    'quantityUnit'?: OrderQuantityUnit;
    /**
    * The note of the line item.
    */
    'note'?: string;
    /**
    * The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item.
    */
    'catalogObjectId'?: string;
    /**
    * The name of the variation applied to this line item.
    */
    'variationName'?: string;
    /**
    * The [CatalogModifier](#type-catalogmodifier)s applied to this line item.
    */
    'modifiers'?: Array<OrderLineItemModifier>;
    /**
    * A list of taxes applied to this line item. On read or retrieve, this list includes both item-level taxes and any order-level taxes apportioned to this item. When creating an Order, set your item-level taxes in this list.
    */
    'taxes'?: Array<OrderLineItemTax>;
    /**
    * A list of discounts applied to this line item. On read or retrieve, this list includes both item-level discounts and any order-level discounts apportioned to this item. When creating an Order, set your item-level discounts in this list.
    */
    'discounts'?: Array<OrderLineItemDiscount>;
    'basePriceMoney'?: Money;
    'variationTotalPriceMoney'?: Money;
    'grossSalesMoney'?: Money;
    'totalTaxMoney'?: Money;
    'totalDiscountMoney'?: Money;
    'totalMoney'?: Money;

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
            "name": "quantity",
            "baseName": "quantity",
            "type": "string"
        },
        {
            "name": "quantityUnit",
            "baseName": "quantity_unit",
            "type": "OrderQuantityUnit"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "catalogObjectId",
            "baseName": "catalog_object_id",
            "type": "string"
        },
        {
            "name": "variationName",
            "baseName": "variation_name",
            "type": "string"
        },
        {
            "name": "modifiers",
            "baseName": "modifiers",
            "type": "Array<OrderLineItemModifier>"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<OrderLineItemTax>"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<OrderLineItemDiscount>"
        },
        {
            "name": "basePriceMoney",
            "baseName": "base_price_money",
            "type": "Money"
        },
        {
            "name": "variationTotalPriceMoney",
            "baseName": "variation_total_price_money",
            "type": "Money"
        },
        {
            "name": "grossSalesMoney",
            "baseName": "gross_sales_money",
            "type": "Money"
        },
        {
            "name": "totalTaxMoney",
            "baseName": "total_tax_money",
            "type": "Money"
        },
        {
            "name": "totalDiscountMoney",
            "baseName": "total_discount_money",
            "type": "Money"
        },
        {
            "name": "totalMoney",
            "baseName": "total_money",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return OrderLineItem.attributeTypeMap;
    }
}

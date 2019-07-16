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

import { CreateOrderRequestDiscount } from './createOrderRequestDiscount';
import { CreateOrderRequestModifier } from './createOrderRequestModifier';
import { CreateOrderRequestTax } from './createOrderRequestTax';
import { Money } from './money';

/**
* __Deprecated__: Please use the [OrderLineItem](#type-orderlineitem) type in the order field of [CreateOrderRequest](#type-createorderrequest) instead.  Represents a line item to include in an order. Each line item describes a different product to purchase, with its own quantity and price details.  Line items can either reference objects from the merchant\'s catalog, or can alternatively specify a name and price instead.
*/
export class CreateOrderRequestLineItem {
    /**
    * Only used for ad hoc line items. The name of the line item. This value cannot exceed 500 characters.  Do not provide a value for this field if you provide a value for `catalog_object_id`.
    */
    'name'?: string;
    /**
    * The quantity to purchase, as a string representation of a number.  This string must have a positive integer value.
    */
    'quantity': string;
    'basePriceMoney'?: Money;
    /**
    * Only used for ad hoc line items. The variation name of the line item. This value cannot exceed 255 characters.  If this value is not set for an ad hoc line item, the default value of `Regular` is used.  Do not provide a value for this field if you provide a value for the `catalog_object_id`.
    */
    'variationName'?: string;
    /**
    * The note of the line item. This value cannot exceed 500 characters.
    */
    'note'?: string;
    /**
    * Only used for Catalog line items. The catalog object ID for an existing [CatalogItemVariation](#type-catalogitemvariation).  Do not provide a value for this field if you provide a value for `name` and `base_price_money`.
    */
    'catalogObjectId'?: string;
    /**
    * Only used for Catalog line items. The modifiers to include on the line item.
    */
    'modifiers'?: Array<CreateOrderRequestModifier>;
    /**
    * The taxes to include on the line item.
    */
    'taxes'?: Array<CreateOrderRequestTax>;
    /**
    * The discounts to include on the line item.
    */
    'discounts'?: Array<CreateOrderRequestDiscount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "basePriceMoney",
            "baseName": "base_price_money",
            "type": "Money"
        },
        {
            "name": "variationName",
            "baseName": "variation_name",
            "type": "string"
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
            "name": "modifiers",
            "baseName": "modifiers",
            "type": "Array<CreateOrderRequestModifier>"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<CreateOrderRequestTax>"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<CreateOrderRequestDiscount>"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderRequestLineItem.attributeTypeMap;
    }
}

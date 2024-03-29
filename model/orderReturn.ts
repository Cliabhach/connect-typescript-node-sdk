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

import { OrderMoneyAmounts } from './orderMoneyAmounts';
import { OrderReturnDiscount } from './orderReturnDiscount';
import { OrderReturnLineItem } from './orderReturnLineItem';
import { OrderReturnServiceCharge } from './orderReturnServiceCharge';
import { OrderReturnTax } from './orderReturnTax';
import { OrderRoundingAdjustment } from './orderRoundingAdjustment';

/**
* The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order.
*/
export class OrderReturn {
    /**
    * Unique ID that identifies the return only within this order.  This field is read-only.
    */
    'uid'?: string;
    /**
    * Order which contains the original sale of these returned line items. This will be unset for unlinked returns.
    */
    'sourceOrderId'?: string;
    /**
    * Collection of line items which are being returned.
    */
    'returnLineItems'?: Array<OrderReturnLineItem>;
    /**
    * Collection of service charges which are being returned.  This field is read-only.
    */
    'returnServiceCharges'?: Array<OrderReturnServiceCharge>;
    /**
    * Collection of taxes which are being returned.
    */
    'returnTaxes'?: Array<OrderReturnTax>;
    /**
    * Collection of discounts which are being returned.
    */
    'returnDiscounts'?: Array<OrderReturnDiscount>;
    'roundingAdjustment'?: OrderRoundingAdjustment;
    'returnAmounts'?: OrderMoneyAmounts;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "sourceOrderId",
            "baseName": "source_order_id",
            "type": "string"
        },
        {
            "name": "returnLineItems",
            "baseName": "return_line_items",
            "type": "Array<OrderReturnLineItem>"
        },
        {
            "name": "returnServiceCharges",
            "baseName": "return_service_charges",
            "type": "Array<OrderReturnServiceCharge>"
        },
        {
            "name": "returnTaxes",
            "baseName": "return_taxes",
            "type": "Array<OrderReturnTax>"
        },
        {
            "name": "returnDiscounts",
            "baseName": "return_discounts",
            "type": "Array<OrderReturnDiscount>"
        },
        {
            "name": "roundingAdjustment",
            "baseName": "rounding_adjustment",
            "type": "OrderRoundingAdjustment"
        },
        {
            "name": "returnAmounts",
            "baseName": "return_amounts",
            "type": "OrderMoneyAmounts"
        }    ];

    static getAttributeTypeMap() {
        return OrderReturn.attributeTypeMap;
    }
}


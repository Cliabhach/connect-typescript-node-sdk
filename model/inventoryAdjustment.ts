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
import { SourceApplication } from './sourceApplication';

/**
* Represents a change in state or quantity of product inventory at a particular time and location.
*/
export class InventoryAdjustment {
    /**
    * A unique ID generated by Square for the [InventoryAdjustment](#type-inventoryadjustment).
    */
    'id'?: string;
    /**
    * An optional ID provided by the application to tie the [InventoryAdjustment](#type-inventoryadjustment) to an external system.
    */
    'referenceId'?: string;
    /**
    * The [InventoryState](#type-inventorystate) of the related quantity of items before the adjustment. See [InventoryState](#type-inventorystate) for possible values
    */
    'fromState'?: string;
    /**
    * The [InventoryState](#type-inventorystate) of the related quantity of items after the adjustment. See [InventoryState](#type-inventorystate) for possible values
    */
    'toState'?: string;
    /**
    * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
    */
    'locationId'?: string;
    /**
    * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
    */
    'catalogObjectId'?: string;
    /**
    * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
    */
    'catalogObjectType'?: string;
    /**
    * The number of items affected by the adjustment as a decimal string. Can support up to 5 digits after the decimal point.  _Important_: The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.  Read [Decimal Quantities (BETA)](/orders-api/what-it-does#decimal-quantities) for more information.
    */
    'quantity'?: string;
    'totalPriceMoney'?: Money;
    /**
    * A client-generated timestamp in RFC 3339 format that indicates when the adjustment took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
    */
    'occurredAt'?: string;
    /**
    * A read-only timestamp in RFC 3339 format that indicates when Square received the adjustment.
    */
    'createdAt'?: string;
    'source'?: SourceApplication;
    /**
    * The Square ID of the [Employee](#type-employee) responsible for the inventory adjustment.
    */
    'employeeId'?: string;
    /**
    * The read-only Square ID of the [Transaction][#type-transaction] that caused the adjustment. Only relevant for payment-related state transitions.
    */
    'transactionId'?: string;
    /**
    * The read-only Square ID of the [Refund][#type-refund] that caused the adjustment. Only relevant for refund-related state transitions.
    */
    'refundId'?: string;
    /**
    * The read-only Square ID of the purchase order that caused the adjustment. Only relevant for state transitions from the Square for Retail app.
    */
    'purchaseOrderId'?: string;
    /**
    * The read-only Square ID of the Square goods receipt that caused the adjustment. Only relevant for state transitions from the Square for Retail app.
    */
    'goodsReceiptId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "referenceId",
            "baseName": "reference_id",
            "type": "string"
        },
        {
            "name": "fromState",
            "baseName": "from_state",
            "type": "string"
        },
        {
            "name": "toState",
            "baseName": "to_state",
            "type": "string"
        },
        {
            "name": "locationId",
            "baseName": "location_id",
            "type": "string"
        },
        {
            "name": "catalogObjectId",
            "baseName": "catalog_object_id",
            "type": "string"
        },
        {
            "name": "catalogObjectType",
            "baseName": "catalog_object_type",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "string"
        },
        {
            "name": "totalPriceMoney",
            "baseName": "total_price_money",
            "type": "Money"
        },
        {
            "name": "occurredAt",
            "baseName": "occurred_at",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "SourceApplication"
        },
        {
            "name": "employeeId",
            "baseName": "employee_id",
            "type": "string"
        },
        {
            "name": "transactionId",
            "baseName": "transaction_id",
            "type": "string"
        },
        {
            "name": "refundId",
            "baseName": "refund_id",
            "type": "string"
        },
        {
            "name": "purchaseOrderId",
            "baseName": "purchase_order_id",
            "type": "string"
        },
        {
            "name": "goodsReceiptId",
            "baseName": "goods_receipt_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InventoryAdjustment.attributeTypeMap;
    }
}

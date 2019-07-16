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

import { OrderFulfillmentRecipient } from './orderFulfillmentRecipient';

/**
* Contains details necessary to fulfill a pickup order.
*/
export class OrderFulfillmentPickupDetails {
    'recipient'?: OrderFulfillmentRecipient;
    /**
    * The expiry [timestamp](#workingwithdates) in RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\". This timestamp indicates when the pickup fulfillment will expire if it is not accepted by the merchant. Expiration time can only be set up to 7 days in the future. If not set, this pickup fulfillment will be automatically accepted when placed.
    */
    'expiresAt'?: string;
    /**
    * The auto completion duration in RFC3339 duration format, e.g., \"P1W3D\". If set, an open and accepted pickup fulfillment will automatically move to the `COMPLETED` state after this period of time. If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
    */
    'autoCompleteDuration'?: string;
    /**
    * The schedule type of the pickup fulfillment. Defaults to `SCHEDULED`. See [OrderFulfillmentPickupDetailsScheduleType](#type-orderfulfillmentpickupdetailsscheduletype) for possible values
    */
    'scheduleType'?: string;
    /**
    * The pickup [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\". For fulfillments with the schedule type `ASAP`, this is automatically set to the current time plus the expected duration to prepare the fulfillment. This represents the start of the pickup window.
    */
    'pickupAt'?: string;
    /**
    * The pickup window duration in RFC3339 duration format, e.g., \"P1W3D\". This duration represents the window of time for which the order should be picked up after the `pickup_at` time. Can be used as an informational guideline for merchants.
    */
    'pickupWindowDuration'?: string;
    /**
    * The preparation time duration in RFC3339 duration format, e.g., \"P1W3D\". This duration indicates how long it takes the merchant to prepare this fulfillment.
    */
    'prepTimeDuration'?: string;
    /**
    * A general note about the pickup fulfillment.  Notes are useful for providing additional instructions and are displayed in Square apps.
    */
    'note'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was placed.
    */
    'placedAt'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was accepted by the merchant.
    */
    'acceptedAt'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was rejected.
    */
    'rejectedAt'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the merchant set the fulfillment as ready for pickup.
    */
    'readyAt'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment expired.
    */
    'expiredAt'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was picked up by the recipient.
    */
    'pickedUpAt'?: string;
    /**
    * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was canceled by the merchant or buyer.
    */
    'canceledAt'?: string;
    /**
    * A description of why the pickup was canceled. Max length is 100 characters.
    */
    'cancelReason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "OrderFulfillmentRecipient"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "autoCompleteDuration",
            "baseName": "auto_complete_duration",
            "type": "string"
        },
        {
            "name": "scheduleType",
            "baseName": "schedule_type",
            "type": "string"
        },
        {
            "name": "pickupAt",
            "baseName": "pickup_at",
            "type": "string"
        },
        {
            "name": "pickupWindowDuration",
            "baseName": "pickup_window_duration",
            "type": "string"
        },
        {
            "name": "prepTimeDuration",
            "baseName": "prep_time_duration",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "placedAt",
            "baseName": "placed_at",
            "type": "string"
        },
        {
            "name": "acceptedAt",
            "baseName": "accepted_at",
            "type": "string"
        },
        {
            "name": "rejectedAt",
            "baseName": "rejected_at",
            "type": "string"
        },
        {
            "name": "readyAt",
            "baseName": "ready_at",
            "type": "string"
        },
        {
            "name": "expiredAt",
            "baseName": "expired_at",
            "type": "string"
        },
        {
            "name": "pickedUpAt",
            "baseName": "picked_up_at",
            "type": "string"
        },
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "string"
        },
        {
            "name": "cancelReason",
            "baseName": "cancel_reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderFulfillmentPickupDetails.attributeTypeMap;
    }
}

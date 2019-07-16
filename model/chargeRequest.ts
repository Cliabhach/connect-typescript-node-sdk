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

import { AdditionalRecipient } from './additionalRecipient';
import { Address } from './address';
import { Money } from './money';

/**
* Defines the parameters that can be included in the body of a request to the Charge endpoint.
*/
export class ChargeRequest {
    /**
    * A value you specify that uniquely identifies this transaction among transactions you\'ve created.  If you\'re unsure whether a particular transaction succeeded, you can reattempt it with the same idempotency key without worrying about double-charging the buyer.  See [Idempotency](/basics/api101/idempotency) for more information.
    */
    'idempotencyKey': string;
    'amountMoney': Money;
    /**
    * A nonce generated from the `SqPaymentForm` that represents the card to charge.  The application that provides a nonce to this endpoint must be the _same application_ that generated the nonce with the `SqPaymentForm`. Otherwise, the nonce is invalid.  Do not provide a value for this field if you provide a value for `customer_card_id`.
    */
    'cardNonce'?: string;
    /**
    * The ID of the customer card on file to charge. Do not provide a value for this field if you provide a value for `card_nonce`.  If you provide this value, you _must_ also provide a value for `customer_id`.
    */
    'customerCardId'?: string;
    /**
    * If `true`, the request will only perform an Auth on the provided card. You can then later perform either a Capture (with the [CaptureTransaction](#endpoint-capturetransaction) endpoint) or a Void (with the [VoidTransaction](#endpoint-voidtransaction) endpoint).  Default value: `false`
    */
    'delayCapture'?: boolean;
    /**
    * An optional ID you can associate with the transaction for your own purposes (such as to associate the transaction with an entity ID in your own database).  This value cannot exceed 40 characters.
    */
    'referenceId'?: string;
    /**
    * An optional note to associate with the transaction.  This value cannot exceed 60 characters.
    */
    'note'?: string;
    /**
    * The ID of the customer to associate this transaction with. This field is required if you provide a value for `customer_card_id`, and optional otherwise.
    */
    'customerId'?: string;
    'billingAddress'?: Address;
    'shippingAddress'?: Address;
    /**
    * The buyer\'s email address, if available.
    */
    'buyerEmailAddress'?: string;
    /**
    * The ID of the order to associate with this transaction.  If you provide this value, the `amount_money` value of your request must __exactly match__ the value of the order\'s `total_money` field.
    */
    'orderId'?: string;
    /**
    * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be split from here.  If you provide this value, the `amount_money` value in your additional_recipients must not be more than 90% of the `amount_money` value in the charge request. The `location_id` must be the valid location of the app owner merchant.  This field requires the `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.  This field is currently not supported in sandbox.
    */
    'additionalRecipients'?: Array<AdditionalRecipient>;
    /**
    * An identifying token generated by `SqPaymentForm.verifyBuyer()`. Verification tokens encapsulate customer device information and 3-D Secure challenge results to indicate that Square has verified the buyer identity.
    */
    'verificationToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idempotencyKey",
            "baseName": "idempotency_key",
            "type": "string"
        },
        {
            "name": "amountMoney",
            "baseName": "amount_money",
            "type": "Money"
        },
        {
            "name": "cardNonce",
            "baseName": "card_nonce",
            "type": "string"
        },
        {
            "name": "customerCardId",
            "baseName": "customer_card_id",
            "type": "string"
        },
        {
            "name": "delayCapture",
            "baseName": "delay_capture",
            "type": "boolean"
        },
        {
            "name": "referenceId",
            "baseName": "reference_id",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "customerId",
            "baseName": "customer_id",
            "type": "string"
        },
        {
            "name": "billingAddress",
            "baseName": "billing_address",
            "type": "Address"
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "Address"
        },
        {
            "name": "buyerEmailAddress",
            "baseName": "buyer_email_address",
            "type": "string"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "additionalRecipients",
            "baseName": "additional_recipients",
            "type": "Array<AdditionalRecipient>"
        },
        {
            "name": "verificationToken",
            "baseName": "verification_token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChargeRequest.attributeTypeMap;
    }
}

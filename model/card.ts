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

import { Address } from './address';

/**
* Represents the payment details of a card to be used for payments. These details are determined by the `card_nonce` generated by `SqPaymentForm`.
*/
export class Card {
    /**
    * Unique ID for this card. Generated by Square.
    */
    'id'?: string;
    /**
    * The card\'s brand (such as `VISA`). See [CardBrand](#type-cardbrand) for possible values
    */
    'cardBrand'?: string;
    /**
    * The last 4 digits of the card number.
    */
    'last4'?: string;
    /**
    * The expiration month of the associated card as an integer between 1 and 12.
    */
    'expMonth'?: number;
    /**
    * The four-digit year of the card\'s expiration date.
    */
    'expYear'?: number;
    /**
    * The name of the cardholder.
    */
    'cardholderName'?: string;
    'billingAddress'?: Address;
    /**
    * A unique, Square-assigned ID that identifies the card across multiple locations and applications for a single Square account.
    */
    'fingerprint'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "cardBrand",
            "baseName": "card_brand",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last_4",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "number"
        },
        {
            "name": "cardholderName",
            "baseName": "cardholder_name",
            "type": "string"
        },
        {
            "name": "billingAddress",
            "baseName": "billing_address",
            "type": "Address"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}


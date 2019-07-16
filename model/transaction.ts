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
import { Refund } from './refund';
import { Tender } from './tender';

/**
* Represents a transaction processed with Square, either with the Connect API or with Square Point of Sale.  The `tenders` field of this object lists all methods of payment used to pay in the transaction.
*/
export class Transaction {
    /**
    * The transaction\'s unique ID, issued by Square payments servers.
    */
    'id'?: string;
    /**
    * The ID of the transaction\'s associated location.
    */
    'locationId'?: string;
    /**
    * The time when the transaction was created, in RFC 3339 format.
    */
    'createdAt'?: string;
    /**
    * The tenders used to pay in the transaction.
    */
    'tenders'?: Array<Tender>;
    /**
    * Refunds that have been applied to any tender in the transaction.
    */
    'refunds'?: Array<Refund>;
    /**
    * If the transaction was created with the [Charge](#endpoint-transactions-charge) endpoint, this value is the same as the value provided for the `reference_id` parameter in the request to that endpoint. Otherwise, it is not set.
    */
    'referenceId'?: string;
    /**
    * The Square product that processed the transaction. See [TransactionProduct](#type-transactionproduct) for possible values
    */
    'product'?: string;
    /**
    * If the transaction was created in the Square Point of Sale app, this value is the ID generated for the transaction by Square Point of Sale.  This ID has no relationship to the transaction\'s canonical `id`, which is generated by Square\'s backend servers. This value is generated for bookkeeping purposes, in case the transaction cannot immediately be completed (for example, if the transaction is processed in offline mode).  It is not currently possible with the Connect API to perform a transaction lookup by this value.
    */
    'clientId'?: string;
    'shippingAddress'?: Address;
    /**
    * The order_id is an identifier for the order associated with this transaction, if any.
    */
    'orderId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "locationId",
            "baseName": "location_id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "tenders",
            "baseName": "tenders",
            "type": "Array<Tender>"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "Array<Refund>"
        },
        {
            "name": "referenceId",
            "baseName": "reference_id",
            "type": "string"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string"
        },
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "Address"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}

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

import { SquareError } from './squareError';
import { Transaction } from './transaction';

/**
* Defines the fields that are included in the response body of a request to the ListTransactions endpoint.  One of `errors` or `transactions` is present in a given response (never both).
*/
export class ListTransactionsResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;
    /**
    * An array of transactions that match your query.
    */
    'transactions'?: Array<Transaction>;
    /**
    * A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the `cursor` parameter in a subsequent request to this endpoint.  See [Pagination](/basics/api101/pagination) for more information.
    */
    'cursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<Transaction>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListTransactionsResponse.attributeTypeMap;
    }
}


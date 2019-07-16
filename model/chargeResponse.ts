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
* Defines the fields that are included in the response body of a request to the Charge endpoint.  One of `errors` or `transaction` is present in a given response (never both).
*/
export class ChargeResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;
    'transaction'?: Transaction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        }    ];

    static getAttributeTypeMap() {
        return ChargeResponse.attributeTypeMap;
    }
}


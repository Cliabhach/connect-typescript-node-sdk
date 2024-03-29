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

import { Card } from './card';
import { SquareError } from './squareError';

/**
* Defines the fields that are included in the response body of a request to the CreateCustomerCard endpoint.  One of `errors` or `card` is present in a given response (never both).
*/
export class CreateCustomerCardResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;
    'card'?: Card;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        }    ];

    static getAttributeTypeMap() {
        return CreateCustomerCardResponse.attributeTypeMap;
    }
}


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

/**
* Defines the fields that are included in the response body of a request to the RegisterDomain endpoint.  Either `errors` or `status` will be present in a given response (never both).
*/
export class RegisterDomainResponse {
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;
    /**
    * Status of the domain registration. See [RegisterDomainResponseStatus](#type-registerdomainresponsestatus) for possible values
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RegisterDomainResponse.attributeTypeMap;
    }
}


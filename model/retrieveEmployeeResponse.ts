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

import { Employee } from './employee';
import { SquareError } from './squareError';

/**
* Defines the fields that are included in the response body of a request to the RetrieveEmployee endpoint.  One of `errors` or `employee` is present in a given response (never both).
*/
export class RetrieveEmployeeResponse {
    'employee'?: Employee;
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employee",
            "baseName": "employee",
            "type": "Employee"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        }    ];

    static getAttributeTypeMap() {
        return RetrieveEmployeeResponse.attributeTypeMap;
    }
}


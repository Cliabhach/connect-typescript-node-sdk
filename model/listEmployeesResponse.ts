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

/**
* Defines the fields that are included in the response body of a request to the ListEmployees endpoint.  One of `errors` or `employees` is present in a given response (never both).
*/
export class ListEmployeesResponse {
    /**
    * List of employees returned from the request.
    */
    'employees'?: Array<Employee>;
    /**
    * The token to be used to retrieve the next page of results.
    */
    'cursor'?: string;
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<Error>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employees",
            "baseName": "employees",
            "type": "Array<Employee>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
        }    ];

    static getAttributeTypeMap() {
        return ListEmployeesResponse.attributeTypeMap;
    }
}

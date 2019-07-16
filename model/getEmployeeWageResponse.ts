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

import { EmployeeWage } from './employeeWage';

/**
* A response to a request to get an `EmployeeWage`. Contains the requested `EmployeeWage` objects. May contain a set of `Error` objects if the request resulted in errors.
*/
export class GetEmployeeWageResponse {
    'employeeWage'?: EmployeeWage;
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<Error>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeWage",
            "baseName": "employee_wage",
            "type": "EmployeeWage"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
        }    ];

    static getAttributeTypeMap() {
        return GetEmployeeWageResponse.attributeTypeMap;
    }
}


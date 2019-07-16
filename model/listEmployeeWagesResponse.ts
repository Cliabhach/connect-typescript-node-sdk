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
import { SquareError } from './squareError';

/**
* The response to a request for a set of `EmployeeWage` objects. Contains  a set of `EmployeeWage`.
*/
export class ListEmployeeWagesResponse {
    /**
    * A page of Employee Wage results.
    */
    'employeeWages'?: Array<EmployeeWage>;
    /**
    * Value supplied in the subsequent request to fetch the next next page of Employee Wage results.
    */
    'cursor'?: string;
    /**
    * Any errors that occurred during the request.
    */
    'errors'?: Array<SquareError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeWages",
            "baseName": "employee_wages",
            "type": "Array<EmployeeWage>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SquareError>"
        }    ];

    static getAttributeTypeMap() {
        return ListEmployeeWagesResponse.attributeTypeMap;
    }
}


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

import { CustomerCreationSourceFilter } from './customerCreationSourceFilter';
import { TimeRange } from './timeRange';

/**
* Represents a set of [`CustomerQuery`](#type-customerquery) filters used to limit the set of Customers returned by [`SearchCustomers`](#endpoint-customers-seachcustomers).
*/
export class CustomerFilter {
    'creationSource'?: CustomerCreationSourceFilter;
    'createdAt'?: TimeRange;
    'updatedAt'?: TimeRange;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creationSource",
            "baseName": "creation_source",
            "type": "CustomerCreationSourceFilter"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "TimeRange"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "TimeRange"
        }    ];

    static getAttributeTypeMap() {
        return CustomerFilter.attributeTypeMap;
    }
}


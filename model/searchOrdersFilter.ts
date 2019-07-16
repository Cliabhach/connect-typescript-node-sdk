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

import { SearchOrdersCustomerFilter } from './searchOrdersCustomerFilter';
import { SearchOrdersDateTimeFilter } from './searchOrdersDateTimeFilter';
import { SearchOrdersFulfillmentFilter } from './searchOrdersFulfillmentFilter';
import { SearchOrdersSourceFilter } from './searchOrdersSourceFilter';
import { SearchOrdersStateFilter } from './searchOrdersStateFilter';

/**
* Filter options to use for a query. Multiple filters will be ANDed together.
*/
export class SearchOrdersFilter {
    'stateFilter'?: SearchOrdersStateFilter;
    'dateTimeFilter'?: SearchOrdersDateTimeFilter;
    'fulfillmentFilter'?: SearchOrdersFulfillmentFilter;
    'sourceFilter'?: SearchOrdersSourceFilter;
    'customerFilter'?: SearchOrdersCustomerFilter;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stateFilter",
            "baseName": "state_filter",
            "type": "SearchOrdersStateFilter"
        },
        {
            "name": "dateTimeFilter",
            "baseName": "date_time_filter",
            "type": "SearchOrdersDateTimeFilter"
        },
        {
            "name": "fulfillmentFilter",
            "baseName": "fulfillment_filter",
            "type": "SearchOrdersFulfillmentFilter"
        },
        {
            "name": "sourceFilter",
            "baseName": "source_filter",
            "type": "SearchOrdersSourceFilter"
        },
        {
            "name": "customerFilter",
            "baseName": "customer_filter",
            "type": "SearchOrdersCustomerFilter"
        }    ];

    static getAttributeTypeMap() {
        return SearchOrdersFilter.attributeTypeMap;
    }
}


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

import { SearchOrdersQuery } from './searchOrdersQuery';

/**
* The request does not have any required fields. When given no query criteria, SearchOrders will return all results for all of the merchant’s locations. When fetching additional pages using a `cursor`, the `query` must be equal to the `query` used to fetch the first page of results.
*/
export class SearchOrdersRequest {
    /**
    * The location IDs for the orders to query. The caller must have access to all provided locations.  Min: 1 `location_ids`. Max: 10 `location_ids`.
    */
    'locationIds'?: Array<string>;
    /**
    * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query. See [Pagination](/basics/api101/pagination) for more information.
    */
    'cursor'?: string;
    'query'?: SearchOrdersQuery;
    /**
    * Number of results to be returned in a single page. SearchOrders may use a smaller limit than specified depending on server load. If the response includes a `cursor` field, you can use it to retrieve the next set of results. Default: `500`
    */
    'limit'?: number;
    /**
    *  If set to `true`, SearchOrders will return [`OrderEntry`](#type-orderentry) objects instead of `Order` objects. `OrderEntry` objects are lightweight descriptions of orders that include `order_id`s.  Default: `false`.
    */
    'returnEntries'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "locationIds",
            "baseName": "location_ids",
            "type": "Array<string>"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "SearchOrdersQuery"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "returnEntries",
            "baseName": "return_entries",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SearchOrdersRequest.attributeTypeMap;
    }
}

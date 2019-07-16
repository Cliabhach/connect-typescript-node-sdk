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


/**
* 
*/
export class V1ListPaymentsRequest {
    /**
    * The order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
    */
    'order'?: string;
    /**
    * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
    */
    'beginTime'?: string;
    /**
    * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
    */
    'endTime'?: string;
    /**
    * The maximum number of payments to return in a single response. This value cannot exceed 200.
    */
    'limit'?: number;
    /**
    * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
    */
    'batchToken'?: string;
    /**
    * Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed.
    */
    'includePartial'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "string"
        },
        {
            "name": "beginTime",
            "baseName": "begin_time",
            "type": "string"
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "batchToken",
            "baseName": "batch_token",
            "type": "string"
        },
        {
            "name": "includePartial",
            "baseName": "include_partial",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1ListPaymentsRequest.attributeTypeMap;
    }
}

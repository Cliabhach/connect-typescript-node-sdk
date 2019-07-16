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
export class V1ListOrdersRequest {
    /**
    * TThe order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
    */
    'order'?: string;
    /**
    * The maximum number of payments to return in a single response. This value cannot exceed 200.
    */
    'limit'?: number;
    /**
    * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
    */
    'batchToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "order",
            "baseName": "order",
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
        }    ];

    static getAttributeTypeMap() {
        return V1ListOrdersRequest.attributeTypeMap;
    }
}


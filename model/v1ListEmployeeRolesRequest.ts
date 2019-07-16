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
export class V1ListEmployeeRolesRequest {
    /**
    * The order in which employees are listed in the response, based on their created_at field.Default value: ASC See [SortOrder](#type-sortorder) for possible values
    */
    'order'?: string;
    /**
    * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
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
        return V1ListEmployeeRolesRequest.attributeTypeMap;
    }
}

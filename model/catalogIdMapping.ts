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
* A mapping between a client-supplied temporary ID and a permanent server ID.
*/
export class CatalogIdMapping {
    /**
    * The client-supplied, temporary `#`-prefixed ID for a new [CatalogObject](#type-catalogobject).
    */
    'clientObjectId'?: string;
    /**
    * The permanent ID for the [CatalogObject](#type-catalogobject) created by the server.
    */
    'objectId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientObjectId",
            "baseName": "client_object_id",
            "type": "string"
        },
        {
            "name": "objectId",
            "baseName": "object_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CatalogIdMapping.attributeTypeMap;
    }
}


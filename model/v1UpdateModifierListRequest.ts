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
* V1UpdateModifierListRequest
*/
export class V1UpdateModifierListRequest {
    /**
    * The modifier list\'s name.
    */
    'name'?: string;
    /**
    * Indicates whether multiple options from the modifier list can be applied to a single item. See [V1UpdateModifierListRequestSelectionType](#type-v1updatemodifierlistrequestselectiontype) for possible values
    */
    'selectionType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "selectionType",
            "baseName": "selection_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1UpdateModifierListRequest.attributeTypeMap;
    }
}

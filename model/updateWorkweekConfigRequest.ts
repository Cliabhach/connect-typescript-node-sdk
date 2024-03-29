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

import { WorkweekConfig } from './workweekConfig';

/**
* A request to update a `WorkweekConfig` object
*/
export class UpdateWorkweekConfigRequest {
    'workweekConfig'?: WorkweekConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workweekConfig",
            "baseName": "workweek_config",
            "type": "WorkweekConfig"
        }    ];

    static getAttributeTypeMap() {
        return UpdateWorkweekConfigRequest.attributeTypeMap;
    }
}


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

import { MeasurementUnit } from './measurementUnit';

/**
* Represents the unit used to measure a [CatalogItemVariation](#type-catalogitemvariation) and specifies the precision for decimal quantities.
*/
export class CatalogMeasurementUnit {
    'measurementUnit'?: MeasurementUnit;
    /**
    *  Represents the maximum number of positions allowed after the decimal in quantities measured with this unit. For example, if the precision is 2, then an itemization’s quantity can be 0.01, 0.12, etc.  Min: 0  Max: 5  Default: 3
    */
    'precision'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "measurementUnit",
            "baseName": "measurement_unit",
            "type": "MeasurementUnit"
        },
        {
            "name": "precision",
            "baseName": "precision",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CatalogMeasurementUnit.attributeTypeMap;
    }
}


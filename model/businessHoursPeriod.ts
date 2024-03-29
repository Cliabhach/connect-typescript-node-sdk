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
*  Represents a period of time during which a business location is open.
*/
export class BusinessHoursPeriod {
    /**
    * The day of week for this time period. See [DayOfWeek](#type-dayofweek) for possible values
    */
    'dayOfWeek'?: string;
    /**
    * The start time of a business hours period, specified in local time using partial-time RFC3339 format.
    */
    'startLocalTime'?: string;
    /**
    * The end time of a business hours period, specified in local time using partial-time RFC3339 format.
    */
    'endLocalTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dayOfWeek",
            "baseName": "day_of_week",
            "type": "string"
        },
        {
            "name": "startLocalTime",
            "baseName": "start_local_time",
            "type": "string"
        },
        {
            "name": "endLocalTime",
            "baseName": "end_local_time",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BusinessHoursPeriod.attributeTypeMap;
    }
}


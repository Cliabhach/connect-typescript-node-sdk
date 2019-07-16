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

import { Break } from './break';
import { ShiftWage } from './shiftWage';

/**
* A record of the hourly rate, start, and end times for a single work shift  for an employee. May include a record of the start and end times for breaks  taken during the shift.
*/
export class Shift {
    /**
    * UUID for this object
    */
    'id'?: string;
    /**
    * The ID of the employee this shift belongs to.
    */
    'employeeId': string;
    /**
    * The ID of the location this shift occurred at. Should be based on where the employee clocked in.
    */
    'locationId'?: string;
    /**
    * Read-only convenience value that is calculated from the location based on `location_id`. Format: the IANA Timezone Database identifier for the location timezone.
    */
    'timezone'?: string;
    /**
    * RFC 3339; shifted to location timezone + offset. Precision up to the minute is respected; seconds are truncated.
    */
    'startAt': string;
    /**
    * RFC 3339; shifted to timezone + offset. Precision up to the minute is respected; seconds are truncated. The `end_at` minute is not counted when the shift length is calculated. For example, a shift from `00:00` to `08:01` is considered an 8 hour shift (midnight to 8am).
    */
    'endAt'?: string;
    'wage'?: ShiftWage;
    /**
    * A list of any paid or unpaid breaks that were taken during this shift.
    */
    'breaks'?: Array<Break>;
    /**
    * Describes working state of the current `Shift`. See [ShiftStatus](#type-shiftstatus) for possible values
    */
    'status'?: string;
    /**
    * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write; potentially overwriting data from another write.
    */
    'version'?: number;
    /**
    * A read-only timestamp in RFC 3339 format; presented in UTC.
    */
    'createdAt'?: string;
    /**
    * A read-only timestamp in RFC 3339 format; presented in UTC.
    */
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "employeeId",
            "baseName": "employee_id",
            "type": "string"
        },
        {
            "name": "locationId",
            "baseName": "location_id",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "string"
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "string"
        },
        {
            "name": "wage",
            "baseName": "wage",
            "type": "ShiftWage"
        },
        {
            "name": "breaks",
            "baseName": "breaks",
            "type": "Array<Break>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Shift.attributeTypeMap;
    }
}


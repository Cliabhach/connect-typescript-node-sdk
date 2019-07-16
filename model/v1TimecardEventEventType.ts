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
* Actions that resulted in a change to a timecard. All timecard events created with the Connect API have an event type that begins with `API`.
*/
export enum V1TimecardEventEventType {
    APICREATE = <any> 'API_CREATE',
    APIEDIT = <any> 'API_EDIT',
    APIDELETE = <any> 'API_DELETE',
    REGISTERCLOCKIN = <any> 'REGISTER_CLOCKIN',
    REGISTERCLOCKOUT = <any> 'REGISTER_CLOCKOUT',
    DASHBOARDSUPERVISORCLOSE = <any> 'DASHBOARD_SUPERVISOR_CLOSE',
    DASHBOARDEDIT = <any> 'DASHBOARD_EDIT',
    DASHBOARDDELETE = <any> 'DASHBOARD_DELETE'
}

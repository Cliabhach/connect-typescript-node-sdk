import { V1TimecardEvent } from './v1TimecardEvent';
export declare class V1ListTimecardEventsResponse {
    'items'?: Array<V1TimecardEvent>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}

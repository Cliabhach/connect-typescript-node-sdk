import { V1Timecard } from './v1Timecard';
export declare class V1ListTimecardsResponse {
    'items'?: Array<V1Timecard>;
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

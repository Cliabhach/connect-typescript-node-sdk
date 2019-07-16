import { TimeRange } from './timeRange';
export declare class SearchOrdersDateTimeFilter {
    'createdAt'?: TimeRange;
    'updatedAt'?: TimeRange;
    'closedAt'?: TimeRange;
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

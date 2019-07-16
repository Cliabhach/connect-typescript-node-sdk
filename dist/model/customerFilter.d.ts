import { CustomerCreationSourceFilter } from './customerCreationSourceFilter';
import { TimeRange } from './timeRange';
export declare class CustomerFilter {
    'creationSource'?: CustomerCreationSourceFilter;
    'createdAt'?: TimeRange;
    'updatedAt'?: TimeRange;
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

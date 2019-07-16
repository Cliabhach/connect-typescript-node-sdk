import { V1Employee } from './v1Employee';
export declare class V1ListEmployeesResponse {
    'items'?: Array<V1Employee>;
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

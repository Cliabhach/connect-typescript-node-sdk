import { V1PageCell } from './v1PageCell';
export declare class V1Page {
    'id'?: string;
    'name'?: string;
    'pageIndex'?: number;
    'cells'?: Array<V1PageCell>;
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

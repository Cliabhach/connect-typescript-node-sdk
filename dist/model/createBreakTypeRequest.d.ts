import { BreakType } from './breakType';
export declare class CreateBreakTypeRequest {
    'idempotencyKey'?: string;
    'breakType': BreakType;
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

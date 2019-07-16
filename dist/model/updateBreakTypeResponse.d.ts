import { BreakType } from './breakType';
export declare class UpdateBreakTypeResponse {
    'breakType'?: BreakType;
    'errors'?: Array<Error>;
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

import { V1ModifierList } from './v1ModifierList';
export declare class V1CreateModifierListRequest {
    'body'?: V1ModifierList;
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

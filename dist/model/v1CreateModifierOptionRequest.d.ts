import { V1ModifierOption } from './v1ModifierOption';
export declare class V1CreateModifierOptionRequest {
    'body'?: V1ModifierOption;
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

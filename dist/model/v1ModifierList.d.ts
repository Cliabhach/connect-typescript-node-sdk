import { V1ModifierOption } from './v1ModifierOption';
export declare class V1ModifierList {
    'id'?: string;
    'name'?: string;
    'selectionType'?: string;
    'modifierOptions'?: Array<V1ModifierOption>;
    'v2Id'?: string;
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

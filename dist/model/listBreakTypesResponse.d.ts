import { BreakType } from './breakType';
import { SquareError } from './squareError';
export declare class ListBreakTypesResponse {
    'breakTypes'?: Array<BreakType>;
    'cursor'?: string;
    'errors'?: Array<SquareError>;
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

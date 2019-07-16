import { BreakType } from './breakType';
import { SquareError } from './squareError';
export declare class UpdateBreakTypeResponse {
    'breakType'?: BreakType;
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

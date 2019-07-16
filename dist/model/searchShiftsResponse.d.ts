import { Shift } from './shift';
import { SquareError } from './squareError';
export declare class SearchShiftsResponse {
    'shifts'?: Array<Shift>;
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

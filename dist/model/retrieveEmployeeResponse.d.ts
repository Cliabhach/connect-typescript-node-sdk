import { Employee } from './employee';
import { SquareError } from './squareError';
export declare class RetrieveEmployeeResponse {
    'employee'?: Employee;
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

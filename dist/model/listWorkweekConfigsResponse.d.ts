import { SquareError } from './squareError';
import { WorkweekConfig } from './workweekConfig';
export declare class ListWorkweekConfigsResponse {
    'workweekConfigs'?: Array<WorkweekConfig>;
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
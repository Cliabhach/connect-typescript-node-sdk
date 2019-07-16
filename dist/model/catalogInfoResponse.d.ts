import { CatalogInfoResponseLimits } from './catalogInfoResponseLimits';
import { StandardUnitDescriptionGroup } from './standardUnitDescriptionGroup';
export declare class CatalogInfoResponse {
    'errors'?: Array<Error>;
    'limits'?: CatalogInfoResponseLimits;
    'standardUnitDescriptionGroup'?: StandardUnitDescriptionGroup;
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

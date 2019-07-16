export declare class CatalogInfoResponseLimits {
    'batchUpsertMaxObjectsPerBatch'?: number;
    'batchUpsertMaxTotalObjects'?: number;
    'batchRetrieveMaxObjectIds'?: number;
    'searchMaxPageLimit'?: number;
    'batchDeleteMaxObjectIds'?: number;
    'updateItemTaxesMaxItemIds'?: number;
    'updateItemTaxesMaxTaxesToEnable'?: number;
    'updateItemTaxesMaxTaxesToDisable'?: number;
    'updateItemModifierListsMaxItemIds'?: number;
    'updateItemModifierListsMaxModifierListsToEnable'?: number;
    'updateItemModifierListsMaxModifierListsToDisable'?: number;
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

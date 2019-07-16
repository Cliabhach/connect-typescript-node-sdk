"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQuery {
    static getAttributeTypeMap() {
        return CatalogQuery.attributeTypeMap;
    }
}
CatalogQuery.discriminator = undefined;
CatalogQuery.attributeTypeMap = [
    {
        "name": "sortedAttributeQuery",
        "baseName": "sorted_attribute_query",
        "type": "CatalogQuerySortedAttribute"
    },
    {
        "name": "exactQuery",
        "baseName": "exact_query",
        "type": "CatalogQueryExact"
    },
    {
        "name": "prefixQuery",
        "baseName": "prefix_query",
        "type": "CatalogQueryPrefix"
    },
    {
        "name": "rangeQuery",
        "baseName": "range_query",
        "type": "CatalogQueryRange"
    },
    {
        "name": "textQuery",
        "baseName": "text_query",
        "type": "CatalogQueryText"
    },
    {
        "name": "itemsForTaxQuery",
        "baseName": "items_for_tax_query",
        "type": "CatalogQueryItemsForTax"
    },
    {
        "name": "itemsForModifierListQuery",
        "baseName": "items_for_modifier_list_query",
        "type": "CatalogQueryItemsForModifierList"
    }
];
exports.CatalogQuery = CatalogQuery;
//# sourceMappingURL=catalogQuery.js.map
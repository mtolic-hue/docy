import { Child, Check } from "wasp/entities";
import { type GetChildren, type GetChildChecks } from "wasp/server/operations";
export declare const getChildren: GetChildren<void, Child[]>;
export declare const getChildChecks: GetChildChecks<{
    childId: string;
    limit?: number;
}, Check[]>;
export declare const getChild: ({ id }: {
    id: string;
}, context: any) => Promise<any>;
//# sourceMappingURL=queries.d.ts.map
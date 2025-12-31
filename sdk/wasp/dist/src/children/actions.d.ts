import { type CreateChild, type CreateCheck } from "wasp/server/operations";
export declare const createChild: CreateChild<{
    name: string;
    birthDate?: string;
    notes?: string;
}, any>;
export declare const createCheck: CreateCheck<{
    childId: string;
    weightKg: number;
    temperatureC: number;
    lastGivenParacetamolAt?: string | null;
    lastGivenNurofenAt?: string | null;
}, any>;
//# sourceMappingURL=actions.d.ts.map
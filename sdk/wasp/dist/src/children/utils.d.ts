type Nullable<T> = T | null | undefined;
export type CalcArgs = {
    weightKg: number;
    temperatureC: number;
    lastGivenParacetamolAt?: Nullable<string>;
    lastGivenNurofenAt?: Nullable<string>;
    now?: Date;
};
export type CalcResult = {
    temperatureStatus: "Normal" | "Elevated" | "High";
    paracetamolMl: number;
    nurofenMl: number;
    nextParacetamolAt?: string | null;
    nextNurofenAt?: string | null;
    paracetamolEligible: boolean;
    nurofenEligible: boolean;
    canGiveNow: boolean;
};
export declare function computeCheck(args: CalcArgs): CalcResult;
export {};
//# sourceMappingURL=utils.d.ts.map
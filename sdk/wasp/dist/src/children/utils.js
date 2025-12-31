const PARACETAMOL_MG_PER_KG = 15;
const PARACETAMOL_MG_PER_ML = 24; // 120 mg / 5 ml
const PARACETAMOL_INTERVAL_MS = 6 * 60 * 60 * 1000;
const NUROFEN_MG_PER_KG = 10;
const NUROFEN_MG_PER_ML = 20; // 100 mg / 5 ml
const NUROFEN_INTERVAL_MS = 8 * 60 * 60 * 1000;
function determineTemperatureStatus(tempC) {
    if (tempC <= 37.0)
        return "Normal";
    if (tempC >= 38.0)
        return "High";
    return "Elevated";
}
export function computeCheck(args) {
    const now = args.now ?? new Date();
    const temperatureStatus = determineTemperatureStatus(args.temperatureC);
    const paracetamolMl = (PARACETAMOL_MG_PER_KG * args.weightKg) / PARACETAMOL_MG_PER_ML;
    const nurofenMl = (NUROFEN_MG_PER_KG * args.weightKg) / NUROFEN_MG_PER_ML;
    const nextParacetamolAt = args.lastGivenParacetamolAt
        ? new Date(new Date(args.lastGivenParacetamolAt).getTime() + PARACETAMOL_INTERVAL_MS)
        : null;
    const nextNurofenAt = args.lastGivenNurofenAt
        ? new Date(new Date(args.lastGivenNurofenAt).getTime() + NUROFEN_INTERVAL_MS)
        : null;
    const paracetamolEligible = nextParacetamolAt ? now >= nextParacetamolAt : true;
    const nurofenEligible = nextNurofenAt ? now >= nextNurofenAt : true;
    const canGiveNow = temperatureStatus === "High" && paracetamolEligible && nurofenEligible;
    return {
        temperatureStatus,
        paracetamolMl,
        nurofenMl,
        nextParacetamolAt: nextParacetamolAt ? nextParacetamolAt.toISOString() : null,
        nextNurofenAt: nextNurofenAt ? nextNurofenAt.toISOString() : null,
        paracetamolEligible,
        nurofenEligible,
        canGiveNow,
    };
}
//# sourceMappingURL=utils.js.map
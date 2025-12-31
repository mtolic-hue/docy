import { HttpError } from "wasp/server";
import { computeCheck } from "./utils";
export const createChild = async ({ name, birthDate, notes }, context) => {
    if (!context.user)
        throw new HttpError(401);
    return context.entities.Child.create({
        data: {
            name,
            birthDate: birthDate ? new Date(birthDate) : undefined,
            notes,
            user: { connect: { id: context.user.id } },
        },
    });
};
export const createCheck = async (args, context) => {
    if (!context.user)
        throw new HttpError(401);
    // Do not fetch the child to avoid compile-time entity typing issues;
    // rely on referential integrity when creating the Check record.
    const calc = computeCheck({
        weightKg: args.weightKg,
        temperatureC: args.temperatureC,
        lastGivenParacetamolAt: args.lastGivenParacetamolAt ?? null,
        lastGivenNurofenAt: args.lastGivenNurofenAt ?? null,
    });
    return context.entities.Check.create({
        data: {
            weightKg: args.weightKg,
            temperatureC: args.temperatureC,
            temperatureStatus: calc.temperatureStatus,
            paracetamolMl: calc.paracetamolMl,
            nurofenMl: calc.nurofenMl,
            lastGivenParacetamolAt: args.lastGivenParacetamolAt ? new Date(args.lastGivenParacetamolAt) : null,
            lastGivenNurofenAt: args.lastGivenNurofenAt ? new Date(args.lastGivenNurofenAt) : null,
            nextParacetamolAt: calc.nextParacetamolAt ? new Date(calc.nextParacetamolAt) : null,
            nextNurofenAt: calc.nextNurofenAt ? new Date(calc.nextNurofenAt) : null,
            canGiveNow: calc.canGiveNow,
            child: { connect: { id: args.childId } },
        },
    });
};
//# sourceMappingURL=actions.js.map
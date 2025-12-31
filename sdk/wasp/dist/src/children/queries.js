import { HttpError } from "wasp/server";
export const getChildren = (_args, context) => {
    if (!context.user)
        throw new HttpError(401);
    return context.entities.Child.findMany({
        where: { userId: context.user.id },
        orderBy: { createdAt: "desc" },
    });
};
export const getChildChecks = ({ childId, limit = 20 }, context) => {
    if (!context.user)
        throw new HttpError(401);
    return context.entities.Check.findMany({
        where: { childId },
        orderBy: { createdAt: "desc" },
        take: limit,
    });
};
export const getChild = async ({ id }, context) => {
    if (!context.user)
        throw new HttpError(401);
    return context.entities.Child.findUnique({ where: { id } });
};
//# sourceMappingURL=queries.js.map
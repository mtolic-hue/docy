import { HttpError } from "wasp/server";
export const getTasks = (_args, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.findMany({
        where: { user: { id: context.user.id } },
        orderBy: { createdAt: "desc" },
        include: {
            tags: {
                orderBy: { name: "asc" },
            },
        },
    });
};
//# sourceMappingURL=queries.js.map
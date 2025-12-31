import { HttpError } from "wasp/server";
export const getTags = (_, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Tag.findMany({
        where: { user: { id: context.user.id } },
        orderBy: { name: "asc" },
    });
};
//# sourceMappingURL=queries.js.map
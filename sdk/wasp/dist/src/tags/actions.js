import { HttpError } from "wasp/server";
export const createTag = (tag, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Tag.create({
        data: {
            name: tag.name,
            color: tag.color,
            user: {
                connect: {
                    id: context.user.id,
                },
            },
        },
    });
};
//# sourceMappingURL=actions.js.map
import { HttpError } from "wasp/server";
export const createTask = async ({ description, tagIds }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.create({
        data: {
            description,
            isDone: false,
            user: {
                connect: {
                    id: context.user.id,
                },
            },
            tags: {
                connect: tagIds.map((tag) => ({
                    id: tag,
                })),
            },
        },
    });
};
export const updateTaskStatus = async ({ id, isDone }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.update({
        where: {
            id,
        },
        data: { isDone },
    });
};
export const deleteCompletedTasks = async (_args, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.deleteMany({
        where: {
            userId: context.user.id,
            isDone: true,
        },
    });
};
//# sourceMappingURL=actions.js.map
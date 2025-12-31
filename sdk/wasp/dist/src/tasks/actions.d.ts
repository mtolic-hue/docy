import { type Tag, type Task } from "wasp/entities";
import { DeleteCompletedTasks, type CreateTask, type UpdateTaskStatus } from "wasp/server/operations";
type CreateTaskArgs = Pick<Task, "description"> & {
    tagIds: Tag["id"][];
};
export declare const createTask: CreateTask<CreateTaskArgs, Task>;
type UpdateTaskStatusArgs = Pick<Task, "id" | "isDone">;
export declare const updateTaskStatus: UpdateTaskStatus<UpdateTaskStatusArgs>;
export declare const deleteCompletedTasks: DeleteCompletedTasks;
export {};
//# sourceMappingURL=actions.d.ts.map
import { Tag, Task } from "wasp/entities";
import { type GetTasks } from "wasp/server/operations";
export type TaskWithTags = Task & {
    tags: Tag[];
};
export declare const getTasks: GetTasks<void, TaskWithTags[]>;
//# sourceMappingURL=queries.d.ts.map
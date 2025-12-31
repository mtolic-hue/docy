import { Tag } from "wasp/entities";
import { CreateTag } from "wasp/server/operations";
type CreateTagArgs = Pick<Tag, "name" | "color">;
export declare const createTag: CreateTag<CreateTagArgs, Tag>;
export {};
//# sourceMappingURL=actions.d.ts.map
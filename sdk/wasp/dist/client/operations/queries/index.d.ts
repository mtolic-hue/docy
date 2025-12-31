import { type QueryFor } from './core';
import { GetTasks_ext } from 'wasp/server/operations/queries';
import { GetTags_ext } from 'wasp/server/operations/queries';
import { GetChildren_ext } from 'wasp/server/operations/queries';
import { GetChild_ext } from 'wasp/server/operations/queries';
import { GetChildChecks_ext } from 'wasp/server/operations/queries';
export declare const getTasks: QueryFor<GetTasks_ext>;
export declare const getTags: QueryFor<GetTags_ext>;
export declare const getChildren: QueryFor<GetChildren_ext>;
export declare const getChild: QueryFor<GetChild_ext>;
export declare const getChildChecks: QueryFor<GetChildChecks_ext>;
export { buildAndRegisterQuery } from './core';
//# sourceMappingURL=index.d.ts.map
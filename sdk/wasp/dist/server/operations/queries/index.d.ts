import { type AuthenticatedOperationFor } from '../wrappers.js';
import { getTasks as getTasks_ext } from 'wasp/src/tasks/queries';
import { getTags as getTags_ext } from 'wasp/src/tags/queries';
import { getChildren as getChildren_ext } from 'wasp/src/children/queries';
import { getChild as getChild_ext } from 'wasp/src/children/queries';
import { getChildChecks as getChildChecks_ext } from 'wasp/src/children/queries';
export type GetTasks_ext = typeof getTasks_ext;
export declare const getTasks: AuthenticatedOperationFor<GetTasks_ext>;
export type GetTags_ext = typeof getTags_ext;
export declare const getTags: AuthenticatedOperationFor<GetTags_ext>;
export type GetChildren_ext = typeof getChildren_ext;
export declare const getChildren: AuthenticatedOperationFor<GetChildren_ext>;
export type GetChild_ext = typeof getChild_ext;
export declare const getChild: AuthenticatedOperationFor<GetChild_ext>;
export type GetChildChecks_ext = typeof getChildChecks_ext;
export declare const getChildChecks: AuthenticatedOperationFor<GetChildChecks_ext>;
//# sourceMappingURL=index.d.ts.map
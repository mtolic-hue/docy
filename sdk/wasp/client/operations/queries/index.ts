import { type QueryFor, createQuery } from './core'
import { GetTasks_ext } from 'wasp/server/operations/queries'
import { GetTags_ext } from 'wasp/server/operations/queries'
import { GetChildren_ext } from 'wasp/server/operations/queries'
import { GetChild_ext } from 'wasp/server/operations/queries'
import { GetChildChecks_ext } from 'wasp/server/operations/queries'

// PUBLIC API
export const getTasks: QueryFor<GetTasks_ext> = createQuery<GetTasks_ext>(
  'operations/get-tasks',
  ['Task', 'Tag'],
)

// PUBLIC API
export const getTags: QueryFor<GetTags_ext> = createQuery<GetTags_ext>(
  'operations/get-tags',
  ['Tag'],
)

// PUBLIC API
export const getChildren: QueryFor<GetChildren_ext> = createQuery<GetChildren_ext>(
  'operations/get-children',
  ['Child'],
)

// PUBLIC API
export const getChild: QueryFor<GetChild_ext> = createQuery<GetChild_ext>(
  'operations/get-child',
  ['Child'],
)

// PUBLIC API
export const getChildChecks: QueryFor<GetChildChecks_ext> = createQuery<GetChildChecks_ext>(
  'operations/get-child-checks',
  ['Check'],
)

// PRIVATE API (used in SDK)
export { buildAndRegisterQuery } from './core'

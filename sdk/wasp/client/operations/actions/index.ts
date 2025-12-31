import { type ActionFor, createAction } from './core'
import { CreateTask_ext } from 'wasp/server/operations/actions'
import { UpdateTaskStatus_ext } from 'wasp/server/operations/actions'
import { DeleteCompletedTasks_ext } from 'wasp/server/operations/actions'
import { CreateTag_ext } from 'wasp/server/operations/actions'
import { CreateChild_ext } from 'wasp/server/operations/actions'
import { CreateCheck_ext } from 'wasp/server/operations/actions'

// PUBLIC API
export const createTask: ActionFor<CreateTask_ext> = createAction<CreateTask_ext>(
  'operations/create-task',
  ['Task'],
)

// PUBLIC API
export const updateTaskStatus: ActionFor<UpdateTaskStatus_ext> = createAction<UpdateTaskStatus_ext>(
  'operations/update-task-status',
  ['Task'],
)

// PUBLIC API
export const deleteCompletedTasks: ActionFor<DeleteCompletedTasks_ext> = createAction<DeleteCompletedTasks_ext>(
  'operations/delete-completed-tasks',
  ['Task'],
)

// PUBLIC API
export const createTag: ActionFor<CreateTag_ext> = createAction<CreateTag_ext>(
  'operations/create-tag',
  ['Tag'],
)

// PUBLIC API
export const createChild: ActionFor<CreateChild_ext> = createAction<CreateChild_ext>(
  'operations/create-child',
  ['Child'],
)

// PUBLIC API
export const createCheck: ActionFor<CreateCheck_ext> = createAction<CreateCheck_ext>(
  'operations/create-check',
  ['Check'],
)

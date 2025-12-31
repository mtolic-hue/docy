
import {
  type _Task,
  type _Tag,
  type _Child,
  type _Check,
  type AuthenticatedQueryDefinition,
  type Payload,
} from 'wasp/server/_types'

// PUBLIC API
export type GetTasks<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Task,
      _Tag,
    ],
    Input,
    Output
  >

// PUBLIC API
export type GetTags<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Tag,
    ],
    Input,
    Output
  >

// PUBLIC API
export type GetChildren<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Child,
    ],
    Input,
    Output
  >

// PUBLIC API
export type GetChild<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Child,
    ],
    Input,
    Output
  >

// PUBLIC API
export type GetChildChecks<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Check,
    ],
    Input,
    Output
  >


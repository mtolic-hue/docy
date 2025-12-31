import { prisma } from 'wasp/server'

import { createCheck } from '../../../../../src/children/actions'


export default async function (args, context) {
  return (createCheck as any)(args, {
    ...context,
    entities: {
      Check: prisma.check,
    },
  })
}

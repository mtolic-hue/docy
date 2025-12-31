import { prisma } from 'wasp/server'

import { getChildChecks } from '../../../../../src/children/queries'


export default async function (args, context) {
  return (getChildChecks as any)(args, {
    ...context,
    entities: {
      Check: prisma.check,
    },
  })
}

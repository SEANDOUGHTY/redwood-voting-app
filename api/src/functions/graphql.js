import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js,ts}'
import { db } from 'src/lib/db'
import services from 'src/services/**/*.{js,ts}'

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
    cors: {
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST'],
    },
  }),

  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})

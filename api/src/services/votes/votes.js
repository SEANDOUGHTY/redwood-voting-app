import { db } from 'src/lib/db'

export const votes = () => {
  return db.vote.findMany()
}

import { MongoClient, type Db } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME

if (!uri) throw new Error('Missing environment variable: MONGODB_URI')
if (!dbName) throw new Error('Missing environment variable: MONGODB_DB_NAME')

let cachedClient: MongoClient | null = null

export async function connectToDatabase(): Promise<{
  client: MongoClient
  db: Db
}> {
  if (cachedClient) {
    return { client: cachedClient, db: cachedClient.db(dbName) }
  }

  const client = new MongoClient(uri!)
  await client.connect()
  cachedClient = client

  return { client, db: client.db(dbName) }
}

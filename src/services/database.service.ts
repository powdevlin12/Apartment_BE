import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'
import User from '~/models/schemas/User.schema'
import { RefreshToken } from '~/models/schemas/RefershToken.schema'
import Follower from '~/models/schemas/Follower.schema'
import Apartment from '~/models/schemas/Apartment.schema'
import Utilities from '~/models/schemas/Utilities.schema'
import TypeApartment from '~/models/schemas/TypeApartment.schema'
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.s4rqtkw.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`
export default class DatabaseConnect {
  private client: MongoClient
  private db: Db
  private static _instance: DatabaseConnect

  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_DATABASE)
    this.connect()
  }

  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect()
      // Send a ping to confirm a successful connection
      await this.client.db(process.env.DB_DATABASE).command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
      this.indexUser()
      this.indexRefreshTokens()
      this.indexFollowerUsers()
      // Ensures that the client will close when you finish/error
    } catch (err) {
      console.log('🚀 ~ file: database.service.ts:46 ~ DatabaseConnect ~ connect ~ err:', err)
    }
    // finally {
    //   await this.client.close()
    // }
  }

  async indexUser() {
    const isExist = await this.users.indexExists(['email_1', 'email_1_password_1', 'username_1'])

    if (!isExist) {
      this.users.createIndex({ email: 1 }, { unique: true })
      this.users.createIndex({ email: 1, password: 1 })
      this.users.createIndex({ username: 1 }, { unique: true })
    }
  }

  async indexRefreshTokens() {
    const isExist = await this.refreshTokens.indexExists(['exp_1', 'token_1'])

    if (!isExist) {
      this.refreshTokens.createIndex({ token: 1 })
      // time to life
      this.refreshTokens.createIndex({ exp: 1 }, { expireAfterSeconds: 0 })
    }
  }

  async indexFollowerUsers() {
    const isExist = await this.followers.indexExists(['user_id_1_followed_user_id_1'])

    if (!isExist) {
      this.followers.createIndex({ user_id: 1, followed_user_id: 1 })
    }
  }

  get users(): Collection<User> {
    return this.db.collection(process.env.DB_COLLECTION_USERS as string)
  }

  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection(process.env.DB_COLLECTION_REFRESH_TOKENS as string)
  }

  get followers(): Collection<Follower> {
    return this.db.collection(process.env.DB_COLLECTION_FOLLOWER as string)
  }

  get apartments(): Collection<Apartment> {
    return this.db.collection(process.env.DB_COLLECTION_APARTMENT as string)
  }

  get utilities(): Collection<Utilities> {
    return this.db.collection(process.env.DB_COLLECTION_UTILITIES as string)
  }

  get typeApartments(): Collection<TypeApartment> {
    return this.db.collection(process.env.DB_COLLECTION_TYPE_APARTMENTS as string)
  }

  static getInstance() {
    if (!DatabaseConnect._instance) {
      DatabaseConnect._instance = new DatabaseConnect()
    }
    return DatabaseConnect._instance
  }
}

export const instanceDatabase = DatabaseConnect.getInstance

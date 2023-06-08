import { Model } from 'mongoose'

export type IUser = {
  id: string
  password: string
  role: string
  createdAt: Date
  updatedAt: Date
}

export type UserModel = Model<IUser, Record<string, unknown>>

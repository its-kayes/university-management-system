import mongoose, { ConnectOptions } from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    mongoose
      .connect(
        config.database_url as string,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions
      )
      .then(() => {
        console.log('DB Connected!')
        app.listen(config.port, () =>
          console.log(`Server Started on Port: ${config.port}`)
        )
      })
      .catch(error => {
        console.error(error)
      })
  } catch (error) {
    console.log('Failed to connect database', error)
  }
}

main()

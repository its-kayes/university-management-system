import { Server } from 'http';
import mongoose, { ConnectOptions } from 'mongoose';
import app from './app';
import config from './config';
import { errLogger, logger } from './util/logger';

process.on('uncaughtException', error => {
  errLogger.error(error);
  process.exit(1);
});

let server: Server;

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
        logger.info('DB Connected!');
        app.listen(config.port, () =>
          logger.info(`Server Started on Port: ${config.port}`)
        );
      })
      .catch(error => {
        errLogger.error(error);
      });
  } catch (error) {
    errLogger.error('Failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});

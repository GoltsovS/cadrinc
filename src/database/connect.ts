import { connect, disconnect, Connection, connection } from 'mongoose';
import { CardModel } from './models/cards';
let database: Connection;

export const databaseConnect = () => {
  const user = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;
  const uri = `mongodb+srv://${user}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

  if (database) {
    return;
  }

  connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });

  return {
    CardModel,
  };
};

export const databaseDisconnect = () => {
  if (!database) {
    return;
  }

  disconnect();
};

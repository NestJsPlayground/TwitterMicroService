import { Connection } from 'mongoose';
import { EntrySchema } from './job.schema';

export const entryProviders = [
  {
    provide: 'EntryModelToken',
    useFactory: (connection: Connection) => connection.model('Entry', EntrySchema),
    inject: ['DbConnectionToken'],
  },
];

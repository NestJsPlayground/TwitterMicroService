import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const EntrySchema = new mongoose.Schema({
  name         : String,
  twitterTag   : String,
  pdf          : String,
  page         : String,
  foundLinks   : Schema.Types.Mixed,
});

import { Schema } from 'mongoose';
import { findByType } from '../statics/cards';
import { ICardDocument, ICardModel } from '../interfaces/cards';

const CardSchema = new Schema<ICardDocument, ICardModel>({
  title: String,
  description: String,
  name: String,
  type: String,
});

CardSchema.statics.findByType = findByType;

export default CardSchema;

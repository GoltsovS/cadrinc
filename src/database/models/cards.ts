import { model } from 'mongoose';
import { ICardDocument, ICardModel } from '../interfaces/cards';
import CardSchema from '../schemas/cards';

export const CardModel = model<ICardDocument, ICardModel>('card', CardSchema);

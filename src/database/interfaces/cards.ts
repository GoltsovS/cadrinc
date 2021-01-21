import { Document, Model } from 'mongoose';

export type cardType = 'video' | 'picture';

export interface ICard {
  title: string;
  description: string;
  name: string;
  type: cardType;
}

export interface ICardDocument extends ICard, Document {}

export interface ICardModel extends Model<ICardDocument> {
  findByType: (this: ICardModel, type: cardType) => Promise<ICardDocument[]>;
}

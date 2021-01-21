import { ICardDocument, ICardModel, cardType } from '../interfaces/cards';

export async function findByType(this: ICardModel, type: cardType): Promise<ICardDocument[]> {
  return this.find({ type });
}

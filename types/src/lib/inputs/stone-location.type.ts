import { StoneLocationObject } from '../entities/stone-location.type';

export type CreateStoneLocationBody = Omit<StoneLocationObject, 'images'>
export type UpdateStoneLocationBody = Partial<Omit<StoneLocationObject, 'images'>>
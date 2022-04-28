import { context, u128, PersistentVector } from "near-sdk-as";


/** 
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */
@nearBindgen
export class Donates {
  premium: boolean;
  sender: string;
  datetime: string;
  name: string;
  amount: u128;
  constructor(public text: string, name: string) {
    this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
    this.sender = context.sender
    this.amount = context.attachedDeposit
    this.datetime = context.blockTimestamp.toString()

    //this.datetime = new Date(<number>context.blockTimestamp).toDateString()
    this.name = name
  }
}
/**
 * collections.vector is a persistent collection. Any changes to it will
 * be automatically saved in the storage.
 * The parameter to the constructor needs to be unique across a single contract.
 * It will be used as a prefix to all keys required to store data in the storage.
 */
export const messages = new PersistentVector<Donates>("m");
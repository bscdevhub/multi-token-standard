/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Ownable extends Contract {
  functions: {
    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getOwner(): Promise<string>;
  };
  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IWeightedPool2TokensFactory,
  IWeightedPool2TokensFactoryInterface,
} from "../IWeightedPool2TokensFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "weights",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "oracleEnabled",
        type: "bool",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IWeightedPool2TokensFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IWeightedPool2TokensFactoryInterface {
    return new utils.Interface(_abi) as IWeightedPool2TokensFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWeightedPool2TokensFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IWeightedPool2TokensFactory;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ExecutorAware,
  ExecutorAwareInterface,
} from "../../../contracts/abstract/ExecutorAware";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "isTrustedExecutor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedExecutor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ExecutorAware__factory {
  static readonly abi = _abi;
  static createInterface(): ExecutorAwareInterface {
    return new utils.Interface(_abi) as ExecutorAwareInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExecutorAware {
    return new Contract(address, _abi, signerOrProvider) as ExecutorAware;
  }
}

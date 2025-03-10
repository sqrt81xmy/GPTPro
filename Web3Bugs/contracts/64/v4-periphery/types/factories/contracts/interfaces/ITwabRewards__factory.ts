/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITwabRewards,
  ITwabRewardsInterface,
} from "../../../contracts/interfaces/ITwabRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "uint8[]",
        name: "_epochIds",
        type: "uint8[]",
      },
    ],
    name: "claimRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_startTimestamp",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "_tokensPerEpoch",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "_epochDuration",
        type: "uint48",
      },
      {
        internalType: "uint8",
        name: "_numberOfEpochs",
        type: "uint8",
      },
    ],
    name: "createPromotion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "destroyPromotion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "endPromotion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_numberOfEpochs",
        type: "uint8",
      },
    ],
    name: "extendPromotion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
    ],
    name: "getCurrentEpochId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
    ],
    name: "getPromotion",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint8",
            name: "numberOfEpochs",
            type: "uint8",
          },
          {
            internalType: "uint48",
            name: "epochDuration",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "createdAt",
            type: "uint48",
          },
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokensPerEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardsUnclaimed",
            type: "uint256",
          },
        ],
        internalType: "struct ITwabRewards.Promotion",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
    ],
    name: "getRemainingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "uint8[]",
        name: "_epochIds",
        type: "uint8[]",
      },
    ],
    name: "getRewardsAmount",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ITwabRewards__factory {
  static readonly abi = _abi;
  static createInterface(): ITwabRewardsInterface {
    return new utils.Interface(_abi) as ITwabRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITwabRewards {
    return new Contract(address, _abi, signerOrProvider) as ITwabRewards;
  }
}

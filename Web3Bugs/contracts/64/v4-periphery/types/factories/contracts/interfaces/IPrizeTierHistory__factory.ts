/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPrizeTierHistory,
  IPrizeTierHistoryInterface,
} from "../../../contracts/interfaces/IPrizeTierHistory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        indexed: false,
        internalType: "struct IPrizeTierHistory.PrizeTier",
        name: "prizeTier",
        type: "tuple",
      },
    ],
    name: "PrizeTierPushed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        indexed: false,
        internalType: "struct IPrizeTierHistory.PrizeTier",
        name: "prizeTier",
        type: "tuple",
      },
    ],
    name: "PrizeTierSet",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
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
    inputs: [],
    name: "getNewestDrawId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOldestDrawId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
    ],
    name: "getPrizeTier",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        internalType: "struct IPrizeTierHistory.PrizeTier",
        name: "prizeTier",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPrizeTierAtIndex",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        internalType: "struct IPrizeTierHistory.PrizeTier",
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
        internalType: "uint32[]",
        name: "drawIds",
        type: "uint32[]",
      },
    ],
    name: "getPrizeTierList",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        internalType: "struct IPrizeTierHistory.PrizeTier[]",
        name: "prizeTierList",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        internalType: "struct IPrizeTierHistory.PrizeTier",
        name: "newPrizeTier",
        type: "tuple",
      },
    ],
    name: "popAndPush",
    outputs: [
      {
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        internalType: "struct IPrizeTierHistory.PrizeTier",
        name: "nextPrizeTier",
        type: "tuple",
      },
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "drawId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
        ],
        internalType: "struct IPrizeTierHistory.PrizeTier",
        name: "newPrizeTier",
        type: "tuple",
      },
    ],
    name: "replace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPrizeTierHistory__factory {
  static readonly abi = _abi;
  static createInterface(): IPrizeTierHistoryInterface {
    return new utils.Interface(_abi) as IPrizeTierHistoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPrizeTierHistory {
    return new Contract(address, _abi, signerOrProvider) as IPrizeTierHistory;
  }
}

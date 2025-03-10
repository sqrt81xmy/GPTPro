/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICauldronGov } from "../ICauldronGov";

export class ICauldronGov__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICauldronGov {
    return new Contract(address, _abi, signerOrProvider) as ICauldronGov;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "bytes6[]",
        name: "",
        type: "bytes6[]",
      },
    ],
    name: "addIlks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "contract IFYToken",
        name: "",
        type: "address",
      },
    ],
    name: "addSeries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "assets",
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
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "rateOracles",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "series",
    outputs: [
      {
        components: [
          {
            internalType: "contract IFYToken",
            name: "fyToken",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "baseId",
            type: "bytes6",
          },
          {
            internalType: "uint32",
            name: "maturity",
            type: "uint32",
          },
        ],
        internalType: "struct DataTypes.Series",
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
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "setDebtLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    name: "setRateOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "setSpotOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

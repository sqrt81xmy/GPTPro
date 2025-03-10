/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AuraClaimZapInterface extends utils.Interface {
  functions: {
    "claimRewards(address[],address[],address[],address[],uint256,uint256,uint256,uint256)": FunctionFragment;
    "crv()": FunctionFragment;
    "crvDepositWrapper()": FunctionFragment;
    "cvx()": FunctionFragment;
    "cvxCrv()": FunctionFragment;
    "cvxCrvRewards()": FunctionFragment;
    "getName()": FunctionFragment;
    "locker()": FunctionFragment;
    "owner()": FunctionFragment;
    "setApprovals()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [
      string[],
      string[],
      string[],
      string[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "crv", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "crvDepositWrapper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cvx", values?: undefined): string;
  encodeFunctionData(functionFragment: "cvxCrv", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cvxCrvRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(functionFragment: "locker", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "crvDepositWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cvx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cvxCrv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cvxCrvRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AuraClaimZap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuraClaimZapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimRewards(
      rewardContracts: string[],
      extraRewardContracts: string[],
      tokenRewardContracts: string[],
      tokenRewardTokens: string[],
      depositCrvMaxAmount: BigNumberish,
      minAmountOut: BigNumberish,
      depositCvxMaxAmount: BigNumberish,
      options: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    crv(overrides?: CallOverrides): Promise<[string]>;

    crvDepositWrapper(overrides?: CallOverrides): Promise<[string]>;

    cvx(overrides?: CallOverrides): Promise<[string]>;

    cvxCrv(overrides?: CallOverrides): Promise<[string]>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<[string]>;

    getName(overrides?: CallOverrides): Promise<[string]>;

    locker(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setApprovals(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimRewards(
    rewardContracts: string[],
    extraRewardContracts: string[],
    tokenRewardContracts: string[],
    tokenRewardTokens: string[],
    depositCrvMaxAmount: BigNumberish,
    minAmountOut: BigNumberish,
    depositCvxMaxAmount: BigNumberish,
    options: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  crv(overrides?: CallOverrides): Promise<string>;

  crvDepositWrapper(overrides?: CallOverrides): Promise<string>;

  cvx(overrides?: CallOverrides): Promise<string>;

  cvxCrv(overrides?: CallOverrides): Promise<string>;

  cvxCrvRewards(overrides?: CallOverrides): Promise<string>;

  getName(overrides?: CallOverrides): Promise<string>;

  locker(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setApprovals(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimRewards(
      rewardContracts: string[],
      extraRewardContracts: string[],
      tokenRewardContracts: string[],
      tokenRewardTokens: string[],
      depositCrvMaxAmount: BigNumberish,
      minAmountOut: BigNumberish,
      depositCvxMaxAmount: BigNumberish,
      options: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    crv(overrides?: CallOverrides): Promise<string>;

    crvDepositWrapper(overrides?: CallOverrides): Promise<string>;

    cvx(overrides?: CallOverrides): Promise<string>;

    cvxCrv(overrides?: CallOverrides): Promise<string>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<string>;

    getName(overrides?: CallOverrides): Promise<string>;

    locker(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setApprovals(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claimRewards(
      rewardContracts: string[],
      extraRewardContracts: string[],
      tokenRewardContracts: string[],
      tokenRewardTokens: string[],
      depositCrvMaxAmount: BigNumberish,
      minAmountOut: BigNumberish,
      depositCvxMaxAmount: BigNumberish,
      options: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    crv(overrides?: CallOverrides): Promise<BigNumber>;

    crvDepositWrapper(overrides?: CallOverrides): Promise<BigNumber>;

    cvx(overrides?: CallOverrides): Promise<BigNumber>;

    cvxCrv(overrides?: CallOverrides): Promise<BigNumber>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    locker(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovals(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimRewards(
      rewardContracts: string[],
      extraRewardContracts: string[],
      tokenRewardContracts: string[],
      tokenRewardTokens: string[],
      depositCrvMaxAmount: BigNumberish,
      minAmountOut: BigNumberish,
      depositCvxMaxAmount: BigNumberish,
      options: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    crvDepositWrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvxCrv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace ITwabRewards {
  export type PromotionStruct = {
    creator: PromiseOrValue<string>;
    startTimestamp: PromiseOrValue<BigNumberish>;
    numberOfEpochs: PromiseOrValue<BigNumberish>;
    epochDuration: PromiseOrValue<BigNumberish>;
    createdAt: PromiseOrValue<BigNumberish>;
    token: PromiseOrValue<string>;
    tokensPerEpoch: PromiseOrValue<BigNumberish>;
    rewardsUnclaimed: PromiseOrValue<BigNumberish>;
  };

  export type PromotionStructOutput = [
    string,
    BigNumber,
    number,
    number,
    number,
    string,
    BigNumber,
    BigNumber
  ] & {
    creator: string;
    startTimestamp: BigNumber;
    numberOfEpochs: number;
    epochDuration: number;
    createdAt: number;
    token: string;
    tokensPerEpoch: BigNumber;
    rewardsUnclaimed: BigNumber;
  };
}

export interface ITwabRewardsInterface extends utils.Interface {
  functions: {
    "claimRewards(address,uint256,uint8[])": FunctionFragment;
    "createPromotion(address,uint64,uint256,uint48,uint8)": FunctionFragment;
    "destroyPromotion(uint256,address)": FunctionFragment;
    "endPromotion(uint256,address)": FunctionFragment;
    "extendPromotion(uint256,uint8)": FunctionFragment;
    "getCurrentEpochId(uint256)": FunctionFragment;
    "getPromotion(uint256)": FunctionFragment;
    "getRemainingRewards(uint256)": FunctionFragment;
    "getRewardsAmount(address,uint256,uint8[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimRewards"
      | "createPromotion"
      | "destroyPromotion"
      | "endPromotion"
      | "extendPromotion"
      | "getCurrentEpochId"
      | "getPromotion"
      | "getRemainingRewards"
      | "getRewardsAmount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createPromotion",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyPromotion",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "endPromotion",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "extendPromotion",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentEpochId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPromotion",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemainingRewards",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsAmount",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPromotion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyPromotion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endPromotion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extendPromotion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentEpochId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPromotion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemainingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITwabRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITwabRewardsInterface;

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
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createPromotion(
      _token: PromiseOrValue<string>,
      _startTimestamp: PromiseOrValue<BigNumberish>,
      _tokensPerEpoch: PromiseOrValue<BigNumberish>,
      _epochDuration: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    destroyPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    extendPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCurrentEpochId(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ITwabRewards.PromotionStructOutput]>;

    getRemainingRewards(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardsAmount(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  claimRewards(
    _user: PromiseOrValue<string>,
    _promotionId: PromiseOrValue<BigNumberish>,
    _epochIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createPromotion(
    _token: PromiseOrValue<string>,
    _startTimestamp: PromiseOrValue<BigNumberish>,
    _tokensPerEpoch: PromiseOrValue<BigNumberish>,
    _epochDuration: PromiseOrValue<BigNumberish>,
    _numberOfEpochs: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  destroyPromotion(
    _promotionId: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endPromotion(
    _promotionId: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  extendPromotion(
    _promotionId: PromiseOrValue<BigNumberish>,
    _numberOfEpochs: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCurrentEpochId(
    _promotionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPromotion(
    _promotionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ITwabRewards.PromotionStructOutput>;

  getRemainingRewards(
    _promotionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardsAmount(
    _user: PromiseOrValue<string>,
    _promotionId: PromiseOrValue<BigNumberish>,
    _epochIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    claimRewards(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPromotion(
      _token: PromiseOrValue<string>,
      _startTimestamp: PromiseOrValue<BigNumberish>,
      _tokensPerEpoch: PromiseOrValue<BigNumberish>,
      _epochDuration: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destroyPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    endPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    extendPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getCurrentEpochId(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ITwabRewards.PromotionStructOutput>;

    getRemainingRewards(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsAmount(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    claimRewards(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createPromotion(
      _token: PromiseOrValue<string>,
      _startTimestamp: PromiseOrValue<BigNumberish>,
      _tokensPerEpoch: PromiseOrValue<BigNumberish>,
      _epochDuration: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    destroyPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    extendPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCurrentEpochId(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRemainingRewards(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsAmount(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimRewards(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createPromotion(
      _token: PromiseOrValue<string>,
      _startTimestamp: PromiseOrValue<BigNumberish>,
      _tokensPerEpoch: PromiseOrValue<BigNumberish>,
      _epochDuration: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    destroyPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    extendPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      _numberOfEpochs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentEpochId(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPromotion(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRemainingRewards(
      _promotionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsAmount(
      _user: PromiseOrValue<string>,
      _promotionId: PromiseOrValue<BigNumberish>,
      _epochIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

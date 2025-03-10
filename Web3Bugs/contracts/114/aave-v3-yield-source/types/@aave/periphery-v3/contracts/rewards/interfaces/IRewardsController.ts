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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export declare namespace RewardsDistributorTypes {
  export type RewardsConfigInputStruct = {
    emissionPerSecond: BigNumberish;
    totalSupply: BigNumberish;
    distributionEnd: BigNumberish;
    asset: string;
    reward: string;
    transferStrategy: string;
    rewardOracle: string;
  };

  export type RewardsConfigInputStructOutput = [
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    string
  ] & {
    emissionPerSecond: BigNumber;
    totalSupply: BigNumber;
    distributionEnd: number;
    asset: string;
    reward: string;
    transferStrategy: string;
    rewardOracle: string;
  };
}

export interface IRewardsControllerInterface extends utils.Interface {
  functions: {
    "claimAllRewards(address[],address)": FunctionFragment;
    "claimAllRewardsOnBehalf(address[],address,address)": FunctionFragment;
    "claimAllRewardsToSelf(address[])": FunctionFragment;
    "claimRewards(address[],uint256,address,address)": FunctionFragment;
    "claimRewardsOnBehalf(address[],uint256,address,address,address)": FunctionFragment;
    "claimRewardsToSelf(address[],uint256,address)": FunctionFragment;
    "configureAssets((uint88,uint256,uint32,address,address,address,address)[])": FunctionFragment;
    "getAllUserRewardsBalance(address[],address)": FunctionFragment;
    "getAssetDecimals(address)": FunctionFragment;
    "getClaimer(address)": FunctionFragment;
    "getDistributionEnd(address,address)": FunctionFragment;
    "getRewardOracle(address)": FunctionFragment;
    "getRewardsByAsset(address)": FunctionFragment;
    "getRewardsData(address,address)": FunctionFragment;
    "getRewardsList()": FunctionFragment;
    "getTransferStrategy(address)": FunctionFragment;
    "getUserAssetData(address,address,address)": FunctionFragment;
    "getUserRewardsBalance(address[],address,address)": FunctionFragment;
    "getUserUnclaimedRewardsFromStorage(address,address)": FunctionFragment;
    "handleAction(address,uint256,uint256)": FunctionFragment;
    "setClaimer(address,address)": FunctionFragment;
    "setDistributionEnd(address,address,uint32)": FunctionFragment;
    "setRewardOracle(address,address)": FunctionFragment;
    "setTransferStrategy(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimAllRewards"
      | "claimAllRewardsOnBehalf"
      | "claimAllRewardsToSelf"
      | "claimRewards"
      | "claimRewardsOnBehalf"
      | "claimRewardsToSelf"
      | "configureAssets"
      | "getAllUserRewardsBalance"
      | "getAssetDecimals"
      | "getClaimer"
      | "getDistributionEnd"
      | "getRewardOracle"
      | "getRewardsByAsset"
      | "getRewardsData"
      | "getRewardsList"
      | "getTransferStrategy"
      | "getUserAssetData"
      | "getUserRewardsBalance"
      | "getUserUnclaimedRewardsFromStorage"
      | "handleAction"
      | "setClaimer"
      | "setDistributionEnd"
      | "setRewardOracle"
      | "setTransferStrategy"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimAllRewards",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAllRewardsOnBehalf",
    values: [string[], string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAllRewardsToSelf",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[], BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsOnBehalf",
    values: [string[], BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsToSelf",
    values: [string[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [RewardsDistributorTypes.RewardsConfigInputStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllUserRewardsBalance",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetDecimals",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getClaimer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getDistributionEnd",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsByAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransferStrategy",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserRewardsBalance",
    values: [string[], string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUnclaimedRewardsFromStorage",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAction",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistributionEnd",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardOracle",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferStrategy",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAllRewardsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAllRewardsToSelf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsToSelf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllUserRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDistributionEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsByAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransferStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUnclaimedRewardsFromStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDistributionEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferStrategy",
    data: BytesLike
  ): Result;

  events: {
    "AssetConfigUpdated(address,address,uint256,uint256)": EventFragment;
    "AssetIndexUpdated(address,address,uint256)": EventFragment;
    "ClaimerSet(address,address)": EventFragment;
    "RewardOracleUpdated(address,address)": EventFragment;
    "RewardsAccrued(address,address,uint256)": EventFragment;
    "RewardsClaimed(address,address,address,address,uint256)": EventFragment;
    "TransferStrategyInstalled(address,address)": EventFragment;
    "UserIndexUpdated(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferStrategyInstalled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

export interface AssetConfigUpdatedEventObject {
  asset: string;
  reward: string;
  emission: BigNumber;
  distributionEnd: BigNumber;
}
export type AssetConfigUpdatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  AssetConfigUpdatedEventObject
>;

export type AssetConfigUpdatedEventFilter =
  TypedEventFilter<AssetConfigUpdatedEvent>;

export interface AssetIndexUpdatedEventObject {
  asset: string;
  reward: string;
  index: BigNumber;
}
export type AssetIndexUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  AssetIndexUpdatedEventObject
>;

export type AssetIndexUpdatedEventFilter =
  TypedEventFilter<AssetIndexUpdatedEvent>;

export interface ClaimerSetEventObject {
  user: string;
  claimer: string;
}
export type ClaimerSetEvent = TypedEvent<
  [string, string],
  ClaimerSetEventObject
>;

export type ClaimerSetEventFilter = TypedEventFilter<ClaimerSetEvent>;

export interface RewardOracleUpdatedEventObject {
  reward: string;
  rewardOracle: string;
}
export type RewardOracleUpdatedEvent = TypedEvent<
  [string, string],
  RewardOracleUpdatedEventObject
>;

export type RewardOracleUpdatedEventFilter =
  TypedEventFilter<RewardOracleUpdatedEvent>;

export interface RewardsAccruedEventObject {
  user: string;
  reward: string;
  amount: BigNumber;
}
export type RewardsAccruedEvent = TypedEvent<
  [string, string, BigNumber],
  RewardsAccruedEventObject
>;

export type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;

export interface RewardsClaimedEventObject {
  user: string;
  reward: string;
  to: string;
  claimer: string;
  amount: BigNumber;
}
export type RewardsClaimedEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  RewardsClaimedEventObject
>;

export type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;

export interface TransferStrategyInstalledEventObject {
  reward: string;
  transferStrategy: string;
}
export type TransferStrategyInstalledEvent = TypedEvent<
  [string, string],
  TransferStrategyInstalledEventObject
>;

export type TransferStrategyInstalledEventFilter =
  TypedEventFilter<TransferStrategyInstalledEvent>;

export interface UserIndexUpdatedEventObject {
  user: string;
  asset: string;
  reward: string;
  index: BigNumber;
}
export type UserIndexUpdatedEvent = TypedEvent<
  [string, string, string, BigNumber],
  UserIndexUpdatedEventObject
>;

export type UserIndexUpdatedEventFilter =
  TypedEventFilter<UserIndexUpdatedEvent>;

export interface IRewardsController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewardsControllerInterface;

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
    claimAllRewards(
      assets: string[],
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAllRewardsOnBehalf(
      assets: string[],
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAllRewardsToSelf(
      assets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewardsToSelf(
      assets: string[],
      amount: BigNumberish,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    configureAssets(
      config: RewardsDistributorTypes.RewardsConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllUserRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    getAssetDecimals(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getClaimer(user: string, overrides?: CallOverrides): Promise<[string]>;

    getDistributionEnd(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardOracle(
      reward: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRewardsByAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getRewardsData(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getRewardsList(overrides?: CallOverrides): Promise<[string[]]>;

    getTransferStrategy(
      reward: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserAssetData(
      user: string,
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserRewardsBalance(
      assets: string[],
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserUnclaimedRewardsFromStorage(
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    handleAction(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDistributionEnd(
      asset: string,
      reward: string,
      distributionEnd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardOracle(
      reward: string,
      rewardOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTransferStrategy(
      reward: string,
      transferStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimAllRewards(
    assets: string[],
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAllRewardsOnBehalf(
    assets: string[],
    user: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAllRewardsToSelf(
    assets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    assets: string[],
    amount: BigNumberish,
    to: string,
    reward: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewardsOnBehalf(
    assets: string[],
    amount: BigNumberish,
    user: string,
    to: string,
    reward: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewardsToSelf(
    assets: string[],
    amount: BigNumberish,
    reward: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  configureAssets(
    config: RewardsDistributorTypes.RewardsConfigInputStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllUserRewardsBalance(
    assets: string[],
    user: string,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  getAssetDecimals(asset: string, overrides?: CallOverrides): Promise<number>;

  getClaimer(user: string, overrides?: CallOverrides): Promise<string>;

  getDistributionEnd(
    asset: string,
    reward: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardOracle(reward: string, overrides?: CallOverrides): Promise<string>;

  getRewardsByAsset(
    asset: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getRewardsData(
    asset: string,
    reward: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  getRewardsList(overrides?: CallOverrides): Promise<string[]>;

  getTransferStrategy(
    reward: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserAssetData(
    user: string,
    asset: string,
    reward: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserRewardsBalance(
    assets: string[],
    user: string,
    reward: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserUnclaimedRewardsFromStorage(
    user: string,
    reward: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleAction(
    user: string,
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimer(
    user: string,
    claimer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDistributionEnd(
    asset: string,
    reward: string,
    distributionEnd: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardOracle(
    reward: string,
    rewardOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTransferStrategy(
    reward: string,
    transferStrategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimAllRewards(
      assets: string[],
      to: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardsList: string[];
        claimedAmounts: BigNumber[];
      }
    >;

    claimAllRewardsOnBehalf(
      assets: string[],
      user: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardsList: string[];
        claimedAmounts: BigNumber[];
      }
    >;

    claimAllRewardsToSelf(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardsList: string[];
        claimedAmounts: BigNumber[];
      }
    >;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewardsToSelf(
      assets: string[],
      amount: BigNumberish,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      config: RewardsDistributorTypes.RewardsConfigInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAllUserRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    getAssetDecimals(asset: string, overrides?: CallOverrides): Promise<number>;

    getClaimer(user: string, overrides?: CallOverrides): Promise<string>;

    getDistributionEnd(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardOracle(reward: string, overrides?: CallOverrides): Promise<string>;

    getRewardsByAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getRewardsData(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getRewardsList(overrides?: CallOverrides): Promise<string[]>;

    getTransferStrategy(
      reward: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserAssetData(
      user: string,
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRewardsBalance(
      assets: string[],
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewardsFromStorage(
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDistributionEnd(
      asset: string,
      reward: string,
      distributionEnd: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardOracle(
      reward: string,
      rewardOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransferStrategy(
      reward: string,
      transferStrategy: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetConfigUpdated(address,address,uint256,uint256)"(
      asset?: string | null,
      reward?: string | null,
      emission?: null,
      distributionEnd?: null
    ): AssetConfigUpdatedEventFilter;
    AssetConfigUpdated(
      asset?: string | null,
      reward?: string | null,
      emission?: null,
      distributionEnd?: null
    ): AssetConfigUpdatedEventFilter;

    "AssetIndexUpdated(address,address,uint256)"(
      asset?: string | null,
      reward?: string | null,
      index?: null
    ): AssetIndexUpdatedEventFilter;
    AssetIndexUpdated(
      asset?: string | null,
      reward?: string | null,
      index?: null
    ): AssetIndexUpdatedEventFilter;

    "ClaimerSet(address,address)"(
      user?: string | null,
      claimer?: string | null
    ): ClaimerSetEventFilter;
    ClaimerSet(
      user?: string | null,
      claimer?: string | null
    ): ClaimerSetEventFilter;

    "RewardOracleUpdated(address,address)"(
      reward?: string | null,
      rewardOracle?: string | null
    ): RewardOracleUpdatedEventFilter;
    RewardOracleUpdated(
      reward?: string | null,
      rewardOracle?: string | null
    ): RewardOracleUpdatedEventFilter;

    "RewardsAccrued(address,address,uint256)"(
      user?: string | null,
      reward?: string | null,
      amount?: null
    ): RewardsAccruedEventFilter;
    RewardsAccrued(
      user?: string | null,
      reward?: string | null,
      amount?: null
    ): RewardsAccruedEventFilter;

    "RewardsClaimed(address,address,address,address,uint256)"(
      user?: string | null,
      reward?: string | null,
      to?: string | null,
      claimer?: null,
      amount?: null
    ): RewardsClaimedEventFilter;
    RewardsClaimed(
      user?: string | null,
      reward?: string | null,
      to?: string | null,
      claimer?: null,
      amount?: null
    ): RewardsClaimedEventFilter;

    "TransferStrategyInstalled(address,address)"(
      reward?: string | null,
      transferStrategy?: string | null
    ): TransferStrategyInstalledEventFilter;
    TransferStrategyInstalled(
      reward?: string | null,
      transferStrategy?: string | null
    ): TransferStrategyInstalledEventFilter;

    "UserIndexUpdated(address,address,address,uint256)"(
      user?: string | null,
      asset?: string | null,
      reward?: string | null,
      index?: null
    ): UserIndexUpdatedEventFilter;
    UserIndexUpdated(
      user?: string | null,
      asset?: string | null,
      reward?: string | null,
      index?: null
    ): UserIndexUpdatedEventFilter;
  };

  estimateGas: {
    claimAllRewards(
      assets: string[],
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAllRewardsOnBehalf(
      assets: string[],
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAllRewardsToSelf(
      assets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewardsToSelf(
      assets: string[],
      amount: BigNumberish,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    configureAssets(
      config: RewardsDistributorTypes.RewardsConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllUserRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetDecimals(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimer(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getDistributionEnd(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardOracle(
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsByAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsData(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsList(overrides?: CallOverrides): Promise<BigNumber>;

    getTransferStrategy(
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      user: string,
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRewardsBalance(
      assets: string[],
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewardsFromStorage(
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDistributionEnd(
      asset: string,
      reward: string,
      distributionEnd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardOracle(
      reward: string,
      rewardOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTransferStrategy(
      reward: string,
      transferStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimAllRewards(
      assets: string[],
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAllRewardsOnBehalf(
      assets: string[],
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAllRewardsToSelf(
      assets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewardsToSelf(
      assets: string[],
      amount: BigNumberish,
      reward: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    configureAssets(
      config: RewardsDistributorTypes.RewardsConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllUserRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetDecimals(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimer(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDistributionEnd(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardOracle(
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsByAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsData(
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTransferStrategy(
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAssetData(
      user: string,
      asset: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserRewardsBalance(
      assets: string[],
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUnclaimedRewardsFromStorage(
      user: string,
      reward: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAction(
      user: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimer(
      user: string,
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDistributionEnd(
      asset: string,
      reward: string,
      distributionEnd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardOracle(
      reward: string,
      rewardOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTransferStrategy(
      reward: string,
      transferStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

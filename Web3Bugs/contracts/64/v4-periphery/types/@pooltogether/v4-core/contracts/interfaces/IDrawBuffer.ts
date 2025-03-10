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
  PromiseOrValue,
} from "../../../../common";

export declare namespace IDrawBeacon {
  export type DrawStruct = {
    winningRandomNumber: PromiseOrValue<BigNumberish>;
    drawId: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    beaconPeriodStartedAt: PromiseOrValue<BigNumberish>;
    beaconPeriodSeconds: PromiseOrValue<BigNumberish>;
  };

  export type DrawStructOutput = [
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    number
  ] & {
    winningRandomNumber: BigNumber;
    drawId: number;
    timestamp: BigNumber;
    beaconPeriodStartedAt: BigNumber;
    beaconPeriodSeconds: number;
  };
}

export interface IDrawBufferInterface extends utils.Interface {
  functions: {
    "getBufferCardinality()": FunctionFragment;
    "getDraw(uint32)": FunctionFragment;
    "getDrawCount()": FunctionFragment;
    "getDraws(uint32[])": FunctionFragment;
    "getNewestDraw()": FunctionFragment;
    "getOldestDraw()": FunctionFragment;
    "pushDraw((uint256,uint32,uint64,uint64,uint32))": FunctionFragment;
    "setDraw((uint256,uint32,uint64,uint64,uint32))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBufferCardinality"
      | "getDraw"
      | "getDrawCount"
      | "getDraws"
      | "getNewestDraw"
      | "getOldestDraw"
      | "pushDraw"
      | "setDraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBufferCardinality",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDrawCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDraws",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getNewestDraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOldestDraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pushDraw",
    values: [IDrawBeacon.DrawStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setDraw",
    values: [IDrawBeacon.DrawStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBufferCardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDrawCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDraws", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNewestDraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOldestDraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pushDraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDraw", data: BytesLike): Result;

  events: {
    "DrawSet(uint32,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DrawSet"): EventFragment;
}

export interface DrawSetEventObject {
  drawId: number;
  draw: IDrawBeacon.DrawStructOutput;
}
export type DrawSetEvent = TypedEvent<
  [number, IDrawBeacon.DrawStructOutput],
  DrawSetEventObject
>;

export type DrawSetEventFilter = TypedEventFilter<DrawSetEvent>;

export interface IDrawBuffer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDrawBufferInterface;

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
    getBufferCardinality(overrides?: CallOverrides): Promise<[number]>;

    getDraw(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IDrawBeacon.DrawStructOutput]>;

    getDrawCount(overrides?: CallOverrides): Promise<[number]>;

    getDraws(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[IDrawBeacon.DrawStructOutput[]]>;

    getNewestDraw(
      overrides?: CallOverrides
    ): Promise<[IDrawBeacon.DrawStructOutput]>;

    getOldestDraw(
      overrides?: CallOverrides
    ): Promise<[IDrawBeacon.DrawStructOutput]>;

    pushDraw(
      draw: IDrawBeacon.DrawStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDraw(
      newDraw: IDrawBeacon.DrawStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getBufferCardinality(overrides?: CallOverrides): Promise<number>;

  getDraw(
    drawId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IDrawBeacon.DrawStructOutput>;

  getDrawCount(overrides?: CallOverrides): Promise<number>;

  getDraws(
    drawIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IDrawBeacon.DrawStructOutput[]>;

  getNewestDraw(
    overrides?: CallOverrides
  ): Promise<IDrawBeacon.DrawStructOutput>;

  getOldestDraw(
    overrides?: CallOverrides
  ): Promise<IDrawBeacon.DrawStructOutput>;

  pushDraw(
    draw: IDrawBeacon.DrawStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDraw(
    newDraw: IDrawBeacon.DrawStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBufferCardinality(overrides?: CallOverrides): Promise<number>;

    getDraw(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IDrawBeacon.DrawStructOutput>;

    getDrawCount(overrides?: CallOverrides): Promise<number>;

    getDraws(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IDrawBeacon.DrawStructOutput[]>;

    getNewestDraw(
      overrides?: CallOverrides
    ): Promise<IDrawBeacon.DrawStructOutput>;

    getOldestDraw(
      overrides?: CallOverrides
    ): Promise<IDrawBeacon.DrawStructOutput>;

    pushDraw(
      draw: IDrawBeacon.DrawStruct,
      overrides?: CallOverrides
    ): Promise<number>;

    setDraw(
      newDraw: IDrawBeacon.DrawStruct,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    "DrawSet(uint32,tuple)"(
      drawId?: PromiseOrValue<BigNumberish> | null,
      draw?: null
    ): DrawSetEventFilter;
    DrawSet(
      drawId?: PromiseOrValue<BigNumberish> | null,
      draw?: null
    ): DrawSetEventFilter;
  };

  estimateGas: {
    getBufferCardinality(overrides?: CallOverrides): Promise<BigNumber>;

    getDraw(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDrawCount(overrides?: CallOverrides): Promise<BigNumber>;

    getDraws(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNewestDraw(overrides?: CallOverrides): Promise<BigNumber>;

    getOldestDraw(overrides?: CallOverrides): Promise<BigNumber>;

    pushDraw(
      draw: IDrawBeacon.DrawStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDraw(
      newDraw: IDrawBeacon.DrawStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBufferCardinality(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDraw(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDrawCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDraws(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNewestDraw(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOldestDraw(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pushDraw(
      draw: IDrawBeacon.DrawStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDraw(
      newDraw: IDrawBeacon.DrawStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../../../../common";

export interface ObservationLibInterface extends utils.Interface {
  functions: {
    "MAX_CARDINALITY()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "MAX_CARDINALITY"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_CARDINALITY",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_CARDINALITY",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ObservationLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ObservationLibInterface;

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
    MAX_CARDINALITY(overrides?: CallOverrides): Promise<[number]>;
  };

  MAX_CARDINALITY(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    MAX_CARDINALITY(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    MAX_CARDINALITY(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_CARDINALITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

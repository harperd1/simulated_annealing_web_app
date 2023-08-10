/* tslint:disable */
/* eslint-disable */
/**
*/
export class Grid {
  free(): void;
/**
* @returns {Grid}
*/
  static new(): Grid;
/**
* @param {number} temperature
*/
  set_temperature(temperature: number): void;
/**
* @returns {number}
*/
  return_temperature(): number;
/**
* @param {number} pairing_energy
*/
  set_pairing_energy(pairing_energy: number): void;
/**
* @returns {number}
*/
  return_pairing_energy(): number;
/**
* @param {number} external_field
*/
  set_external_field(external_field: number): void;
/**
* @returns {number}
*/
  return_external_field(): number;
/**
* @returns {number}
*/
  advance(): number;
/**
* @returns {Int32Array}
*/
  return_state(): Int32Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_grid_free: (a: number) => void;
  readonly grid_new: () => number;
  readonly grid_set_temperature: (a: number, b: number) => void;
  readonly grid_return_temperature: (a: number) => number;
  readonly grid_set_pairing_energy: (a: number, b: number) => void;
  readonly grid_return_pairing_energy: (a: number) => number;
  readonly grid_set_external_field: (a: number, b: number) => void;
  readonly grid_return_external_field: (a: number) => number;
  readonly grid_advance: (a: number) => number;
  readonly grid_return_state: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

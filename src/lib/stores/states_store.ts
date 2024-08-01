import { writable  } from "svelte/store";    
import { State } from "$lib/domain/state_abstract";
import { Loading, Data, Fail } from "$lib/domain/state_abstract"; 

export const states = writable<State>(new Loading());

export function initialState(): void {
    states.set(new Loading()); 
}

export function loadData(): void {
    states.set(new Data("Hello"));
  }

export function loadFail(): void {
    states.set(new Fail());
  }
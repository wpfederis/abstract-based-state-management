import { writable  } from "svelte/store";    
import { State } from "$lib/feature/home/stores/states_abstract";
import { Loading, Data, Fail } from "$lib/feature/home/stores/states_abstract"; 

export const states = writable<State>(new Loading());

export function initialState(): void {
    states.set(new Loading()); 
}

export function loadData({data}: {data: string}): void {
    states.set(new Data(data));
  }

export function loadFail(): void {
    states.set(new Fail());
  }
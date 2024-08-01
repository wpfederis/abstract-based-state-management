import { writable  } from "svelte/store";    
import { State } from "$lib/domain/state_abstract";
import { Loading } from "$lib/domain/state_abstract"; 

export const states = writable<State>(new Loading());
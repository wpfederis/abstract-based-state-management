# Abstract Class-Based State Management

This project implements a state management solution using Svelte stores, leveraging TypeScript's abstract classes to define a robust and flexible state architecture. This approach ensures type safety and clear separation of different state behaviors, making it easier to manage application states and extend functionality.

## Authors

- William Henry P. Federis: [@wpfederis](https://www.github.com/octokatherine)

## Key Components

- **Abstract State Class:** At the core of this state management system is an abstract base class State. This class serves as a common ancestor for all specific states, ensuring that they share a common interface and can be managed uniformly.

```
export abstract class State {}
```

- **Concrete State Classes:** Several concrete classes extend the abstract State class, each representing a distinct state of the application. For example:

  - _Loading:_ Represents the state when the application is in the process of loading data.
  - _Data:_ Represents a state where data has been successfully loaded, and includes a name property for demonstration purposes.
  - _Fail:_ Represents a state where an error has occurred or data loading has failed.

```
export class Loading extends State {}

export class Data extends State {
    public name: string;

    public constructor(name: string) {
        super();
        this.name = name;
    }
}

export class Fail extends State {}

```

- **Svelte Store Integration:** A Svelte store is used to manage the state. The store can hold any instance of the State class, allowing components to reactively respond to state changes.

```
import { writable } from 'svelte/store';
import { State, Loading, Data, Fail } from './path-to-state-classes';

// Initialize the store with a default state
export const states = writable<State>(new Loading());
```

- **Component Interaction:** Components interact with the store by subscribing to state changes and using the instanceof keyword to safely access state-specific properties. This ensures that the application behaves correctly regardless of the current state.

```
<script lang="ts">
  import { states } from './path-to-store';
  import { Data, Loading, Fail } from './path-to-state-classes';

  $: currentState = $states;
</script>

<div>
  {#if currentState instanceof Loading}
    <p>Loading...</p>
  {/if}
  {#if currentState instanceof Data}
    <p>Data: {currentState.name}</p>
  {/if}
  {#if currentState instanceof Fail}
    <p>Failed to load data.</p>
  {/if}
</div>
```

## Benefits

- **Type Safety:** By using TypeScript and abstract classes, the system ensures that state transitions and property accesses are type-safe, reducing runtime errors.
- **Scalability:** The abstract class-based design allows for easy addition of new states without affecting existing logic.
- **Reactivity:** Leveraging Svelte's reactivity model, components automatically update when the state changes, leading to a responsive user experience.

This state management approach is ideal for applications that require a well-structured and maintainable state architecture, especially when dealing with complex state transitions and behaviors.

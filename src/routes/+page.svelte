<script lang="ts">
  import { Loading, Data, Fail } from "$lib/domain/state_abstract";
  import { states } from "$lib/stores/states_store";
  import { initialState, loadData, loadFail } from "$lib/stores/states_store";
  import { onMount } from "svelte";

  onMount(() => initialState());

  $: currentState = $states;
</script>

<body>
  <div class="state-container">
    <div class="state-container">
      <button on:click={loadData}>Load Data</button>
      <button on:click={loadFail}>Load Fail</button>
    </div>
    {#if currentState instanceof Loading}
      <span>LOADING</span>
    {/if}
    {#if currentState instanceof Data}
      <span>DATA: {currentState.name}</span>
    {/if}
    {#if currentState instanceof Fail}
      <span>FAIL</span>
    {/if}
  </div>
</body>

<style lang="scss">
  body {
    display: flex;
    margin: 0px;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: grey;
  }

  .state-container {
    display: flex;
    height: 250px;
    width: 500px;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
</style>

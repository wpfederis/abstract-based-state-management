<script lang="ts">
  import { onMount } from "svelte";
  import {
    Loading,
    Data,
    Fail,
  } from "$lib/feature/home/stores/states_abstract";
  import {
    states,
    initialState,
    loadData,
    loadFail,
  } from "$lib/feature/home/stores/states_store";

  onMount(() => initialState());

  $: currentState = $states;
</script>

<body>
  <div class="state-container">
    <div class="state-container">
      <button
        on:click={() => {
          loadData({ data: "I AM DATA" });
        }}>Load Data</button
      >
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

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
  import Button from "$lib/common/components/button/Button.svelte";

  onMount(() => initialState());

  $: currentState = $states;
</script>

<div class="state-container">
  <Button
    onClick={() => {
      loadData({ data: "I AM DATA" });
    }}
    buttonText={"LOAD DATA"}
  />
  <Button
    onClick={() => {
      loadFail();
    }}
    buttonText={"LOAD FAIL"}
  />

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

<style lang="scss">
  .state-container {
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
</style>

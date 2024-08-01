<script>
  export let onClick = () => {}; // Default to an empty function if not provided
  export let buttonText = "";
</script>

<button on:click={onClick}>{buttonText}</button>

<script>
  import "$lib/common/styles/globals.scss";

  export let title = "Analytics";
  export let description = "Dealer analytics";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
  />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary Meta tags-->
  <meta name="title" content={title} />
  <meta name="description" content={description} />
</svelte:head>

<body id="main-body">
  <slot />
</body>

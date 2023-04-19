<script lang="ts">
  import { MyCounterButton } from 'frontend';
  import { add, subtract } from 'math-helpers';
</script>

<h1>Web</h1>
<p>{add(1, 2)}</p>
<p>{subtract(3, 2)}</p>
<MyCounterButton />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

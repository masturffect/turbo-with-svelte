<script lang="ts">
  import { Card } from 'frontend';
  import { add, subtract } from 'math-helpers';
</script>

<h1>Web App</h1>
<p>Add 1 + 2 = {add(1, 2)}</p>
<p>Subtract 3 - 2 = {subtract(3, 2)}</p>
<Card subheader="Card Example" headline="Card Headline" hasButton/>

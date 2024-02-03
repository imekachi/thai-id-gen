<script lang="ts">
  import { generateThaiId } from './lib/generateThaiId'

  let generatedId = ''
  function handleSubmit() {
    generatedId = generateThaiId()
  }
</script>

<main>
  <div>
    <h1>Thai ID Gen</h1>
    <p>Generate and validate Thai ID number</p>
  </div>
  <section>
    <h2>Generate ID</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <!-- "tabular-nums" forces numbers to have the same width -->
        <!-- when generating numbers, it won't shift around -->
        <input
          class="tabular-nums"
          name="generatedThaiId"
          type="text"
          value={generatedId}
          readonly
        />
      </div>
      <button type="submit">Generate</button>
    </form>
  </section>
</main>

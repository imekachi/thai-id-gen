<script lang="ts">
  import { generateThaiId } from './lib/generateThaiId'

  let generatedId = ''
  function handleSubmit() {
    generatedId = generateThaiId()
  }
</script>

<main class="max-w-md mx-auto">
  <div
    class="h-[60dvh] grid place-content-center text-center text-violet-200 p-4"
  >
    <h1 class="text-3xl font-semibold">Thai ID Gen</h1>
    <p>Generate and validate Thai ID number</p>
  </div>
  <section class="py-6">
    <h2 class="px-6 text-violet-200 font-medium mb-2">Generate ID</h2>
    <form on:submit|preventDefault={handleSubmit} class="grid gap-5">
      <div
        class="flex gap-2 w-full rounded-3xl bg-zinc-800 outline-none shadow-md"
      >
        <!-- "tabular-nums" forces numbers to have the same width -->
        <!-- when generating numbers, it won't shift around -->
        <input
          class="tabular-nums text-xl text-center p-3 w-full bg-transparent outline-none border-0 focus:ring-0"
          name="generatedThaiId"
          type="text"
          value={generatedId}
          readonly
        />
      </div>
      <button
        type="submit"
        class="font-medium text-white rounded-full border border-violet-600 bg-violet-500 p-3 w-full shadow-md hover:bg-violet-400 hover:border-violet-500 hover:text-white"
        >Generate</button
      >
    </form>
  </section>
</main>

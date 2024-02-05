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
    <h1 class="text-2xl font-semibold">Thai ID Gen</h1>
    <p>Generate and validate Thai ID number</p>
  </div>
  <section class="p-6">
    <h2 class="text-violet-200 font-medium mb-2">Generate ID</h2>
    <form on:submit|preventDefault={handleSubmit} class="grid gap-4">
      <div
        class="flex gap-2 w-full rounded-lg border border-zinc-600 bg-zinc-700 outline-none shadow-md"
      >
        <!-- "tabular-nums" forces numbers to have the same width -->
        <!-- when generating numbers, it won't shift around -->
        <input
          class="tabular-nums text-sm text-violet-200 p-2.5 w-full bg-transparent outline-none border-0 focus:ring-0"
          name="generatedThaiId"
          type="text"
          value={generatedId}
          readonly
        />
        <button
          type="button"
          class="text-violet-300 m-1 px-1.5 hover:text-violet-100 hover:bg-zinc-500 hover:rounded-lg hover:border-zinc-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        class="text-sm font-medium text-white rounded-lg border border-violet-600 bg-violet-500 p-2.5 w-full shadow-md hover:bg-violet-400 hover:border-violet-500 hover:text-white"
        >Generate</button
      >
    </form>
  </section>
</main>

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="grid grid-cols-3 grid-rows-3 m-auto">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
`

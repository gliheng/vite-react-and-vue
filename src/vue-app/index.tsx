import { createApp } from 'vue'

function Page() {
  return <h1>vue page!</h1>
}

const app = createApp(Page);
app.mount(document.getElementById('root')!)

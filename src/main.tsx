import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from '@Store'
import '@Styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

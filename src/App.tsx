import { memo, useEffect } from 'react'
import WebFont from 'webfontloader'
import Router from './router/app.router'

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins'],
      },
    })
  }, [])

  return <Router isAuth={false} isAdmin={false} />
}

export default memo(App)

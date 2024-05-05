import React from 'react'
import { Helmet } from 'react-helmet'

interface IPageHeading {
  title: string
  content?: string
}

const PageHeading: React.FC<IPageHeading> = ({ title, content }) => {
  return (
    <Helmet>
      <title>{title} - App</title>
      <meta name={title} content={content} />
    </Helmet>
  )
}

export default PageHeading

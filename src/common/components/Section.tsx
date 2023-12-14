import React, { PropsWithChildren } from 'react'

interface ISection extends PropsWithChildren {
  id: string
}

const Section: React.FC<ISection> = ({ id, children }) => {
  return (
    <section id={id} className="container mx-auto">
      {children}
    </section>
  )
}

export default Section

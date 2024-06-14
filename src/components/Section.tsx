import React, { PropsWithChildren } from 'react'

interface ISection extends PropsWithChildren {
  id: string
  className?: string
}

const Section: React.FC<ISection> = ({ id, children, className }) => {
  return (
    <section id={id} className={`${className} container mx-auto`}>
      <div className="2xl:mx-28 lg:mx-4 mx-2">{children}</div>
    </section>
  )
}

export default Section

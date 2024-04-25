import React, { PropsWithChildren } from 'react'

interface ISection extends PropsWithChildren {
  id: string
  className?: string
}

const Section: React.FC<ISection> = ({ id, children, className }) => {
  return (
    <section id={id} className={`${className} container mx-auto`}>
      <div className="2xl:mx-28 lg:mx-4 mx-2 flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between items-center space-x-4">
        {children}
      </div>
    </section>
  )
}

export default Section

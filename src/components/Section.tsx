import React, { PropsWithChildren } from 'react'

interface ISection extends PropsWithChildren {
  id: string
  className?: string
  screen?: boolean
}

const Section: React.FC<ISection> = ({
  id,
  children,
  className,
  screen = false,
}) => {
  return (
    <section
      id={id}
      className={`${className} ${
        screen && '2xl:mx-28 lg:mx-4 mx-2'
      } container mx-auto`}
    >
      {children}
    </section>
  )
}

export default Section

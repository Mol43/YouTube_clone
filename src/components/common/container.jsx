import React from 'react'

export const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1504px] px-[27px] mx-auto text-white ${className}`}>
        {children}
    </div>
  )
}

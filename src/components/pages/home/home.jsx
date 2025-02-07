import React from 'react'
import { Navbar } from '../../common/navbar'
import CategorySlider from '../../common/CategorySlider'
import { List } from '../../common/youtube-list'

export const HomePage = () => {
  return (
    <div>
      <CategorySlider/>
      <Navbar/>
      <List/>
    </div>
  )
}

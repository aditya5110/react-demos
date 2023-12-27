import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'

function App() {
  const data = [
    {item : 'eggs' , qty : 12 , completed : true},
    {item : 'banana' , qty : 6 , completed : false},
    {item : 'apples' , qty : 4 , completed : true},
    {item : 'muskmelon' , qty : 2 , completed : false},
  ]

  
  return (
    <>
      <ShoppingList items={data} />
    </>
  )
}

export default App

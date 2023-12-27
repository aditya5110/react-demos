import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'

function App() {
  const data = [
    {id : 1 ,item : 'eggs' , qty : 12 , completed : true},
    {id : 2 ,item : 'apples' , qty : 4 , completed : true},
    {id : 3 ,item : 'banana' , qty : 6 , completed : false},
    {id : 4 ,item : 'muskmelon' , qty : 2 , completed : false},
  ]

  
  return (
    <>
      <ShoppingList items={data} />
    </>
  )
}

export default App

import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MyButton from '../MyButton'

const Home = () => {
  return (
    <MainLayout>
       <div className="mt-4 p-5 bg-warning text-white rounded">
        <h1>Pannee Wongprasert</h1>
        <p>Lorem ipsum...</p>
      </div>
       <MyButton text="Danger" color="danger"/>
       <MyButton text="Infomation" color="info"/>
       <MyButton text="Primary" color="primary"/>
    </MainLayout>
    
  )
}

export default Home
import React from 'react'
import UserCard from './UserCard.jsx'

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Khanif"
          email="khanif@gmail.com"
          street="mangga"
          city="semarang" />
          <UserCard 
          name="Naufal"
            email="khanif@gmail.com"
          street="mangga"
          city="semarang" />
          <UserCard name="Hehe"
            email="khanif@gmail.com"
          street="mangga"
          city="semarang"/>
        </div>
      </div>
    </>
  );
}

export default Exercise

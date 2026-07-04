import React from 'react'
import Button from '../Components/Button'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Online Course Management System</h1>

        <p>
          Master HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and
          many more technologies with easy-to-understand notes, practical
          examples, quizzes, and downloadable PDFs.
        </p>

        <div className="home-buttons">
          <Button content="Explore Notes" />
          <Button content="View Courses" />
        </div>
      </div>
    </div>
  )
}

export default Home
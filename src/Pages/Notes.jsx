import React from 'react'
import JavaScript from '../assets/js.png'
import React_logo from '../assets/react.png'
import Nodejs from '../assets/node.png'
import Button from '../Components/Button'
import '../Styles/Notes.css'
const Notes = () => {
  const renderCards = category.map(card => {
    return (
      <div className="note-card">
        <div className="note-image">
          <img src={card.image} />
        </div>
        <div className="note-content">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Button content="read now" />
        </div>
      </div>
    )
  })
  return (
    <div className='heading'>
      <h2>Notes</h2>

      {/* card */}

      <div>
        {renderCards}
      </div>

    </div>
  )
}

export default Notes

const category = [
  {
    id: 1,
    title: 'JavaScript_Notes',
    description: 'jaaaaaaavaaaaaaa',
    image: JavaScript,
  },
  {
    id: 2,
    title: 'React_Notes',
    description: 'reactttttttt',
    image: React_logo
  },
  {
    id: 3,
    title: 'Nodejs_Notes',
    description: 'nodejssssss',
    image: Nodejs
  },
]

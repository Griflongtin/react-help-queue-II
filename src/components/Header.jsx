import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="heads-up">
      <style jsx>{`
          .heads-up {
            text-align: center;
            color: orange;
            text-shadow: 1px 1px 1px black;}`}</style>
          <h1>Problems!</h1>
          <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  )
}

export default Header

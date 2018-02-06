import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props) {
  return(
    <div className="color-toggle">
      <style jsx>{`
          .color-toggle {
            color: orange;
          }
          .color-toggle:hover {
            color: green;
          }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  )
}

Ticket.propType = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket

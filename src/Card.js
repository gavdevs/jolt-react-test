import React, { Component } from 'react';
import './Card.css';
import ReactPaginate from 'react-paginate'

class Card extends Component {
  render() {
    const { planets, context } = this.props

    if (context.people.length > 0) {
      return (
        <div>
          {context.people.map((person, id) => {
            return (
              <div key={id} className='card'>
                <div className='card-content'>
                  <div className='card-name'>{person.name}</div>
                  <img src={`http://localhost:3008/${person.image}`} alt='profile'/>
                  <p>
                    <span>Birthday:</span>
                    <span>{person.birth_year}</span>
                  </p>
                  <p>
                    <span>Homeworld:</span>
                    <span>{this.getPlanet(person.id, planets)}</span>
                    </p>
                </div>
              </div>
            );
          })}

          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakClassName={"break"}
            pageCount={context.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={context.pageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>          
      )
    }

    return <h1>Loading...</h1>
  }

  getPlanet(personId, planets) {
    return planets.map(planet => {
      return planet.residents.includes(personId) ? planet.name : ''
    })
  }
}

export default Card;

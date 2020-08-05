import React, { Component } from 'react'
import styles               from '../../css/items.module.css'
import Tour                 from './Tour'
import Title                from '../Title.styled'

class TourList
  extends Component {
  state = {
    tours      : [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState( {
      tours      : this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    } )
  }

  render() {
    return (
      <section className={ styles.tours }>
        <Title
          title={ 'our' }
          subtitle="tours"
        />
        {/* with filter */ }
        {/*<div className={ styles.center }>*/ }
        {/*  { this.state.sortedTours.filter( ({ node }) => node.price*/ }
        {/*                                                 <= 2000 )*/ }
        {/*    .map( ({ node }) => (*/ }
        {/*      <Tour*/ }
        {/*        tour={ node }*/ }
        {/*        key={ node.contentful_id }*/ }
        {/*      />*/ }
        {/*    ) ) }*/ }
        {/*</div>*/ }

        <div className={ styles.center }>
          { this.state.sortedTours
            .map( ({ node }) => (
              <Tour
                tour={ node }
                key={ node.contentful_id }
              />
            ) ) }
        </div>


      </section>
    )
  }
}

export default TourList
import React, { Component } from 'react'

const styles = {
    title: {
        marginBottom:'30px'
    }
}

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.title}>Titulo</h1>
      </div>
    )
  }
}
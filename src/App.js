import React, { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';

class App extends Component {

  state = {
    productos: [
      { name: "Jitomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 100, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 1500, img: "/productos/lechuga.jpg" },
    ]
  }


  render() {
    return (
      <Layout>
        <Productos
          agregarACarro={() => console.log("NO HACE NADA")}
          productos={this.state.productos}
        />
      </Layout>
    )
  }

}

export default App;
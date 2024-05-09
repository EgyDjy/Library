// import React, { Component } from "react";
// import './App.css';
// // import Media from "./Component/Media";
// // import OsisForm from './OsisForm';
// import { Form } from 'react-bootstrap';

// import LandingPage from "./Component/LandingPage";
// import Pancasila from "./Component/Pancasila";
// import Media from "./Component/Media";


// class App extends Component {
//   render() {
//     return (
//      <Pancasila />
//     )
//   }
// }
// export default App;

// class App extends Component {
//   render() {
//     return (
// <div className="App container col-sm-6">
//         <div className="container-fluid py-3 bg-warning">
//           <h4>Form Pendaftaran OSIS</h4>
//         </div>
//         <div className="container py-2">
//             <input
//               type = "text"
//               placeholder="Masukkan nama"
//             />
//         </div>

//         <Form.Label>Jenis Kelamin</Form.Label>
//         <Form.Check
//           type="radio"
//           label="Laki-laki"
//           value="laki-laki"
//           required
//         />
//         <Form.Check
//           type="radio"
//           label="Perempuan"
//           value="perempuan"
//           required
//         />

//         <div className="container py-2">
//             <input
//               type = "text"
//               placeholder="Masukkan alamat"
//             />
//         </div>
//       </div>
//     )
//   }
// }

// export default App;


// class App extends Component{
//   render () {
//     return (
//       <div>
//         <h4  className="container-fluid py-5 btn btn-danger">Button Merah</h4>
//         <h4  className="container-fluid py-5 btn btn-warning">Button Kuning</h4>
//         <h4  className="container-fluid py-5 btn btn-success">Button Hijau</h4>
//         <h4  className="container-fluid py-5 btn btn-light">Button Putih</h4>
//         <h4  className="container-fluid py-5 btn btn-dark">Button Hitam</h4>
//       </div>
//     )
//   }
// }

// export default App;


import React, { Component } from "react";
import Utama from "./Utama";
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <p className="logo">EgyDjaya</p>
                    <Link to={'/'}>HOME</Link>
                    <Link to={'Tentangsaya'}>ABOUT</Link>
                    <Link to={'Karya'}>PROJECT</Link>
                    <Link to={'Kontak'}>CONTACT</Link>
                    <Link to={'Gallery'}>GALLERY</Link>
                    <Link to={'Cart'}>CART</Link>
                </nav>
                < Utama />

            </div>
        )
    }
}

export default App;
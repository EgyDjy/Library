import React, {Component} from "react";
import Media from "./Media";

class Pancasila extends Component {
    render () {
      return (
        <div className="container">
            <div className="container-fluid text-center bg-danger">
              <h1 >Pancasila</h1>
              </div>
              <div className="bg-warning">
              <Media image="sila1.png" title="1. Ketuhanan Yang Maha Esa"></Media>
                </div>
              <div className="bg-success">
              <Media image="sila2.png" title="2. Kemanusiaan yang adil dan beradab"></Media>
                </div>
              <div className="bg-info">
              <Media image="sila3.png" title="3. Persatuan Indonesia"></Media>
                </div>
              <div className="bg-danger">
              <Media image="sila4.png" title="4. Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan"></Media>
                </div>
              <div className="bg-warning">
              <Media image="sila5.png" title="5. Keadilan sosial bagi seluruh rakyat Indonesia"></Media>
                </div>
  </div>
      )
    }
  }
  
  export default Pancasila;
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css"
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

// App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nowpages: "Popular" };
  }

  pagesClick = pages => {
    this.setState({ nowpages: pages });
  };

  render() {
    const {nowpages} = this.state;
    return (
      <div>
        <div className='container'>
          <Router>
            <Header              
              pagesClick={this.pagesClick}
              nowpages={nowpages}
            />
            <Content nowpages={nowpages} />
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;

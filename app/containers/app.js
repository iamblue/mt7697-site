import { connect } from 'react-redux';
import React, { Component } from 'react';
import Header from './header';
import Show from './show';
import SupportPlatform from './supportPlatform';
import WhereToBuy from './whereToBuy';
import CloudService from './cloudService';
import PCBA from './PCBA';
import Footer from './footer';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className={styles.base}>
        <Header />
        <Show />
        <SupportPlatform />
        <CloudService />
        <PCBA />
        <WhereToBuy />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { })(App);

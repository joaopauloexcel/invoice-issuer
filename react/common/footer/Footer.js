import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div class="copy noPrint">
        <a href="https://jasdeep.ca/?utm_source=angular_invoicing">Jasdeep Singh</a> &amp;
        <a href="https://github.com/manpreetrules">Manpreet Singh</a>
        Made with
        <span class="love">&#9829;</span> in Toronto by
        <a href="https://metawarelabs.com/?utm_source=angular_invoicing">Metaware Labs Inc.</a>
      </div>
    );
  }
}

export default Footer;


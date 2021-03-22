import Footer from './Footer.js';

const props = [];

const ReactFooter = reactDirective => reactDirective(Footer, props);
ReactFooter.$inject = ['reactDirective'];

export default ReactFooter;

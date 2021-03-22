import Header from './Header.js';

const props = [];

const ReactHeader = reactDirective => reactDirective(Header, props);
ReactHeader.$inject = ['reactDirective'];

export default ReactHeader;

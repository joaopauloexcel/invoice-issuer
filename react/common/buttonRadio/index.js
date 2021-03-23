import ButtonRadio from './ButtonRadio.js';

const props = [
  'label'
];

const ReactButtonRadio = reactDirective => reactDirective(ButtonRadio, props);
ReactButtonRadio.$inject = ['reactDirective'];

export default ReactButtonRadio;

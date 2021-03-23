import Button from './Button.js';

const props = [
  'label'
];

const ReactButton = reactDirective => reactDirective(Button, props);
ReactButton.$inject = ['reactDirective'];

export default ReactButton;

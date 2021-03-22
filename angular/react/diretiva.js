import Button from './common/button/Button.js';

const props = [
  'children'
];
const ReactButton = reactDirective => reactDirective(Button, props);
ReactButton.$inject = ['reactDirective'];

export default ReactButton;

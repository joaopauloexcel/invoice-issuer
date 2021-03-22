import Card from './Card.js';

const props = [];

const ReactButton = reactDirective => reactDirective(Button, props);
ReactButton.$inject = ['reactDirective'];

export default ReactButton;

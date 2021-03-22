import CardResult from './CardResult.js';

const props = [];

const ReactCardResult = reactDirective => reactDirective(CardResult, props);
ReactCardResult.$inject = ['reactDirective'];

export default ReactCardResult;

import CardList from './CardList.js';

const props = [];

const ReactCardList = reactDirective => reactDirective(CardList, props);
ReactCardList.$inject = ['reactDirective'];

export default ReactCardList;

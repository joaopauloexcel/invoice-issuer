import Print from './Print.js';

const props = [];

const PrintPage = reactDirective => reactDirective(Print, props);
PrintPage.$inject = ['reactDirective'];

export default PrintPage;

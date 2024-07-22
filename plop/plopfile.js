const api = require('./generation/common/api');
const page = require('./generation/pages/page');
const form = require('./generation/common/form');
const store = require('./generation/common/store');
const slice = require('./generation/common/slice');
const shared = require('./generation/shared/shared');
const widget = require('./generation/widgets/widget');
const entity = require('./generation/entities/entity');
const feature = require('./generation/features/feature');
const component = require('./generation/common/component');
const entitiesComponent = require('./generation/entities/entitiesComponent');
const featuresComponent = require('./generation/features/featuresComponent');

const config = (plop) => {
    // Common
    api(plop);
    form(plop);
    store(plop);
    slice(plop);
    component(plop);

    // Entities
    entity(plop);
    entitiesComponent(plop);

    // Features
    feature(plop);
    featuresComponent(plop);

    // Pages
    page(plop);

    // Shared
    shared(plop);

    // Widget
    widget(plop);

    // Helpers
    // Первая большая буква
    plop.setHelper('capitalize', (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    });

    // Все с маленькой
    plop.setHelper('lowerCase', (text) => {
        return text.toLowerCase();
    });
};

module.exports = config;

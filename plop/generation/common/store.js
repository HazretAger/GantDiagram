const store = (plop) => {
    plop.setGenerator('store', {
        description: 'Создает стор',
        prompts: [
            {
                type: 'list',
                name: 'layerName',
                message: 'В какой слой положить?',
                choices: [
                    {
                        name: 'entities',
                        value: 'entities',
                    },
                    {
                        name: 'features',
                        value: 'features',
                    },
                    {
                        name: 'widgets',
                        value: 'widgets',
                    },
                ],
            },
            {
                type: 'input',
                name: 'sliceName',
                message: 'В какой слайс?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/model/store/use{{sliceName}}Store.ts',
                templateFile: './templates/store/store.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/model/types/{{lowerCase sliceName}}Schema.ts',
                templateFile: './templates/store/storeSchema.hbs',
            },
        ],
    });
};

module.exports = store;

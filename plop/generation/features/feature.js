const feature = (plop) => {
    plop.setGenerator('feature', {
        description: 'Создает слайс в фиче',
        prompts: [
            {
                type: 'input',
                name: 'sliceName',
                message: 'Название слайса?',
            },
        ],
        actions: (data) => {
            data.layerName = 'feature';

            return [
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/Create{{sliceName}}/Create{{sliceName}}.tsx',
                    templateFile: './templates/layers/features/createUi/createUi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/Create{{sliceName}}/Create{{sliceName}}.module.scss',
                    templateFile: './templates/layers/features/createUi/createUi.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/Edit{{sliceName}}/Edit{{sliceName}}.tsx',
                    templateFile: './templates/layers/features/editUi/editUi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/Edit{{sliceName}}/Edit{{sliceName}}.module.scss',
                    templateFile: './templates/layers/features/editUi/editUi.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/Delete{{sliceName}}/Delete{{sliceName}}.tsx',
                    templateFile: './templates/layers/features/deleteUi/deleteUi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/Delete{{sliceName}}/Delete{{sliceName}}.module.scss',
                    templateFile: './templates/layers/features/deleteUi/deleteUi.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/model/store/use{{sliceName}}Store.ts',
                    templateFile: './templates/layers/features/store/store.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/model/types/{{lowerCase sliceName}}Schema.ts',
                    templateFile: './templates/layers/features/types/sliceSchema.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/api/create{{sliceName}}.ts',
                    templateFile: './templates/api/createApi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/lib/query/useCreate{{sliceName}}.tsx',
                    templateFile: './templates/query/createQuery.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/api/update{{sliceName}}.ts',
                    templateFile: './templates/api/updateApi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/lib/query/useUpdate{{sliceName}}.tsx',
                    templateFile: './templates/query/updateQuery.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/api/delete{{sliceName}}.ts',
                    templateFile: './templates/api/deleteApi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/lib/query/useDelete{{sliceName}}.tsx',
                    templateFile: './templates/query/deleteQuery.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/index.ts',
                    templateFile: './templates/layers/features/rootIndex.hbs',
                },
            ];
        },
    });
};

module.exports = feature;

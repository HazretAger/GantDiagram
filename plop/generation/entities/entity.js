const entity = (plop) => {
    plop.setGenerator('entity', {
        description: 'Создает слайс в сущности',
        prompts: [
            {
                type: 'input',
                name: 'sliceName',
                message: 'Название слайса?',
            },
        ],
        actions: (data) => {
            data.layerName = 'entity';

            return [
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/ui/{{sliceName}}Card/{{sliceName}}Card.tsx',
                    templateFile: './templates/layers/entities/cardUi/cardUi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/ui/{{sliceName}}Card/{{sliceName}}Card.module.scss',
                    templateFile: './templates/layers/entities/cardUi/cardUi.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/ui/{{sliceName}}Card/{{sliceName}}Card.stories.tsx',
                    templateFile: './templates/layers/entities/cardUi/cardUi.stories.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/model/store/use{{sliceName}}Store.ts',
                    templateFile: './templates/layers/entities/store/store.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/model/types/{{lowerCase sliceName}}Schema.ts',
                    templateFile: './templates/layers/entities/types/sliceSchema.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/model/types/{{lowerCase sliceName}}.ts',
                    templateFile: './templates/layers/entities/types/slice.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/api/fetch{{sliceName}}s.ts',
                    templateFile: './templates/api/fetchApi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/lib/query/useFetch{{sliceName}}s.tsx',
                    templateFile: './templates/query/fetchQuery.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/api/fetch{{sliceName}}ById.ts',
                    templateFile: './templates/api/fetchByIdApi.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/lib/query/useFetch{{sliceName}}ById.tsx',
                    templateFile: './templates/query/fetchByIdQuery.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/index.ts',
                    templateFile: './templates/layers/entities/rootIndex.hbs',
                },
            ];
        },
    });
};

module.exports = entity;

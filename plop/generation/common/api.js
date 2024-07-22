const api = (plop) => {
    plop.setGenerator('api', {
        description: 'Создает апи',
        prompts: [
            {
                type: 'list',
                name: 'apiType',
                message: 'Какой тип запроса?',
                choices: [
                    {
                        name: 'Запрос списка (fetchNames)',
                        value: 'fetchList',
                    },
                    {
                        name: 'Запрос по id (fetchNameById)',
                        value: 'fetchById',
                    },
                    {
                        name: 'Создание слайса (createName)',
                        value: 'create',
                    },
                    {
                        name: 'Обновление слайса (updateName)',
                        value: 'update',
                    },
                    {
                        name: 'Удаление слайса (deleteName)',
                        value: 'delete',
                    },
                ],
            },
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
        actions: (data) => {
            let actionList = [];

            switch (data.apiType) {
                case 'fetchList':
                    actionList = [
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/api/fetch{{sliceName}}s.ts',
                            templateFile: './templates/api/fetchApi.hbs',
                        },
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/lib/query/useFetch{{sliceName}}s.tsx',
                            templateFile: './templates/query/fetchQuery.hbs',
                        },
                    ];
                    break;
                case 'fetchById':
                    actionList = [
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/api/fetch{{sliceName}}ById.ts',
                            templateFile: './templates/api/fetchByIdApi.hbs',
                        },
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/lib/query/useFetch{{sliceName}}ById.tsx',
                            templateFile: './templates/query/fetchByIdQuery.hbs',
                        },
                    ];
                    break;
                case 'create':
                    actionList = [
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/api/create{{sliceName}}.ts',
                            templateFile: './templates/api/createApi.hbs',
                        },
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/lib/query/useCreate{{sliceName}}.tsx',
                            templateFile: './templates/query/createQuery.hbs',
                        },
                    ];
                    break;
                case 'update':
                    actionList = [
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/api/update{{sliceName}}.ts',
                            templateFile: './templates/api/updateApi.hbs',
                        },
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/lib/query/useUpdate{{sliceName}}.tsx',
                            templateFile: './templates/query/updateQuery.hbs',
                        },
                    ];
                    break;
                case 'delete':
                    actionList = [
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/api/delete{{sliceName}}.ts',
                            templateFile: './templates/api/deleteApi.hbs',
                        },
                        {
                            type: 'add',
                            path: '../src/{{layerName}}/{{sliceName}}/lib/query/useDelete{{sliceName}}.tsx',
                            templateFile: './templates/query/deleteQuery.hbs',
                        },
                    ];
                    break;
                default:
                    console.log('Нет такого типа');
                    break;
            }

            return actionList;
        },
    });
};

module.exports = api;

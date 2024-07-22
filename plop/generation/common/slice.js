const slice = (plop) => {
    plop.setGenerator('slice', {
        description: 'Создает слайс',
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
                name: 'name',
                message: 'Название слайса?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/{{layerName}}/{{name}}/ui/{{name}}.tsx',
                templateFile: './templates/component/component.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{name}}/ui/{{name}}.module.scss',
                templateFile: './templates/component/component.style.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{name}}/ui/{{name}}.stories.tsx',
                templateFile: './templates/component/component.stories.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{name}}/index.ts',
                templateFile: './templates/layers/rootIndex/rootIndex.hbs',
            },
        ],
    });
};

module.exports = slice;

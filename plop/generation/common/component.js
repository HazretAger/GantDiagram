const component = (plop) => {
    plop.setGenerator('component', {
        description: 'Создает стандартный компонент',
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
            {
                type: 'input',
                name: 'name',
                message: 'Название компонента?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/ui/{{name}}/{{name}}.tsx',
                templateFile: './templates/component/component.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/ui/{{name}}/{{name}}.module.scss',
                templateFile: './templates/component/component.style.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/ui/{{name}}/{{name}}.stories.tsx',
                templateFile: './templates/component/component.stories.hbs',
            },
        ],
    });
};

module.exports = component;

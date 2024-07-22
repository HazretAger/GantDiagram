const form = (plop) => {
    plop.setGenerator('form', {
        description: 'Создает стандартную форму',
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
                templateFile: './templates/form/form.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/ui/{{name}}/{{name}}.module.scss',
                templateFile: './templates/form/form.style.hbs',
            },
            {
                type: 'add',
                path: '../src/{{layerName}}/{{sliceName}}/ui/{{name}}/{{name}}.stories.tsx',
                templateFile: './templates/form/form.stories.hbs',
            },
        ],
    });
};

module.exports = form;

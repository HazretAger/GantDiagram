const widget = (plop) => {
    plop.setGenerator('widget', {
        description: 'Создает слайс в виджете',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название слайса?',
            },
        ],
        actions: (data) => {
            data.layerName = 'widget';

            return [
                {
                    type: 'add',
                    path: '../src/widget/{{name}}/ui/{{name}}.tsx',
                    templateFile: './templates/component/component.hbs',
                },
                {
                    type: 'add',
                    path: '../src/widget/{{name}}/ui/{{name}}.module.scss',
                    templateFile: './templates/component/component.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/widget/{{name}}/ui/{{name}}.stories.tsx',
                    templateFile: './templates/component/component.stories.hbs',
                },
                {
                    type: 'add',
                    path: '../src/widget/{{name}}/index.ts',
                    templateFile: './templates/layers/rootIndex.hbs',
                },
            ];
        },
    });
};

module.exports = widget;

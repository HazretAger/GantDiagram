const shared = (plop) => {
    plop.setGenerator('shared', {
        description: 'Создает ui компонент в shared слое',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название компонента?',
            },
        ],
        actions: (data) => {
            data.layerName = 'shared';

            return [
                {
                    type: 'add',
                    path: '../src/shared/ui/{{name}}/{{name}}.tsx',
                    templateFile: './templates/component/component.hbs',
                },
                {
                    type: 'add',
                    path: '../src/shared/ui/{{name}}/{{name}}.module.scss',
                    templateFile: './templates/component/component.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/shared/ui/{{name}}/{{name}}.stories.tsx',
                    templateFile: './templates/component/component.stories.hbs',
                },
                {
                    type: 'add',
                    path: '../src/shared/ui/{{name}}/index.ts',
                    templateFile: './templates/component/index.hbs',
                },
            ];
        },
    });
};

module.exports = shared;

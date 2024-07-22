const featuresComponent = (plop) => {
    plop.setGenerator('f-component', {
        description: 'Создает стандартный компонент в фиче',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название компонента?',
            },
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
                    path: '../src/features/{{sliceName}}/ui/{{name}}/{{name}}.tsx',
                    templateFile: './templates/component/component.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/{{name}}/{{name}}.module.scss',
                    templateFile: './templates/component/component.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/features/{{sliceName}}/ui/{{name}}/{{name}}.stories.tsx',
                    templateFile: './templates/component/component.stories.hbs',
                },
            ];
        },
    });
};

module.exports = featuresComponent;

const entitiesComponent = (plop) => {
    plop.setGenerator('e-component', {
        description: 'Создает стандартный компонент в сущности',
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
            data.layerName = 'entity';

            return [
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/ui/{{name}}/{{name}}.tsx',
                    templateFile: './templates/component/component.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/ui/{{name}}/{{name}}.module.scss',
                    templateFile: './templates/component/component.style.hbs',
                },
                {
                    type: 'add',
                    path: '../src/entities/{{sliceName}}/ui/{{name}}/{{name}}.stories.tsx',
                    templateFile: './templates/component/component.stories.hbs',
                },
            ];
        },
    });
};

module.exports = entitiesComponent;

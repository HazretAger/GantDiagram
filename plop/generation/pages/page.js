const page = (plop) => {
    plop.setGenerator('page', {
        description: 'Создает страницу',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название страницы?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/pages/{{name}}/ui/{{name}}.tsx',
                templateFile: './templates/page/page.hbs',
            },
            {
                type: 'add',
                path: '../src/pages/{{name}}/ui/{{name}}.async.tsx',
                templateFile: './templates/page/page.async.hbs',
            },
            {
                type: 'add',
                path: '../src/pages/{{name}}/ui/{{name}}.module.scss',
                templateFile: './templates/page/page.style.hbs',
            },
            {
                type: 'add',
                path: '../src/pages/{{name}}/index.ts',
                templateFile: './templates/page/index.hbs',
            },
        ],
    });
};

module.exports = page;

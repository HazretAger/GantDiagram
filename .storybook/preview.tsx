import type { Preview } from '@storybook/react';
import { QueryProvider } from '../src/app/providers/QueryProvider';
import ThemeProvider from '../src/app/providers/ThemeProviders/ui/ThemeProvider';
import { useTheme } from '../src/app/providers/ThemeProviders';
import '../src/app/globalStyles/styles.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Выбрать тему',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const { toggleTheme } = useTheme();
            toggleTheme(context.globals.theme);

            return (
                <QueryProvider>
                    <ThemeProvider>
                        <Story />
                    </ThemeProvider>
                </QueryProvider>
            );
        },
    ],
};

export default preview;

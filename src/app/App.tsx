import { RouterProvider } from '@/app/providers/RouterProvider';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { ThemeProvider } from '@/app/providers/ThemeProviders';
import '@/app/globalStyles/styles.scss';

function App() {
    return (
        <QueryProvider>
            <ThemeProvider>
                <RouterProvider />
            </ThemeProvider>
        </QueryProvider>
    );
}

export default App;

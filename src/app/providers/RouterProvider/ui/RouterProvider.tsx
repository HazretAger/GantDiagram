import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider as RouterProviderLib } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { LoginPage } from '@/pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SomeTestPage } from '@/pages/SomeTestPage';
import { PageLoader } from '@/shared/ui/PageLoader';
import { MainLayout } from '@/app/layouts/MainLayout';
import { useTheme } from '@/app/providers/ThemeProviders';

const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    { index: true, element: <MainPage /> },
                    { path: 'contact', element: <ContactPage /> },
                    { path: 'someTests', element: <SomeTestPage /> },
                ],
            },
        ],
    },
    { path: '*', element: <NotFoundPage /> },
]);

const RouterProvider = () => {
    const { theme } = useTheme();
    document.body.className = theme;

    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProviderLib router={router} />
        </Suspense>
    );
};

export default RouterProvider;

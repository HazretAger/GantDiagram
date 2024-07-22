import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface IQueryProvider {
    children: ReactNode;
}

const QueryProvider = (props: IQueryProvider) => {
    const { children } = props;
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;

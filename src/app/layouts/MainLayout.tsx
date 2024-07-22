import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { Layout } from '@/shared/ui/Layout';
import { SideMenu } from '@/widgets/SideMenu';

export const MainLayout = () => {
    return (
        <Layout //
            headerSlot={<Header />}
            pageSlot={<Outlet />}
            sideMenuSlot={<SideMenu />}
        />
    );
};

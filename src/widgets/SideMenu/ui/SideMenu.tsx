import { Menu } from '@/features/Menu';
import { Modal } from '@/shared/ui/Modal';
import { Portal } from '@/shared/ui/Portal';
import { ModalTheme } from '@/shared/ui/Modal/Modal';
import { useSideMenuStore } from '@/features/SideMenu';

export const SideMenu = () => {
    const isSideMenuActive = useSideMenuStore((state) => state.isSideMenuActive);
    const toggleSideMenu = useSideMenuStore((state) => state.toggleSideMenu);

    return (
        <Portal>
            <Modal isOpen={isSideMenuActive} onClose={toggleSideMenu} theme={ModalTheme.ON_SIDE}>
                <Menu />
            </Modal>
        </Portal>
    );
};

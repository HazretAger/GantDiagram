import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SideMenuSchema } from '../types/sideMenuSchema';

export const useSideMenuStore = create<SideMenuSchema>()(
    devtools((set, get) => ({
        isSideMenuActive: false,
        // toggleBurger: () =>
        //     set(state => {
        //         return { isBurgerActive: !state.isBurgerActive };
        //     }),
        toggleSideMenu: () => {
            set({ isSideMenuActive: !get().isSideMenuActive });
        },
    }))
);

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserSchema } from '../types/userSchema';

export const useUserStore = create<UserSchema>()(
    devtools((set) => ({
        authUser: undefined,
        setAuthUser: (user) => set({ authUser: user }),
    }))
);

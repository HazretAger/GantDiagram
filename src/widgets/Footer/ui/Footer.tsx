import { Wrapper } from '@/shared/ui/Wrapper';
import { classNames } from '@/shared/lib/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}
export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(cls.Header, {}, [className])}>
            <Wrapper>Подвал</Wrapper>
        </footer>
    );
};

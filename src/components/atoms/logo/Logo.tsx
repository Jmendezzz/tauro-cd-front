import logo from '@/assets/logo.png';
import './logo.scss';
import { Size } from '@/shared/models/size.model';

interface LogoProps {
    size?: Size;
}

export function Logo({ size = 'md' }: LogoProps) {
    return (
        <img src={logo} className={`logo logo--${size}`} alt="Logo" />
    )
}
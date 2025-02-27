import { useTranslation } from "react-i18next";
import "./hero-section.scss";

export function HeroSection() {
    const { t } = useTranslation();
    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="hero__content">
                <h1 className="hero__title">{t('Common.tauros')}</h1>
                <p className="hero__subtitle">
                    {t('Hero.subtitle')}
                </p>
                <a href="#about" className="hero__cta">Join Us</a>
            </div>
        </section>
    );
}

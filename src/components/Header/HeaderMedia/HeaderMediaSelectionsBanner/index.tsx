import bannerImage from '@/assets/images/header/header-selections-media-banner.png';

export const HeaderMediaSelectionsBanner = () => {
    return (
        <div className="header-media-modal-menu-banner">
            <div
                className="header-media-modal-menu-banner-image"
                style={{
                    backgroundImage: `url("${bannerImage.src}")`,
                }}
            />

            <div className="header-media-modal-menu-banner-text">
                <h4 className="header-media-modal-menu-banner-text__title">NEW: Подборки</h4>

                <p className="header-media-modal-menu-banner-text__subtitle">
                    Собрали лоты в коллекции, чтобы вы могли быстрее найти тот самый
                </p>
            </div>
        </div>
    );
};

import React from 'react';
import styles from './MapComponent.module.css';

const MapComponent = () => {
    return (
        <div className={styles["map-container"]}>
            <h2>Địa chỉ của chúng tôi</h2>
            <iframe
                className={styles["map-frame"]}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.751890135277!2d108.20973629999999!3d16.078359799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421846431fd0fd%3A0x780138ba60fa3aa6!2zMjk1IE5ndXnhu4VuIFThuqV0IFRow6BuaCwgVGhhbmggQsOsbmgsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDA!5e0!3m2!1svi!2s!4v1741599800641!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default MapComponent;

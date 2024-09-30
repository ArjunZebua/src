/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Heart, MessageSquare, BadgeInfo } from 'lucide-react';

const Clote = ({ gambar, merk, harga, warna, onHeartClick, onMessageClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInfoClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="clote">
      <img src={gambar} alt={merk} className="clote-image" />
      <h2 className="clote-merk">{merk}</h2>
      <p className="clote-harga">Harga: {harga}</p>
      <p className="clote-warna">Warna: {warna}</p>
      <div className="clote-actions">
        <Heart onClick={onHeartClick} className="clote-icon" />
        <MessageSquare onClick={onMessageClick} className="clote-icon" />
        <BadgeInfo onClick={handleInfoClick} className="clote-icon" />
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <img src={gambar} alt="" />
            <h3>Detail {merk}</h3>
            <p>Harga: {harga}</p>
            <p>Warna: {warna}</p>
            {/* Tambahkan detail lainnya jika perlu */}
            <button onClick={handleClosePopup}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clote;

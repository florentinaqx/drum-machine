import React, { useEffect } from 'react';

const DrumPad = ({ pad, handleDisplay }) => {
  const { key, id, src } = pad;

  const playSound = () => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    handleDisplay(id);
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === key) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id={id} className="drum-pad" onClick={playSound}>
      {key}
      <audio className="clip" id={key} src={src}></audio>
    </div>
  );
};

export default DrumPad;

import { useEffect } from 'react';
import '../styles/ProjectModal.css';

function ProjectModal({ isOpen, onClose, src, title, children }) {
  // Bloque le scroll derrière la modale
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`project-modal-overlay ${isOpen ? 'visible' : ''}`}
      onClick={onClose}
    >
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={onClose}>✕</button>

        {src ? (
          <iframe src={src} title={title}></iframe>
        ) : (
          <div className="project-modal-content">
            <h2>{title}</h2>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;

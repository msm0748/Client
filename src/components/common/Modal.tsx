'use client';

import { responsive } from '@/data/responsive';
import { useCallback, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({ maxWidth: responsive.tablet });

  const closeModal = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isTablet) {
      onClose();
    }

    console.log('언제 되니');
  }, [isTablet, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closeModal);
    } else {
      document.removeEventListener('mousedown', closeModal);
    }

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)]">
          <div ref={modalRef} className="absolute bottom-0 w-full bg-white rounded-lg shadow-lg p-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

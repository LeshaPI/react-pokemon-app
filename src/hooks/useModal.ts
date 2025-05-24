import { useState, useCallback } from 'react';

interface IUseModal<T> {
    isOpen: boolean;
    content: T | null;
    openModal: (content?: T) => void;
    closeModal: () => void;
}

const useModal = <T>(): IUseModal<T> => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<T | null>(null);
  
    const openModal = useCallback((content?: T) => {
        if (content) setContent(content);
        setIsOpen(true);
    }, []);
  
    const closeModal = useCallback(() => {
        setIsOpen(false);
        setContent(null);
    }, []);
  
    return {
        isOpen,
        content,
        openModal,
        closeModal,
    };
};  

export default useModal;

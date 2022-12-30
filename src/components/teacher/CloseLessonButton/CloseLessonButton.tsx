import * as React from 'react';
import { useState } from 'react';

import { Button } from '@ui/Button';
import { CloseLessonModal } from '@components/teacher/CloseLessonModal';

type CloseLessonButtonProps = {
  disabled: boolean
  onCloseLesson: () => Promise<boolean> | boolean
  className?: string
};

export const CloseLessonButton: React.FC<CloseLessonButtonProps> = ({
  disabled,
  onCloseLesson,
  className
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    if (onCloseLesson()) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Button
        className={className}
        disabled={disabled}
        onClick={() => setIsModalOpen(true)}
      >
        Закрыть класс
      </Button>
      <CloseLessonModal
        onConfirm={handleConfirm}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
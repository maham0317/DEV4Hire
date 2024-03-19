import React from 'react';
import { useTranslation } from 'react-i18next';

interface ActionButtonsProps {
  onAdd: () => void;
  onEdit: () => void;
  onReorder?: () => void; 
  showReorder?: boolean; 
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onAdd, onEdit, onReorder, showReorder }) => {
  const { t } = useTranslation();

  return (
    <div>
      <a href="#add-link" className="text-blue-700 font-semibold ml-3" onClick={onAdd}>
        {t('Add')}
      </a>
      <a href="#edit-link" className="text-blue-700 font-semibold ml-3" onClick={onEdit}>
        {t('Edit')}
      </a>

      {showReorder && (
        <a href="#reorder-link" className="text-blue-700 font-semibold ml-3" onClick={onReorder}>
          {t('Reorder')}
        </a>
      )}
    </div>
  );
};

export default ActionButtons;

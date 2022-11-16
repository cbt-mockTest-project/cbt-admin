import { Button, Popconfirm } from 'antd';
import React from 'react';

interface ConfirmButtonProps {
  popupTitle: string;
  onConfirm?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onButtonClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  open?: boolean;
  confirmLoading?: boolean;
  buttonLabel?: string;
  buttonClassName?: string;
  buttonType?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'primary'
    | 'default'
    | 'dashed'
    | undefined;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  open = false,
  onConfirm,
  onCancel,
  onButtonClick,
  confirmLoading,
  buttonClassName,
  popupTitle,
  buttonType = 'default',
  buttonLabel = 'button',
  disabled = false,
}) => {
  return (
    <Popconfirm
      title={popupTitle}
      open={open}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okButtonProps={{ loading: confirmLoading }}
    >
      <Button
        className={buttonClassName}
        type={buttonType}
        onClick={onButtonClick}
        disabled={disabled}
      >
        {buttonLabel}
      </Button>
    </Popconfirm>
  );
};

export default ConfirmButton;

import {
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';

export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  open: boolean;
};
const CreateModal: React.FC<Props> = (props) => {
  const { open, columns, onCancel, onSubmit } = props;
  return (
    <Modal footer={null} open={open} onCancel={() => onCancel?.()}>
      <ProTable type='form' columns={columns} onSubmit={async (value) => {
        onSubmit?.(value);
      }}
      />
    </Modal>
  );
};
export default CreateModal;
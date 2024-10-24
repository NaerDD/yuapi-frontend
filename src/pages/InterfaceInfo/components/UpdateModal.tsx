import {
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import { initial, values } from 'lodash';
import React from 'react';
export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;
export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<API.RuleListItem>;
};
const UpdateModal: React.FC<Props> = (props) => {
  const { values,visible,columns,onCancel,onSubmit} = props;
  return (
    <Modal visible = {visible} onCancel={() =>onCancel?.()}>
      <ProTable type='form' 
      columns={columns}
      form={{
        initialValues:values
      }} 
      onSubmit={async (value) => {
        onSubmit?.(value);
      }}
      />
    </Modal>
  )
}

export default UpdateModal;

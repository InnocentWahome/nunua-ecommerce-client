import React from 'react';
import { Form, Select, Button } from 'antd';

const makes = [{
  label: 'Option',
  value: 'option',
}]

const models = [{
  label: 'Option',
  value: 'option',
}]

const LoginForm = () => (
  <Form layout={"vertical"} autoComplete="off">
    <Form.Item
      name="make"
      label="Make"
      rules={[{ required: true, message: 'Missing make' }]}
    >
      <Select options={makes} />
    </Form.Item>

    <Form.Item
      name="model"
      label="Model"
      rules={[{ required: true, message: 'Missing model' }]}
    >
      <Select options={models} />
    </Form.Item>

    <Form.Item>
      <Button block type={"primary"}>Search</Button>
    </Form.Item>
  </Form>
);

export default LoginForm;

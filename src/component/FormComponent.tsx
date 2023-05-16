import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const FormComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = () => {
    if (username === "administrator'" && password !== '') {
      const link = "https://0acf008c033ce459802295a6000b001e.web-security-academy.net"; // Enlace que deseas abrir al hacer clic en Enviar
      window.open(link, "_blank");
    } else {
      message.error('Credenciales inválidas');
    }
  };

  const handleUsernameChange = (event:any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  return (
    <Form>
      <Form.Item
        label="Nombre de usuario"
        name="username"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa tu nombre de usuario',
          },
        ]}
      >
        <Input onChange={handleUsernameChange} />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa tu contraseña',
          },
        ]}
      >
        <Input.Password onChange={handlePasswordChange} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onFinish}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;

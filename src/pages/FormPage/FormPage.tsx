import { Form, Input, Select, type FormProps } from "antd";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect } from "react";

type FieldType = {
  country?: string;
  street?: string;
  subject?: string;
};

function FormPage() {
  const [form] = Form.useForm();

  const { tg } = useTelegram();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отпаравить данные",
    });
  }, [tg]);

  useEffect(() => {
    if (!form.getFieldValue("country") || !form.getFieldValue("street")) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [form, tg]);

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          subject: "physical",
        }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item<FieldType>
          label="Ваша страна"
          name="country"
          rules={[{ required: true, message: "Please input your country!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Ваша улица"
          name="street"
          rules={[{ required: true, message: "Please input your street!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Физ. Лицо / Юр. Лицо"
          name="subject"
          rules={[{ required: true, message: "Please input your street!" }]}
        >
          <Select
            options={[
              { value: "physical", label: "Физ. Лицо" },
              { value: "legal", label: "Юр. Лицо" },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormPage;

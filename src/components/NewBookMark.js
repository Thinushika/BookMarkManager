import { Button, Checkbox, Col, Form, Input, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";

function NewBookMark() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <Header
        style={{
          background: "linear-gradient(to right bottom, #430089, #f5222d)",
          padding: 30,
          textAlign: "center",
          height: 150,
        }}
      >
        <h2 style={{color: "#fff",}}> Bookmark App</h2>
      </Header>

      <Content>
        <Row align="center" style={{ padding: 10}}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ 
                  padding: 20,
              }}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </Row>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          backgroundColor: "#222",
          padding: 15,
          color: "#fff",
        }}
      >
        Created by Thinushi (TJ)
      </Footer>
    </Layout>
    //     <div>
    //         <Form
    //     name="basic"
    //     labelCol={{ span: 8 }}
    //     wrapperCol={{ span: 16 }}
    //     initialValues={{ remember: true }}
    //     onFinish={onFinish}
    //     onFinishFailed={onFinishFailed}
    //     // onSubmit={this.handleSubmit}
    //   >
    //     <Form.Item
    //       label="Title"
    //       name="title"
    //     //   onChange={this.handleInputChange}
    //     //   value={this.state.title}
    //     >
    //       <Input />
    //     </Form.Item>
    //     <Form.Item
    //       label="Url"
    //       name="url"
    //     //   onChange={this.handleInputChange}
    //     //   value={this.state.url}
    //     >
    //       <Input />
    //     </Form.Item>
    //     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //       <Button type="primary" htmlType="submit">
    //         Add Bookmark
    //       </Button>
    //       <Button type="primary" >
    //         Reset
    //       </Button>
    //     </Form.Item>
    //   </Form>
    //     </div>
  );
}

export default NewBookMark;

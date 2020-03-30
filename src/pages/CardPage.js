import React from 'react';
import {
  // Button,
  // Modal,
  // ModalHeader,
  // ModalFooter,
  // ModalBody
  Form, Label, Input,Row, Col, CardBody, Card
} from 'reactstrap';
class CardPage extends React.Component {
  render() {
    return (
      <Row>
      <Col xl={12} lg={12} md={12}>
        <Card>
          <CardBody>
            <Form>
              <Label for="exampleEmail"> Mã giao dịch</Label>
                  <Input
                    type="email"
                    name="email"
                  />
            </Form>
            <Form >
                <Label for="exampleSelect">Tài khoản nguồn</Label>
                <Input type="select" name="select" />
            </Form>
            <Form >
                <Label for="exampleSelect">Tài khoản đích</Label>
                <Input type="select" name="select" />
            </Form>
            
            <Form>
                <Label for="exampleEmail">Số tiền</Label>
                  <Input
                    type="email"
                    name="email"
                  />
            </Form>
          </CardBody>
        </Card>
      </Col>
      
    </Row>
    );
  }
}
export default CardPage;
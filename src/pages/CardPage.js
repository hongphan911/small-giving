import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Label,
  Input,
  Row,
} from 'reactstrap';
class CardPage extends React.Component {
  render() {
    return (
      <Row>
      <Col>
        <Card>
          <CardBody>
            <Form>
              <Label for="exampleEmail"> Mã tài khoản</Label>
                  <Input
                    type="email"
                    name="email"
                  />
            </Form>
            <Form>
                <Label for="exampleEmail">Tên tài khoản </Label>
                  <Input
                    type="email"
                    name="email"
                  />
            </Form>
          </CardBody>
        </Card>
        <Button color="danger" pill className="px-4 my-3 can-click">
                      Lưu
                      </Button>
      </Col>
     
    </Row>
    );
  }
}
export default CardPage;
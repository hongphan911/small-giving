import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
class WidgetPage extends React.Component {
  render() {
    return (
      <Row>
      <Col xl={6} lg={12} md={12}>
        <Card>
          <CardBody>
            <Form>
              <FormGroup >
              <Label for="exampleEmail"> Tên khảo sát</Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              <FormGroup >
              <Label for="exampleSelect">Mã khảo sát</Label>
              <Input type="select" name="select" />
              </FormGroup>
              <FormGroup >
                <Label for="exampleEmail"> Người làm khảo sát</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6} lg={12} md={12}>
        <Card>
          <CardBody>
            <Form>
            <FormGroup>
                  <Label for="exampleDate">Thời gian bắt đầu</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
              <FormGroup>
                  <Label for="exampleDate">Thời gian kết thúc</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Số tiền cho khảo sát </Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col xl={12}>
      <Form>
          <Label for="exampleUrl">Link khảo sát</Label>
            <Input type="url" name="url" />
      </Form>
      </Col>
      
      <Button color="danger" pill className="px-4 my-3 can-click">
          Lưu
      </Button>
    </Row>
    );
  }
}
export default WidgetPage;
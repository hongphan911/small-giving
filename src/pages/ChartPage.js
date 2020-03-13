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
class ChartPage extends React.Component {
  render() {
    return (
      <Row>
      <Col xl={6} lg={12} md={12}>
        <Card>
          <CardBody>
            <Form>
              <FormGroup >
              <Label for="exampleEmail"> Mã tài khoản</Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              <FormGroup >
              <Label for="exampleSelect">Nhóm người dùng</Label>
              <Input type="select" name="select" />
              </FormGroup>
              <FormGroup >
                <Label for="exampleEmail"> Số điện thoại</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                />
              </FormGroup>
              <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="exampleNumber">Số tài khoản</Label>
                <Input
                  type="number"
                  name="number"
                  id="exampleNumber"
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
                <Label for="exampleEmail">Tên tài khoản </Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="exampleDate">Ngày sinh</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Email </Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="exampleSelect">Giới tính</Label>
                  <Input type="select" name="select">
                    <option>Nam </option>
                    <option>Nữ</option>
                  </Input>
                </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Button color="danger" pill className="px-4 my-3 can-click">
                      Lưu
                      </Button>
    </Row>
    );
  }
}
export default ChartPage;
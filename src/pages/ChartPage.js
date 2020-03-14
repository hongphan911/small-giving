import React from 'react';
import {
   Form, Label, Input, Button, FormGroup,Card, CardBody, Col, Row
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
              <Label for="exampleEmail"> Mã họat động</Label>
                  <Input type="email" name="email"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Tên hoạt động</Label>
                <Input type="email" name="email" />
              </FormGroup>
              <FormGroup >
              <Label for="exampleEmail"> Địa chỉ</Label>
                  <Input  type="email"  name="email"/>
              </FormGroup>
              <FormGroup>
                  <Label for="exampleImage"> Hình ảnh</Label>
                  <Input type="file" name="image" />
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
                  <Label for="exampleDate">Ngày bắt đầu</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Ngày kết thúc</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
                <FormGroup >
              <Label for="exampleEmail"> Tổng tiền</Label>
                  <Input  type="email"  name="email"/>
              </FormGroup>
              <FormGroup>
                  <Label for="exampleVideo"> Video</Label>
                  <Input type="file" name="video" />
                </FormGroup>
            </Form>
          </CardBody>
        </Card>
        </Col>
        <Col xl={12}>
          <Form>
              <Label for="exampleText">Nội dung</Label>
                <Input type="textarea" name="text" />
          </Form>
          </Col>
          <Button color="danger" pill className="px-4 my-3 can-click">
            Lưu
          </Button>
        </Row>
    );
  }
}
export default ChartPage;
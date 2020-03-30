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
      <Card>
        <CardBody>

        
      <Row>
        
      <Col xl={6} lg={12} md={12}>
        
            <Form>
              <FormGroup >
              <Label for="exampleEmail">Mã khảo sát</Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="exampleDate">Thời gian bắt đầu</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
              
              <FormGroup >
                <Label for="exampleEmail"> Thuộc nhà tài trợ</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Số tiền cho mỗi lượt khảo sát </Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              
            </Form>
          
      </Col>

      <Col xl={6} lg={12} md={12}>
        
            <Form>
            <FormGroup >
              <Label for="exampleText">Tên khảo sát</Label>
              <Input type="text" name="text" />
              </FormGroup>
            
              <FormGroup>
                  <Label for="exampleDate">Thời gian kết thúc</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                  />
                </FormGroup>
                <FormGroup >
                <Label for="exampleUrl">Link khảo sát</Label>
                <Input type="url" name="url" />
              </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Tổng tiền khảo sát </Label>
                  <Input
                    type="email"
                    name="email"
                  />
              </FormGroup>
              
            </Form>
          
      </Col>
    </Row>
    </CardBody>
      </Card>
    );
  }
}
export default WidgetPage;
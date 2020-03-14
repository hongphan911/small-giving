import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Form, Label, Input, Button} from 'reactstrap';
const tableTypes = ['hover'];

class TypographyPage extends React.Component {
  render() {
    return (
      <Page
        className="TypographyPage"
        title="Nguồn tài trợ"
        breadcrumbs={[{name:'báo cáo'},{ name: 'nguồn tài trợ', active: true }]}
      >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
                    <CardBody>
                      <Row>
                    <Col xl={6} lg={12} md={12}>
                    <Form>
                  <Label for="exampleDate">Từ ngày</Label>
                  <Input type="date"name="date"/> 
                  </Form>
                  </Col>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                  <Label for="exampleDate">Đến ngày</Label>
                <Input type="date" name="date"/>
                  </Form>
                  </Col>
                  </Row>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                      <tr className="table-danger">
                        <th>STT</th>
                        <th>Nhà tài trợ</th>
                        <th> Tên khảo sát</th>
                        <th>Số tiền khảo sát</th> 
                      </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>120000</td> 
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>100000</td> 
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>50000</td> 
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>60000</td> 
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>60000</td> 
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>7000</td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>200000</td>  
                          </tr>
                        </tbody>
                      </Table>
                      <Button outline color="danger" size="lg">
                  Xuất ra Excel
                </Button>
                    </CardBody>
                  </Card>
                  </Col>
                  </Row>
      ))}
      </Page>
    );
  }
}
export default TypographyPage;
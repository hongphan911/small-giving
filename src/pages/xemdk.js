import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table} from 'reactstrap';

const tableTypes = ['hover'];


class ChartPage extends React.Component {
  render() {
    return (
      <Page
        // className="ChartPage"
        // title="Quản trị góp ý"
        // breadcrumbs={[{ name: 'quản trị góp ý', active: true }]}
      >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
                    <CardBody>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger">
                          <th>STT</th>
                            <th>Mã đăng kí</th>
                            <th>Tên người tham gia</th>
                            <th> SĐT</th> 
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>6384</td>
                            <td>Mark</td>
                            <td>094093243</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>5883</td>
                            <td>Jacob</td>
                            <td>048897580</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>849</td>
                            <td>Larry</td>
                            <td>048584533</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>7822</td>
                            <td>Jacob</td>
                            <td>08493598</td> 
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>728</td>
                            <td>Otto</td>
                            <td>085837859</td> 
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>378</td>
                            <td>Larry</td>
                            <td>094835983</td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>7382</td>
                            <td>Wendy</td>
                            <td>08984983589</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                  </Col>
                  </Row>
      ))}
      </Page>
    );
  }
}
export default ChartPage;
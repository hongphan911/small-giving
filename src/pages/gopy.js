import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table} from 'reactstrap';

const tableTypes = ['hover'];


class ProgressPage extends React.Component {
  render() {
    return (
      <Page
        className="ProgressPage"
        title="Quản trị góp ý"
        breadcrumbs={[{ name: 'quản trị góp ý', active: true }]}
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
                            <th>Tên người dùng</th>
                            <th> SĐT</th>
                            <th>Email</th>
                            <th>Nội dung</th> 
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>094093243</td>
                            <td>tuhr@gmail.com</td> 
                            <td>ytuhtiregjkngkjgnkjer</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>048897580</td>
                            <td>tiwr@yahoo.com</td> 
                            <td>yufieojvkldnvkjdgirehgrhg</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>048584533</td>
                            <td>knv@gmel.com</td> 
                            <td>cbkjdfkjehfewhgiweigrg</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>08493598</td> 
                            <td>ytie@gmail.com</td> 
                            <td>cgshfekfekjherjghrj</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Otto</td>
                            <td>085837859</td> 
                            <td>@facebook</td> 
                            <td>kglkffbfghjtyflg</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>094835983</td>
                            <td>@twitter</td>
                            <td>jfidsjoijweiogjeoigreoigj</td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>08984983589</td>
                            <td>@facebook</td>
                            <td>hdhfkjgjkngjgrjj</td> 
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
export default ProgressPage;
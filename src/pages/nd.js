import Page from 'components/Page';
import ChartPage from 'pages/ChartPage';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];

class ButtonPage extends React.Component {
  state = {
    show: false,
  };
  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const externalCloseBtn = (
      <Badge
        className="close can-click"
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem',
        }}
        onClick={this.toggle}>
        &times;
      </Badge>
    );
    return (
      <Page
        className="ButtonPage"
        title="Người dùng"
        breadcrumbs={[{name:'quản trị tài khoản'},{ name: 'người dùng', active: true }]}
      >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
                    <CardBody>
                      <Badge color="danger" pill className=" mb-3 p-2 can-click" onClick={this.toggle}>
                      + Thêm mới
                      </Badge>
                      <Modal
                  isOpen={this.state.show}
                  toggle={this.toggle}
                  size="lg"
                  backdrop="static"
                  backdropClassName="modal-backdrop-light"
                  external={externalCloseBtn}
                  centered>
                  <ModalBody>
                  <ChartPage/>
                  </ModalBody></Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger">
                            <th>STT</th>
                            <th>Mã TK</th>
                            <th>Tên TK</th>
                            <th>SĐT</th>
                            <th>Mật khẩu</th>
                            <th> Số dư tài khoản</th>
                            <th>Email</th>
                            <th>Tác vụ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>094093243</td>
                            <td>fkjdnfkn</td> 
                            <td>120000</td> 
                            <td>tuhr@gmail.com</td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>048897580</td>
                            <td>hfiudhsfdn</td> 
                            <td>100000</td> 
                            <td>tiwr@yahoo.com</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>048584533</td>
                            <td>hgfjjyjy</td> 
                            <td>50000</td> 
                            <td>rjflkjfjeklejk</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>08493598</td> 
                            <td>60000</td> 
                            <td>ytie@gmail.com</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>085837859</td> 
                            <td>fhgjrlkr</td> 
                            <td>kglkflg</td> <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td></td> <td></td> <td></td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              </td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>@facebook</td>
                            <td></td> <td></td> <td></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                            <MdDelete className="can-click" size="1.5em"/>
                            </td>
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
export default ButtonPage;
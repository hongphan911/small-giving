import Page from 'components/Page';
import React from 'react';
import Nguoidungthem from 'pages/ndthem';
import Nguoidungsua from 'pages/ndsua';
import Nguoidungxoa from 'pages/ndxoa';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';


const tableTypes = ['hover'];
class nd extends React.Component {
  state = {
    modal_nested_parent: false,
    modal_nested: false,
    modal_nested_sua:false,
    modal_nested_xoa: false,
  };
  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };
  render() {
    return (
      <Page
        className="nd"
        title="Người dùng"
        breadcrumbs={[{name:'quản trị tài khoản'},{ name: 'người dùng', active: true }]}
      >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
                    <CardBody>
                      <Badge color="danger" pill className=" mb-3 p-2 can-click" onClick={this.toggle('nested_parent')}>
                      + Thêm mới
                      </Badge>
                      <Modal
                  isOpen={this.state.modal_nested_parent}
                  toggle={this.toggle('nested_parent')}
                  size="lg"
                  className={this.props.className}>
                  <ModalHeader className="text-danger" toggle={this.toggle('nested_parent')}>
                   Thêm mới người dùng
                  </ModalHeader>
                  <ModalBody>
                    <Nguoidungthem/>
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger">
                            <th>STT</th>
                            
                            <th>Tên người dùng</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th>Mật khẩu</th>
                            <th> Số dư TK</th>
                            <th> Huy hiệu</th>
                            <th>Tác vụ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            
                            <td>Otto</td>
                            <td>094093243</td>
                            <td>tuhr@gmail.com</td>
                            <td>fkjdnfkn</td> 
                            <td>120000</td> 
                            <td>sát thủ áo đen</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_sua}
                                  toggle={this.toggle('nested_sua')}
                                  size="lg"
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_sua')}>
                                      Sửa thông tin người dùng
                                  </ModalHeader>
                                  <ModalBody>
                                  <Nguoidungsua/>
                                  </ModalBody>
                                  </Modal>   
                                  <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_xoa}
                                  toggle={this.toggle('nested_xoa')}
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_xoa')}>
                                      Xóa người dùng
                                  </ModalHeader>
                                  <ModalBody>
                                  <Nguoidungxoa/>
                                  </ModalBody>
                                  </Modal>   
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            
                            <td>Thornton</td>
                            <td>048897580</td>
                            <td>tiwr@yahoo.com</td>
                            <td>hfiudhsfdn</td> 
                            <td>100000</td>                            
                            <td>sát thủ áo đen</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            
                            <td>the Bird</td>
                            <td>048584533</td>
                            <td>hgfjjyjy</td> 
                            <td>50000</td> 
                            <td>rjflkjfjeklejk</td> 
                            <td>rjflkjfjeklejk</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>08493598</td> 
                            <td>ytie@gmail.com</td>
                            <td>60000</td> 
                            <td>rjflkjfjeklejk</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>085837859</td> 
                            <td>fhgjrlkr</td> 
                            <td>kglkflg</td> 
                            <td>kglkflg</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td></td> 
                            <td></td> 
                            <td></td> 
                            <td>ccccc</td>
                            <td>
                              <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              </td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            
                            <td>the Magic</td>
                            <td>@facebook</td>
                            <td></td> 
                            <td></td> 
                            <td></td> 
                            <td>sss</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                            <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
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
export default nd;
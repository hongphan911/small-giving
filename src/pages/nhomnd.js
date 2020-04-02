import Page from 'components/Page';
import React from 'react';
import Nhomndthem from 'pages/nhomndthem'
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
import Nhomndsua from 'pages/nhomndsua';
import Nhomndxoa from 'pages/nhomndxoa';
const tableTypes = ['hover'];
class nhomnd extends React.Component {
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
        className="ButtonPage"
        title="Nhóm người dùng"
        breadcrumbs={[{name:'quản trị tài khoản'}, { name: 'nhóm người dùng', active: true }]}
      >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
                    <CardBody>
                      <Badge color="danger" pill className=" mb-3 p-2 can-click " onClick={this.toggle('nested_parent')}>
                      + Thêm mới
                      </Badge>
                      <Modal
                        isOpen={this.state.modal_nested_parent}
                        toggle={this.toggle('nested_parent')}
                        className={this.props.className}>
                  <ModalHeader className="text-danger" toggle={this.toggle('nested_parent')}>
                   Thêm mới nhóm người dùng
                  </ModalHeader>
                  <ModalBody>
                    <Nhomndthem/>
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger">
                            <th>STT</th>
                            <th>Mã nhóm</th>
                            <th>Tên nhóm</th>
                            <th>Tác vụ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_sua}
                                  toggle={this.toggle('nested_sua')}
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_sua')}>
                                      Sửa thông tin nhóm người dùng
                                  </ModalHeader>
                                  <ModalBody>
                                  <Nhomndsua/>
                                  </ModalBody>
                                  </Modal>   
                                  <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_xoa}
                                  toggle={this.toggle('nested_xoa')}
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_xoa')}>
                                      Xóa nhóm người dùng
                                  </ModalHeader>
                                  <ModalBody>
                                 <Nhomndxoa/>
                                  </ModalBody> 
                                  </Modal>   
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                            <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                              <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              </td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
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
export default nhomnd;
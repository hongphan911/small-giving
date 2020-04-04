import Page from 'components/Page';
import Diemdanhthem from 'pages/diemdanhthem'
import Diemdanhsua from 'pages/diemdanhsua'
import Diemdanhxoa from 'pages/diemdanhxoa'
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
class FormPage extends React.Component {
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
        className="FormPage"
        title="Tạo điểm danh"
        breadcrumbs={[{name:'quản trị hoạt động tài trợ'},{ name: 'Tạo điểm danh', active: true }]}
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
                          Thêm mới tài khoản điểm danh
                          </ModalHeader>
                          <ModalBody>
                              <Diemdanhthem/>
                          </ModalBody>
                          
                          </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger">
                            <th>STT</th>
                            <th>Tên tài khoản</th>
                            <th>Số dư</th>
                            <th>Số người tham gia</th>
                            <th>Tác vụ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Điểm danh tháng 1</td>
                            <td>14</td>
                            <td>12</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_sua}
                                  toggle={this.toggle('nested_sua')}
                                  size="lg"
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_sua')}>
                                      Sửa tài khoản điểm danh
                                  </ModalHeader>
                                  <ModalBody>
                                  <Diemdanhsua/>
                                  </ModalBody>
                                  </Modal>   
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_xoa}
                                  toggle={this.toggle('nested_xoa')}
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_xoa')}>
                                      Xóa tài khoản điểm danh
                                  </ModalHeader>
                                  <ModalBody>
                                  <Diemdanhxoa/>
                                  </ModalBody>
                                  </Modal>   
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Điểm danh tháng 2</td>
                            <td>22</td>
                            <td>33</td> 
                            
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                            <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Điểm danh tháng 3</td>
                            <td>16</td>
                            <td>44</td> 
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
export default FormPage;
import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, Form, Label, Input, Button, ModalHeader} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
class nhomnd extends React.Component {
  state = {
    modal_nested_parent: false,
    modal_nested: false,
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
                  <Row>
                    
                    <Col md={12}>
                      <Card>
                        <CardBody>
                          <Form>
                            <Label for="exampleEmail"> Mã nhóm</Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                          </Form>
                          <Form>
                              <Label for="exampleEmail">Tên nhóm </Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                          </Form>
                        </CardBody>
                      </Card>
                      
                    </Col>
                    
                    <Button color="danger" pill className="px-4 my-3 can-click" onClick={this.toggle('nested_parent')}>
                            Lưu
                      </Button>

                    
                      
                  </Row>
                  
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
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              </td>
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
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
export default nhomnd;
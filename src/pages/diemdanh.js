import Page from 'components/Page';

import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader, Form, Label, Input, Button, FormGroup} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
const getRandomInt = () => {
  return Math.floor(Math.random() * (100 - 20) + 20);
};
const getRandomMoney = () => {
  return Math.floor(Math.random() * 200000 );
};

class FormPage extends React.Component {
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
                  <Row>
                    <Col xl={12} lg={12} md={12}>
                      <Card>
                        <CardBody>
                          <Form>
                            <FormGroup >
                            <Label for="exampleText"> Mã tài khoản</Label>
                                <Input
                                  type="text"
                                  name="text"
                                />
                            </FormGroup>
                            <FormGroup >
                            <Label for="exampleText">Tên tài khoản</Label>
                            <Input type="text" name="text" />
                            </FormGroup>
                            <FormGroup >
                              <Label for="exampleText"> Số tiền cho mỗi lượt điểm danh</Label>
                              <Input
                                type="text"
                                name="text"
                                id="exampleText"
                              />
                            </FormGroup>
                        
                            
                              
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
                              <FaEdit className="can-click " size="1.5em" />
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Điểm danh tháng 2</td>
                            <td>22</td>
                            <td>33</td> 
                            
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Điểm danh tháng 3</td>
                            <td>16</td>
                            <td>44</td> 
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
export default FormPage;
import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader, Form, Label, Input, Button} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
class BadgePage extends React.Component {
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
        className="BadgePage"
        title="Chuyển tiền"
        breadcrumbs={[{name:'quản trị luồng quyên góp'},{ name: 'chuyển tiền', active: true }]}
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
                   Thêm mới
                  </ModalHeader>
                  <ModalBody>
                  <Row>
                    <Col xl={6} lg={12} md={12}>
                      <Card>
                        <CardBody>
                          <Form>
                            <Label for="exampleEmail"> Mã giao dịch</Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                          </Form>
                          <Form>
                              <Label for="exampleEmail">Số tiền</Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xl={6} lg={12} md={12}>
                      <Card>
                        <CardBody>
                          <Form>
                              <Label for="exampleEmail">Tài khoản nguồn</Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                          </Form>
                          <Form>
                              <Label for="exampleEmail"> Tài khoản đích</Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                    <Button color="danger" pill className="px-4 my-3" onClick={this.toggle('nested_parent')}>
                      Lưu
                    </Button>
                  </Row>
                  </ModalBody></Modal>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                      <tr className="table-danger">
                        <th>STT</th>
                        <th>Mã GD</th>
                        <th> Tài khoản nguồn</th>
                        <th>Tài khoản đích</th> 
                        <th>Thời gian</th>
                        <th>Số tiền</th> 
                        <th>Tác vụ</th> 
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Bind</td>
                            <td>12/5/2020</td> 
                            <td>120000</td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Ding</td>
                            <td>26/2/2020</td> 
                            <td>100000</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>MEng</td> 
                            <td>31/1/2020</td>
                            <td>50000</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Wing</td>
                            <td>19/9/2020</td>
                            <td>60000</td> 
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
                            <td>20/2/2020</td>
                            <td>60000</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>17/3/2019</td>
                            <td>7000</td>
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
                            <td>25/3/2010</td>
                            <td>200000</td>  
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
export default BadgePage;
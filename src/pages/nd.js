import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader, Form, Label, Input, Button, FormGroup} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];

class nd extends React.Component {
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
                  <Card>
                        <CardBody>
                  <Row>
                    <Col xl={6} lg={12} md={12}>
                      
                          <Form>
                            <FormGroup >
                            <Label for="exampleText"> Mã người dùng</Label>
                                <Input
                                  type="text"
                                  name="text"
                                />
                            </FormGroup>
                            <FormGroup >
                            <Label for="exampleSelect">Nhóm người dùng</Label>
                            <Input type="select" name="select" />
                            </FormGroup>
                            <FormGroup >
                              <Label for="exampleText"> Số điện thoại</Label>
                              <Input
                                type="text"
                                name="text"
                                id="exampleText"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleEmail">Email </Label>
                                <Input
                                  type="email"
                                  name="email"
                                />
                            </FormGroup>
                            
                              
                          </Form>
                        
                    </Col>

                    <Col xl={6} lg={12} md={12}>
                      
                          <Form>
                          <FormGroup >
                              <Label for="exampleText"> Họ tên</Label>
                              <Input
                                type="text"
                                name="text"
                                id="exampleText"
                              />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">Ngày sinh</Label>
                                <Input
                                  type="date"
                                  name="date"
                                  id="exampleDate"
                                />
                              </FormGroup>
                              
                            <FormGroup>
                                <Label for="exampleSelect">Giới tính</Label>
                                <Input type="select" name="select">
                                  <option>Nam </option>
                                  <option>Nữ</option>
                                </Input>
                              </FormGroup>
                              <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                  type="password"
                                  name="password"
                                />
                              </FormGroup>
                              
                          </Form>
                        
                      </Col>
                        
                      </Row>
                      </CardBody>
                      </Card>
                  </ModalBody>
                  <Button color="danger" pill className="px-4 my-3 can-click" onClick={this.toggle('nested_parent')}>
                          Lưu
                        </Button>
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
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
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
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
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
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
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
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
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
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
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
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
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
export default nd;
import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader, Form, Label, Input, Button} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];

class ModalPage extends React.Component {
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
        className="ModalPage"
        title="Nạp tiền"
        breadcrumbs={[{name:'quản trị luồng quyên góp'},{ name: 'nạp tiền', active: true }]}
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
                            Thêm mới giao dịch nạp tiền
                  </ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col xl={12} lg={12} md={12}>
                        <Card>
                          <CardBody>
                            <Form>
                              <Label for="exampleEmail"> Mã giao dịch nạp tiền</Label>
                                  <Input
                                    type="email"
                                    name="email"
                                  />
                            </Form>
                            <Form>
                            <Label for="exampleSelect">Tài khoản nạp</Label>
                            <Input type="select" name="select" />
                            </Form>
                            <Form>
                              <Label for="exampleEmail">Số tiền</Label>
                                <Input
                                    type="email"
                                    name="email"
                                  />
                            </Form>
                            <Form>
                                <Label for="exampleEmail">Nội dung</Label>
                                  <Input
                                    type="email"
                                    name="email"
                                  />
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                      
                    <Button color="danger" pill className="px-4 my-3" onClick={this.toggle('nested_parent')}>
                      Nạp
                    </Button>
                  </Row>
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                      <tr className="table-danger">
                        <th>STT</th>
                        <th>Mã giao dịch</th>
                        <th>Tài khoản nạp</th>
                        <th>Thời gian</th> 
                        <th>Số tiền</th> 
                       
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>13/4/2010</td> 
                            <td>120000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>28/6/2020</td> 
                            <td>100000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>14/8/2019</td> 
                            <td>50000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>4/7/2020</td>
                            <td>60000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>4/7/2019</td>
                            <td>60000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>7/3/2020</td>
                            <td>7000</td>
                            
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>12/9/2010</td>
                            <td>200000</td>  
                            
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
export default ModalPage;
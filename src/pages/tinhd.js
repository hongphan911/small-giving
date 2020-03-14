import Page from 'components/Page';
// import ChartPage from 'pages/ChartPage';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, Button, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
import {GoChecklist, GoPin} from 'react-icons/go';
const tableTypes = ['hover'];
const getRandomInt = () => {
  return Math.floor(Math.random() * (100 - 20) + 20);
};
const getRandomMoney = () => {
  return Math.floor(Math.random() * 200000 );
};
class InputGroupPage extends React.Component {
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
        className="InputGroupPage"
        title="Tin hoạt động"
        breadcrumbs={[{name:'quản trị hoạt động tình nguyện'},{ name: 'Tin hoạt động', active: true }]}
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
                            <FormGroup >
                            <Label for="exampleText"> Mã tin tức</Label>
                                <Input type="text" name="text"/>
                            </FormGroup>
                            <FormGroup >
                            <Label for="exampleSelect">Thuộc hoạt động</Label>
                            <Input type="select" name="select" />
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleText">Tên tin</Label>
                              <Input type="text" name="text" />
                            </FormGroup>
                            
                            
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col xl={6} lg={12} md={12}>
                      <Card>
                        <CardBody>
                          <Form>
                          <FormGroup>
                                <Label for="exampleImage"> Hình ảnh</Label>
                                <Input type="file" name="image" />
                              </FormGroup>
                              <FormGroup>
                                <Label for="exampleVideo"> Video</Label>
                                <Input type="file" name="video" />
                              </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">Thời gian tạo tin</Label>
                                <Input
                                  type="date"
                                  name="date"
                                  id="exampleDate"
                                />
                              </FormGroup>
                            
                              <FormGroup >
                            <Label for="exampleText"> Tiêu đề thông báo</Label>
                                <Input  type="text"  name="text"/>
                            </FormGroup>
                          </Form>
                        </CardBody>
                      </Card>
                      </Col>
                      <Col xl={12}>
                        <Form>
                            <Label for="exampleText">Nội dung</Label>
                              <Input type="textarea" name="text" />
                        </Form>
                        </Col>
                        <Button color="danger" pill className="px-4 my-3 can-click" onClick={this.toggle('nested_parent')}>
                          Lưu
                        </Button>
                      </Row>                  
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger ">
                            <th> STT</th>
                            <th> Mã Tin</th>
                            <th> Tên tin</th> 
                            <th> Nội dung</th>
                            <th> Tác vụ</th>  
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">1</th>
                            <td>ffđf</td>
                            <td>Otto</td>
                            
                            <td> </td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Mkjfe</td>
                              
                            <td>{getRandomInt()}</td> 
                            
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            
                            <td>{getRandomInt()}</td> 
                            
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            
                            <td>{getRandomInt()}</td> 
                           
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            
                            <td>{getRandomInt()}</td> 
                           
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                              
                            <td>{getRandomInt()}</td> 
                            
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
                              </td>
                          </tr>
                        <tr>
                        <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            
                            <td>{getRandomInt()}</td> 
                            
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                            <MdDelete className="can-click" size="1.5em"/>
                            <GoChecklist className="can-click" size="1.5em"/>
                              <GoPin className="can-click" size="1.5em"/>
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
export default InputGroupPage;
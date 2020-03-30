import Page from 'components/Page';
// import ChartPage from 'pages/ChartPage';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, Button, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
import {GoChecklist, GoPin} from 'react-icons/go';
const tableTypes = ['hover'];
class tinhd extends React.Component {
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
        className="tinhd"
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
                   Thêm mới tin tức
                  </ModalHeader>
                  <ModalBody>
                  <Card>
                        <CardBody>
                  <Row>
                    <Col xl={6} lg={12} md={12}>
                      
                          <Form>
                            <FormGroup >
                            <Label for="exampleText"> Mã tin tức</Label>
                                <Input type="text" name="text"/>
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleText">Tên tin</Label>
                              <Input type="text" name="text" />
                            </FormGroup>
                            <FormGroup >
                            <Label for="exampleSelect">Thuộc hoạt động</Label>
                            <Input type="select" name="select" />
                            </FormGroup>
                            
                          
                          </Form>
                        
                    </Col>

                    <Col xl={6} lg={12} md={12}>
                      
                          <Form>
                          
                              
                            <FormGroup>
                                <Label for="exampleImage"> Hình ảnh / Video</Label>
                                <Input type="file" name="image" />
                              </FormGroup>
                              
                              <FormGroup >
                            <Label for="exampleText"> Tiêu đề thông báo</Label>
                                <Input  type="text"  name="text"/>
                            </FormGroup>
                            <FormGroup >
                            <Label for="exampleSelect">Đối tượng nhận thông báo</Label>
                            <Input type="select" name="select" />
                            </FormGroup>
                          </Form>
                        
                      </Col>
                      <Col xl={12}>
                        <Form>
                            <Label for="exampleText">Nội dung</Label>
                              <Input type="textarea" name="text" />
                        </Form>
                        </Col>
                        
                      </Row> 
                      </CardBody>
                      </Card>                 
                  </ModalBody>
                  <Button color="danger" pill className="px-4 my-3 can-click" onClick={this.toggle('nested_parent')}>
                          Đăng tải
                        </Button>
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
                            <td>fdfkmelke </td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Mkjfe</td>
                            <td></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>djiojnkmvef</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>cndkndkfewokfmf</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>fedjgkewmgew</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>dfheiunwelkgm</td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                              </td>
                          </tr>
                        <tr>
                        <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>cbdijgnewwigeoig</td> 
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
export default tinhd;
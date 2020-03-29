import Page from 'components/Page';
import ChartPage from 'pages/xemdk';
import React from 'react';
import Hoatdongthem from 'pages/hoatdongthem'
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
    modal_nested_xem: false,
    modal_nested:false,
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
        title="Danh sách hoạt động"
        breadcrumbs={[{name:'quản trị hoạt động tình nguyện'},{ name: 'danh sách hoat động', active: true }]}
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
                   Thêm mới hoạt động
                  </ModalHeader>
                  <ModalBody>
                      <Hoatdongthem/>  
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger ">
                            <th> STT</th>
                            
                            <th> Tên hoạt động</th>
                            <th> Bắt đầu</th> 
                            <th> Kết thúc</th> 
                            <th> Đã quyên góp</th>
                            <th> Lượt quyên góp</th> 
                            <th> Xem đăng kí</th> 
                            <th> Tác vụ</th>  
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">1</th>
                            
                            <td>Otto</td>
                            <td>12/2/2020</td>
                            <td>12/2/2202</td> 
                            
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td> 
                            <Button color="link" className="can-click" onClick={this.toggle('nested_xem')}>Xem</Button>
                            <Modal
                            isOpen={this.state.modal_nested_xem}
                            toggle={this.toggle('nested_xem')}
                            size="lg"
                            className={this.props.className}>
                              <ModalHeader className="text-danger" toggle={this.toggle('nested_xem')}>
                                Xem đăng kí
                                </ModalHeader>
                              <ModalBody>
                                <ChartPage/>
                              </ModalBody>
                              </Modal>
                            </td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                            
                            <td>Mkjfe</td>
                            <td>16/5/2019</td> 
                            <td>24/3/2020</td>
                            
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomInt()}</td> 
                            <td>
                              <Button color="link" onClick={this.toggle('nested_xem')}>Xem</Button>
                            </td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                            
                            <td>the Bird</td>
                            <td>23/7/2020</td> 
                            <td>13/8/2020</td>
                            
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td>
                              <Button color="link" onClick={this.toggle('nested_xem')}>Xem</Button>
                            </td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">4</th>
                            
                            <td>Thornton</td>
                            <td>5/6/2020</td> 
                            <td>21/6/2020</td>
                              
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td>
                              <Button color="link" onClick={this.toggle('nested_xem')}>Xem</Button>
                            </td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                            
                            <td>Otto</td>
                            <td>11/3/2020</td> 
                            <td>1/4/2020</td>
                            
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td>
                              <Button color="link" onClick={this.toggle('nested_xem')}>Xem</Button>
                            </td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">6</th>
                            
                            <td>the Bird</td>
                            <td>24/12/2019</td> 
                            <td>2/1/2020</td>
                             
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomInt()}</td> 
                            <td>
                              <Button color="link" onClick={this.toggle('nested_xem')}>Xem</Button>
                            </td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              
                              </td>
                          </tr>
                        <tr>
                        <th scope="row">7</th>
                            
                            <td>the Magic</td>
                            <td>18/2/2020</td> 
                            <td>23/2/2020</td>
                             
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomInt()}</td> 
                            <td>
                              <Button color="link" onClick={this.toggle('nested_xem')}>Xem</Button>
                            </td> 
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
export default InputGroupPage;
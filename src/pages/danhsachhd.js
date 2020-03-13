import Page from 'components/Page';
import ChartPage from 'pages/ChartPage';
import CardPage from 'pages/CardPage';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, Button} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
const getRandomInt = () => {
  return Math.floor(Math.random() * (100 - 20) + 20);
};
const getRandomMoney = () => {
  return Math.floor(Math.random() * 200000 );
};
class InputGroupPage extends React.Component {
  state = {
    show: false,
  };
  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const externalCloseBtn = (
      <Badge
        className="close can-click"
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem',
        }}
        onClick={this.toggle}>
        &times;
      </Badge>
    );
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
                      <Badge color="danger" pill className=" mb-3 p-2 can-click" onClick={this.toggle}>
                      + Thêm mới
                      </Badge>
                      <Modal
                  isOpen={this.state.show}
                  toggle={this.toggle}
                  size="lg"
                  backdrop="static"
                  backdropClassName="modal-backdrop-light"
                  external={externalCloseBtn}
                  centered>
                  <ModalBody>
                  <ChartPage/>
                  </ModalBody></Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger ">
                            <th> STT</th>
                            <th> Mã HĐ</th>
                            <th> Tên HĐ</th>
                            <th> Thời gian BĐ</th> 
                            <th> Thời gian KT</th> 
                            <th> Số tiền dự kiến</th>
                            <th> Số tiền quyên góp</th>
                            <th> Số người</th> 
                            <th> Xem đăng kí</th> 
                            <th> Tác vụ</th>  
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>12/2/2020</td>
                            <td>12/2/2202</td> 
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td> <Button color="link">Xem</Button></td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Mkjfe</td>
                            <td>16/5/2019</td> 
                            <td>24/3/2020</td>
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomInt()}</td> 
                            <td><Button color="link">Xem</Button></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>23/7/2020</td> 
                            <td>13/8/2020</td>
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td><Button color="link">Xem</Button></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>5/6/2020</td> 
                            <td>21/6/2020</td>
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td><Button color="link">Xem</Button></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>11/3/2020</td> 
                            <td>1/4/2020</td>
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomInt()}</td> 
                            <td><Button color="link">Xem</Button></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>24/12/2019</td> 
                            <td>2/1/2020</td>
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomInt()}</td> 
                            <td><Button color="link">Xem</Button></td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                              </td>
                          </tr>
                        <tr>
                        <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>18/2/2020</td> 
                            <td>23/2/2020</td>
                            <td>{getRandomMoney()}</td> 
                            <td>{getRandomMoney()}</td>  
                            <td>{getRandomInt()}</td> 
                            <td><Button color="link">Xem</Button></td> 
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
import Page from 'components/Page';
import CardPage from'pages/CardPage';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
class chuyentien extends React.Component {
  state = {
    modal_nested_parent: false,
    modal_nested_xoa: false,
    modal_nested:false,
    modal_nested_sua:false,
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
        className="chuyentien"
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
                   Thêm mới giao dịch chuyển tiền
                  </ModalHeader>
                  <ModalBody>
                  <CardPage/>
                  </ModalBody>
                  <Button color="danger" pill className="px-4 my-3" onClick={this.toggle('nested_parent')}>
                    Chuyển
                  </Button>
                  </Modal>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                      <tr className="table-danger">
                        <th>STT</th>
                        <th>Mã GD</th>
                        <th> Tài khoản nguồn</th>
                        <th>Tài khoản đích</th> 
                        <th>Thời gian</th>
                        <th>Số tiền</th> 
                         
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
                            
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Ding</td>
                            <td>26/2/2020</td> 
                            <td>100000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>MEng</td> 
                            <td>31/1/2020</td>
                            <td>50000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Wing</td>
                            <td>19/9/2020</td>
                            <td>60000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>20/2/2020</td>
                            <td>60000</td> 
                            
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>17/3/2019</td>
                            <td>7000</td>
                            
                          </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>@facebook</td>
                            <td>25/3/2010</td>
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
export default chuyentien;
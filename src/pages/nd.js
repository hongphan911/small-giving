import Page from 'components/Page';
import React from 'react';
import Nguoidungthem from 'pages/ndthem'
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader, Form, Label, Input, Button, FormGroup} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';

const tableTypes = ['hover'];

class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal_nested_parent: false,
      modal_nested: false,
    };
  }
  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    fetch('https://misappmobile.000webhostapp.com/trangquantri/shownd.php')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            data: data,
          }, () => console.log('kiemtradulieu', this.state.data),
        );
      });
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
                    <Nguoidungthem/>
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger">
                            <th>ID</th>                                                       
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
                        {this.state.data.map((Item, index) => {
                          return (
                          <tr>
                            <td>{Item.idNguoiDung}</td>
                            <td>{Item.TenNguoiDung}</td>
                            <td>{Item.SDT}</td>
                            <td>{Item.Email}</td>
                            <td>{Item.MatKhau}</td> 
                            <td>{Item.SoDuTK}</td> 
                            <td>{Item.HuyHieu}</td>
                            <td>
                              <FaEdit className="can-click " size="1.5em"/>
                              <MdDelete className="can-click" size="1.5em"/>
                            </td>
                          </tr>
                           );
                          })}
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
export default ButtonPage;
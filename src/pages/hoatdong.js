import Page from 'components/Page';
import Xemdk from 'pages/xemdk';
import React from 'react';
import Hoatdongthem from 'pages/hoatdongthem';
import Hoatdongsua from 'pages/hoatdongsua';
import Hoatdongxoa from 'pages/hoatdongxoa';
import {
  Card,
  CardBody,
  Col,
  Row,
  Table,
  Badge,
  Modal,
  ModalBody,
  Button,
  ModalHeader,
} from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const tableTypes = ['hover'];
class hoatdong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal_them: false,
      modal_xemdk: false,
      modal_sua: false,
      modal_xoa: false,
    };
  }
  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    fetch(
      'https://misappmobile.000webhostapp.com/trangquantri/showhoatdong.php',
    )
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            data: data,
          },
          () => console.log('kiemtradulieu', this.state.data),
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
        className="hoatdong"
        title="Danh sách hoạt động"
        breadcrumbs={[
          { name: 'quản trị hoạt động tình nguyện' },
          { name: 'danh sách hoat động', active: true },
        ]}
      >
        {tableTypes.map((tableType, index) => (
          <Row key={index}>
            <Col>
              <Card className="mb-3">
                <CardBody>
                  <Modal
                    isOpen={this.state.modal_them}
                    toggle={this.toggle('them')}
                    size="lg"
                    className={this.props.className}
                  >
                    <ModalHeader
                      className="text-danger"
                      toggle={this.toggle('them')}
                    >
                      Thêm mới hoạt động
                    </ModalHeader>
                    <ModalBody>
                      <Hoatdongthem />
                    </ModalBody>
                  </Modal>
<<<<<<< HEAD
                  <Modal
                    isOpen={this.state.modal_xemdk}
                    toggle={this.toggle('xemdk')}
                    size="lg"
                    className={this.props.className}
                  >
                    <ModalHeader
                      className="text-danger"
                      toggle={this.toggle('xemdk')}
                    >
                      Xem đăng kí
                    </ModalHeader>
                    <ModalBody>
                      <Xemdk />
                    </ModalBody>
                  </Modal>
                  <Modal
                    isOpen={this.state.modal_sua}
                    toggle={this.toggle('sua')}
                    size="lg"
                    className={this.props.className}
                  >
                    <ModalHeader
                      className="text-danger"
                      toggle={this.toggle('sua')}
                    >
                      Sửa thông tin hoạt động
                    </ModalHeader>
                    <ModalBody>
                      <Hoatdongsua />
                    </ModalBody>
                  </Modal>
                  <Modal
                    isOpen={this.state.modal_xoa}
                    toggle={this.toggle('xoa')}
                    className={this.props.className}
                  >
                    <ModalHeader
                      className="text-danger"
                      toggle={this.toggle('xoa')}
                    >
                      Xóa hoạt động
                    </ModalHeader>
                    <ModalBody>
                      <Hoatdongxoa />
                    </ModalBody>
                  </Modal>

                  <Badge
                    color="danger"
                    pill
                    className=" mb-3 p-2 can-click"
                    onClick={this.toggle('them')}
                  >
                    + Thêm mới
                  </Badge>
                  <Table {...{ [tableTypes || 'hover']: true }}>
                    <thead>
                      <tr className="table-danger ">
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
                      {this.state.data.map(Item => {
                        return (
                          <tr>
                            <td>{Item.TenHoatDong}</td>
                            <td>{Item.ThoiGianBD}</td>
                            <td>{Item.ThoiGianKT}</td>
                            <td>{Item.SoDuTK}</td>
                            <td>{Item.SoNguoi}</td>
                            <td>
                              <Button
                                color="link"
                                className="can-click"
                                onClick={this.toggle('xemdk')}
                              >
                                Xem
                              </Button>
                            </td>
=======
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger ">
                            <th> ID</th>
                            <th> Tên hoạt động</th>
                            <th> Bắt đầu</th> 
                            <th> Kết thúc</th> 
                            <th> Đã quyên góp</th>
                            <th> Xem đăng kí</th> 
                            <th> Tác vụ</th>  
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((Item, index) => {
                          return (
                        
                          <tr>    
                            <td>{Item.idHoatDong}</td>                       
                            <td>{Item.TenHoatDong}</td>
                            <td>{Item.ThoiGianBD}</td>
                            <td>{Item.ThoiGianKT}</td> 
                            
                            <td>{Item.SoDuTK}</td> 
                             
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
>>>>>>> 53fe8c465c597b150f2296042ce26f01e2b5324e
                            <td>
                              <FaEdit
                                className="can-click "
                                size="1.5em"
                                onClick={this.toggle('sua')}
                              />
                              <MdDelete
                                className="can-click"
                                size="1.5em"
                                onClick={this.toggle('xoa')}
                              />
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
export default hoatdong;

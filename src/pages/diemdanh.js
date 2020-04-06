import Page from 'components/Page';
import Diemdanhthem from 'pages/diemdanhthem';
import Diemdanhsua from 'pages/diemdanhsua';
import Diemdanhxoa from 'pages/diemdanhxoa';
import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Table,
  Badge,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const tableTypes = ['hover'];
class diemdanh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal_them: false,
      modal_sua: false,
      modal_xoa: false,
    };
  }
  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    fetch(
      'https://misappmobile.000webhostapp.com/trangquantri/showdiemdanh.php',
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
        className="diemdanh"
        title="Tạo điểm danh"
        breadcrumbs={[
          { name: 'quản trị hoạt động tài trợ' },
          { name: 'Tạo điểm danh', active: true },
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
                      Thêm mới tài khoản điểm danh
                    </ModalHeader>
                    <ModalBody>
                      <Diemdanhthem />
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
                      Sửa tài khoản điểm danh
                    </ModalHeader>
                    <ModalBody>
                      <Diemdanhsua />
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
                      Xóa tài khoản điểm danh
                    </ModalHeader>
                    <ModalBody>
                      <Diemdanhxoa />
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
                  <Table {...{ [tableType || 'hover']: true }}>
                    <thead>
                      <tr className="table-danger">
                        <th>ID</th>
                        <th>Tên tài khoản</th>
                        <th>Số dư</th>
                        <th>Số người tham gia</th>
                        <th>Sô tiền</th>
                        <th>Tác vụ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map(Item => {
                        return (
                          <tr>
                            <td>{Item.idDiemDanh}</td>
                            <td>{Item.TenTK}</td>
                            <td>{Item.SoDuTK}</td>
                            <td>{Item.SoNguoiTG}</td>
                            <td>{Item.SoTienML}</td>
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
export default diemdanh;

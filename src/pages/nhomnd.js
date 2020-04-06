import Page from 'components/Page';
import React from 'react';
import Nhomndthem from 'pages/nhomndthem';
import Nhomndsua from 'pages/nhomndsua';
import Nhomndxoa from 'pages/nhomndxoa';
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
class nhomnd extends React.Component {
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
    fetch('https://misappmobile.000webhostapp.com/trangquantri/shownhomnd.php')
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
        className="ButtonPage"
        title="Nhóm người dùng"
        breadcrumbs={[
          { name: 'quản trị tài khoản' },
          { name: 'nhóm người dùng', active: true },
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
                    className={this.props.className}
                  >
                    <ModalHeader
                      className="text-danger"
                      toggle={this.toggle('them')}
                    >
                      Thêm mới nhóm người dùng
                    </ModalHeader>
                    <ModalBody>
                      <Nhomndthem />
                    </ModalBody>
                  </Modal>
                  <Modal
                    isOpen={this.state.modal_sua}
                    toggle={this.toggle('sua')}
                    className={this.props.className}
                  >
                    <ModalHeader
                      className="text-danger"
                      toggle={this.toggle('sua')}
                    >
                      Sửa thông tin nhóm người dùng
                    </ModalHeader>
                    <ModalBody>
                      <Nhomndsua />
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
                      Xóa nhóm người dùng
                    </ModalHeader>
                    <ModalBody>
                      <Nhomndxoa />
                    </ModalBody>
                  </Modal>
                  <Badge
                    color="danger"
                    pill
                    className=" mb-3 p-2 can-click "
                    onClick={this.toggle('them')}
                  >
                    + Thêm mới
                  </Badge>
                  <Table {...{ [tableType || 'hover']: true }}>
                    <thead>
                      <tr className="table-danger">
                        <th>Mã nhóm</th>
                        <th>Tên nhóm</th>
                        <th>Tác vụ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map(Item => {
                        return (
                          <tr>
                            <td>{Item.idNhom}</td>
                            <td>{Item.TenNhom}</td>
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
export default nhomnd;

import Page from 'components/Page';
import Khaosatthem from 'pages/khaosatthem';
import Khaosatsua from 'pages/khaosatsua';
import Khaosatxoa from 'pages/khaosatxoa';
import React from 'react';
import { Card, CardBody, Col, Row, Table, Badge } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const tableTypes = ['hover'];
class khaosat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModalThem: false,
      showModalSua: false,
      showModalXoa: false,
    };
  }
  handleShowModalThem = () => {
    this.setState({
      showModalThem: true,
    });
  };
  handleCloseModalThem = () => {
    this.setState({
      showModalThem: false,
    });
  };
  handleShowModalSua = () => {
    this.setState({
      showModalSua: true,
    });
  };
  handleCloseModalSua = () => {
    this.setState({
      showModalSua: false,
    });
  };
  handleShowModalXoa = () => {
    this.setState({
      showModalXoa: true,
    });
  };
  handleCloseModalXoa = () => {
    this.setState({
      showModalXoa: false,
    });
  };
  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    fetch('https://misappmobile.000webhostapp.com/trangquantri/showkhaosat.php')
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
  // toggle = modalType => () => {
  //   if (!modalType) {
  //     return this.setState({
  //       modal: !this.state.modal,
  //     });
  //   }

  //   this.setState({
  //     [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
  //   });
  // };
  render() {
    return (
      <Page
        className="khaosat"
        title="Tạo khảo sát"
        breadcrumbs={[
          { name: 'quản trị hoạt động tài trợ' },
          { name: 'Tạo khảo sát', active: true },
        ]}
      >
        {tableTypes.map((tableType, index) => (
          <Row key={index}>
            <Col>
              <Card className="mb-3">
                <CardBody>
                  <Khaosatthem
                    show={this.state.showModalThem}
                    onHide={this.handleCloseModalThem}
                    size="lg"
                    className={this.props.className}
                  />
                  <Khaosatsua
                    show={this.state.showModalSua}
                    onHide={this.handleCloseModalSua}
                    size="lg"
                    className={this.props.className}
                  />
                  <Khaosatxoa
                    show={this.state.showModalXoa}
                    onHide={this.handleCloseModalXoa}
                    size="lg"
                    className={this.props.className}
                  />

                  <Badge
                    color="danger"
                    pill
                    className=" mb-3 p-2 can-click"
                    onClick={this.handleShowModalThem}
                  >
                    + Thêm mới
                  </Badge>
                  <Table {...{ [tableType || 'hover']: true }}>
                    <thead>
                      <tr className="table-danger">
                        <th>ID</th>
                        <th>Tên khảo sát</th>
                        <th>Bắt đầu</th>
                        <th>Kết thúc</th>
                        <th> Số dư</th>
                        <th> Đã tham gia</th>
                        <th>Tác vụ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map(Item => {
                        return (
                          <tr>
                            <td>{Item.idKhaoSat}</td>
                            <td>{Item.TenKhaoSat}</td>
                            <td>{Item.ThoiGianBD}</td>
                            <td>{Item.ThoiGianKT}</td>
                            <td>{Item.SoDuTK}</td>
                            <td>{Item.SoNguoiThamGia}</td>
                            <td>
                              <FaEdit
                                className="can-click "
                                size="1.5em"
                                onClick={this.handleShowModalSua}
                              />
                              <MdDelete
                                className="can-click"
                                size="1.5em"
                                onClick={this.handleShowModalXoa}
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
export default khaosat;

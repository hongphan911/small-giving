import Page from 'components/Page';
import Xemdk from 'pages/xemdk';
import React from 'react';
import Hoatdongthem from 'pages/hoatdongthem';
import Hoatdongsua from 'pages/hoatdongsua';
import Hoatdongxoa from 'pages/hoatdongxoa';
import { Card, CardBody, Col, Row, Table, Badge, Button } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const tableTypes = ['hover'];
class hoatdong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModalThem: false,
      showModalSua: false,
      showModalXoa: false,
      showModalXem: false,
      idHoatDong: "",
    };
  }
  componentDidUpdate(preProps, preState, future) {
    const { idHoatDong } = this.state;
    if (preState.idHoatDong != idHoatDong) {
      this.handleShowModalSua(idHoatDong);
    }
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
<<<<<<< HEAD
  handleShowModalSua = id => {
=======
  handleShowModalSua = (id) => {
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
    this.setState({
      showModalSua: true,
      idHoatDong: id,
    });
  };
  handleCloseModalSua = () => {
    this.setState({
      showModalSua: false,
    });
  };
<<<<<<< HEAD
  handleShowModalXoa = id => {
=======
  handleShowModalXoa = (id) => {
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
    this.setState({
      showModalXoa: true,
      idHoatDong: id,
    });
  };
  handleCloseModalXoa = () => {
    this.setState({
      showModalXoa: false,
    });
  };
  handleShowModalXem = (id) => {
    this.setState({
      showModalXem: true,
      idHoatDong: id,
    });
  };
  handleCloseModalXem = () => {
    this.setState({
      showModalXem: false,
    });
  };
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
                  <Hoatdongthem
                    show={this.state.showModalThem}
                    onHide={() => this.handleCloseModalThem()}
                    size="lg"
                    className={this.props.className}
                  />
                  <Hoatdongsua
                    show={this.state.showModalSua}
                    onHide={() => this.handleCloseModalSua()}
                    size="lg"
                    className={this.props.className}
                    chooseId={this.state.idHoatDong}
                  />
                  <Hoatdongxoa
                    show={this.state.showModalXoa}
                    onHide={() => this.handleCloseModalXoa()}
                    size="lg"
                    className={this.props.className}
                    chooseId={this.state.idHoatDong}
                  />
                  <Xemdk
                    show={this.state.showModalXem}
                    onHide={() => this.handleCloseModalXem()}
                    size="lg"
                    className={this.props.className}
                    chooseId={this.state.idHoatDong}
                  />

                  <Badge
                    color="danger"
                    pill
                    className=" mb-3 p-2 can-click"
                    onClick={() => this.handleShowModalThem()}
                  >
                    + Thêm mới
                  </Badge>
                  <Table {...{ [tableType || 'hover']: true }}>
                    <thead>
                      <tr className="table-danger ">
                        <th>ID</th>
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
                            <td>{Item.idHoatDong}</td>
                            <td>{Item.TenHoatDong}</td>
                            <td>{Item.ThoiGianBD}</td>
                            <td>{Item.ThoiGianKT}</td>
                            <td>{Item.SoDuTK}</td>
                            <td>{Item.SoNguoi}</td>
                            <td>
                              <Button
                                color="link"
                                className="can-click"
                                onClick={() => this.handleShowModalXem(Item.idHoatDong)}
                              >
                                Xem
                              </Button>
                            </td>
                            <td>
                              <FaEdit
                                className="can-click "
                                size="1.5em"
<<<<<<< HEAD
                                onClick={() =>
                                  this.handleShowModalSua(Item.idHoatDong)
                                }
=======
                                onClick={() => this.handleShowModalSua(Item.idHoatDong)}
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                              />
                              <MdDelete
                                className="can-click"
                                size="1.5em"
<<<<<<< HEAD
                                onClick={() =>
                                  this.handleShowModalXoa(Item.idHoatDong)
                                }
=======
                                onClick={() => this.handleShowModalXoa(Item.idHoatDong)}
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
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

import Page from 'components/Page';
import Chuyentienthem from 'pages/chuyentienthem';
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
const tableTypes = ['hover'];
class chuyentien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModalThem: false,
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
  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    fetch(
      'https://misappmobile.000webhostapp.com/trangquantri/showchuyentien.php',
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
        className="chuyentien"
        title="Chuyển tiền"
        breadcrumbs={[
          { name: 'quản trị luồng quyên góp' },
          { name: 'chuyển tiền', active: true },
        ]}
      >
        {tableTypes.map((tableType, index) => (
          <Row key={index}>
            <Col>
              <Card className="mb-3">
                <CardBody>
                  <Chuyentienthem
                    show={this.state.showModalThem}
                    onHide={this.handleCloseModalThem}
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
                  <Table {...{ [tableType || 'default']: true }}>
                    <thead>
                      <tr className="table-danger">
                        <th>Mã giao dịch</th>
                        <th> Tài khoản nguồn</th>
                        <th>Tài khoản đích</th>
                        <th>Thời gian</th>
                        <th>Số tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map(Item => {
                        return (
                          <tr>
                            <td>{Item.idGiaoDich}</td>
                            <td>{Item.TenKhaoSat}</td>
                            <td>{Item.TenNguoiDung}</td>
                            <td>{Item.ThoiGian}</td>
                            <td>{Item.SoTien}</td>
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
export default chuyentien;

import Page from 'components/Page';
import React from 'react';
import Tintucthem from 'pages/tintucthem';
import Tintucsua from 'pages/tintucsua';
import Tintucxoa from 'pages/tintucxoa';
import { Card, CardBody, Col, Row, Table, Badge } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const tableTypes = ['hover'];
class tintuc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModalThem: false,
      showModalSua: false,
      showModalXoa: false,
      idTin:"",
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
<<<<<<< HEAD
  handleShowModalSua = id => {
    this.setState({
      showModalSua: true,
      idTin: id,
=======
  handleShowModalSua = (id) => {
    this.setState({
      showModalSua: true,
      idTin:id,
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
    });
  };
  handleCloseModalSua = () => {
    this.setState({
      showModalSua: false,
    });
  };
<<<<<<< HEAD
  handleShowModalXoa = id => {
    this.setState({
      showModalXoa: true,
      idTin: id,
=======
  handleShowModalXoa = (id) => {
    this.setState({
      showModalXoa: true,
      idTin:id,
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
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
    fetch('https://misappmobile.000webhostapp.com/trangquantri/showtintuc.php')
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
        className="tintuc"
        title="Tin tức"
        breadcrumbs={[
          { name: 'quản trị hoạt động tình nguyện' },
          { name: 'Tin tức', active: true },
        ]}
      >
        {tableTypes.map((tableType, index) => (
          <Row key={index}>
            <Col>
              <Card className="mb-3">
                <CardBody>
                  <Tintucthem
                    show={this.state.showModalThem}
                    onHide={() => this.handleCloseModalThem()}
                    size="lg"
                    className={this.props.className}
                  />
                  <Tintucsua
                    show={this.state.showModalSua}
                    onHide={() => this.handleCloseModalSua()}
                    size="lg"
                    className={this.props.className}
                    chooseId={this.state.idTin}
                  />
                  <Tintucxoa
                    show={this.state.showModalXoa}
                    onHide={() => this.handleCloseModalXoa()}
                    size="lg"
                    className={this.props.className}
                    chooseId={this.state.idTin}
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
                        <th> ID</th>
                        <th> Tên Tin</th>
                        <th> Tiêu đề thông báo</th>
                        <th> Tác vụ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map(Item => {
                        return (
                          <tr>
                            <td>{Item.idTin}</td>
                            <td>{Item.TenTin}</td>
                            <td>{Item.TieuDeThongBao}</td>
                            <td>
                              <FaEdit
                                className="can-click "
                                size="1.5em"
<<<<<<< HEAD
                                onClick={() =>
                                  this.handleShowModalSua(Item.idTin)
                                }
=======
                                onClick={() => this.handleShowModalSua(Item.idTin)}
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                              />

                              <MdDelete
                                className="can-click"
                                size="1.5em"
<<<<<<< HEAD
                                onClick={() =>
                                  this.handleShowModalXoa(Item.idTin)
                                }
=======
                                onClick={() => this.handleShowModalXoa(Item.idTin)}
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
export default tintuc;

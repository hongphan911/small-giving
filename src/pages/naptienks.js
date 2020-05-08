import Page from 'components/Page';
import React from 'react';
import Naptienthem from 'pages/naptienksthem';
import { Card, CardBody, Col, Row, Table, Badge } from 'reactstrap';
const tableTypes = ['hover'];

class naptien extends React.Component {
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
        fetch('http://smallgiving.cf/mobileapp/trangquantri/shownaptienks.php')
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
                className="naptien"
                title="Nạp tiền tài khoản khảo sát"
                breadcrumbs={[
                    { name: 'quản trị giao dịch' },
                    { name: 'nạp tiền tài khoản khảo sát', active: true },
                ]}
            >
                {tableTypes.map((tableType, index) => (
                    <Row key={index}>
                        <Col>
                            <Card className="mb-3">
                                <CardBody>
                                    <Naptienthem
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
                                    <Table {...{ [tableType || 'hover']: true }}>
                                        <thead>
                                            <tr className="table-danger">
                                                <th>ID</th>
                                                <th>Tài khoản khảo sát</th>
                                                <th>Thời gian</th>
                                                <th>Số tiền nạp</th>
                                                <th>CTV thưc hiện</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.map(Item => {
                                                return (
                                                    <tr>
                                                        <td>{Item.idGiaoDich}</td>
                                                        <td>{Item.TenKhaoSat}</td>
                                                        <td>{Item.ThoiGian}</td>
                                                        <td>{Item.SoTien}</td>
                                                        <td>{Item.CTV}</td>
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
export default naptien;
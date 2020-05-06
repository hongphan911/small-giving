import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import NotificationSuccess, {
  notifysuccess,
} from '../components/Notification/notificationSuccess';
import NotificationDefeat, {
  notifydefeat,
} from '../components/Notification/notificationDefeat';

const initialState = {
  id: '',
  name: '',
  money: '',
  moneyError: '',
};

class Diemdanhsua extends React.Component {
  state = initialState;
  componentWillReceiveProps = () => {
    console.log("check>>>", this.props.chooseId);
    this.getdatashow();
    //this.getdataupdate();

  }
  getdatashow() {
    let config = {
      method: "POST",
      body: JSON.stringify({
        idDiemDanh: this.props.chooseId,
      }),
    };
    fetch('http://smallgiving.cf/mobileapp/trangquantri/admin/diemdanh/select.php', config)
      .then(response => response.json())
      .then(datashow => {
        this.setState(
          {
            id: datashow.idDiemDanh,
            name: datashow.TenDiemDanh,
            patron: datashow.idNhaTaiTro,
            startdate: datashow.ThoiGianBD,
            enddate: datashow.ThoiGianKT,
            eachturn: datashow.SoTienML

          },
          () => console.log('kiemtradulieu>>', this.state.datashow),
        );
      });
  }
  getdataupdate() {
    let config2 = {
      method: "POST",
      body: JSON.stringify({
        idDiemDanh: this.state.id,
        TenDiemDanh: this.state.name,

        idNhaTaiTro: this.state.patron,
        ThoiGianBD: this.state.startdate,
        ThoiGianKT: this.state.enddate,
        SoTienML: this.state.eachturn,

      }),
    };
    fetch('http://smallgiving.cf/mobileapp/trangquantri/admin/diemdanh/update.php', config2)
      .then(response => response.json())
      .then((data) => {
        if (data.message === "success") {
          notifysuccess('this is a notify');
          window.location.reload();

        } else {



        }
      });
  }
  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  validate = () => {
    let nameError = '';
    let eachturnError = '';

    if (!this.state.name) {
      nameError = 'Không được bỏ trống!';
    }
    if (!this.state.eachturn) {
      eachturnError = 'Không được bỏ trống!';
    }

    if (nameError || eachturnError) {
      this.setState({ nameError, eachturnError });
      notifydefeat('this is a notify');
      return false;
    }

    return true;
  };
  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader className="text-danger" toggle={this.props.onHide}>
          Sửa thông tin tài khoản điểm danh
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xl={6} lg={12} md={12}>
                <Form>
                  <FormGroup>
                    <Label for="exampleText">Mã điểm danh</Label>
                    <Input
                      disabled="true"
                      type="text"
                      name="id"
                      value={this.state.id}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDate">Thời gian bắt đầu</Label>

                    <Input
                      type="date"
                      name="startdate"
                      value={this.state.startdate}
                      onChange={val => {
                        this.setState({
                          startdate: val.target.value,
                        });
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleEmail"> Thuộc nhà tài trợ</Label>
                    <Input
                      type="email"
                      name="patron"
                      value={this.state.patron}
                      onChange={val => {
                        this.setState({
                          patron: val.target.value,
                        });
                      }}
                    />
                  </FormGroup>

                </Form>
              </Col>

              <Col xl={6} lg={12} md={12}>
                <Form>
                  <FormGroup>
                    <Label for="exampleText">
                      Tên điểm danh <span className="red-text">*</span>
                    </Label>
                    <div className="error-text">{this.state.nameError}</div>
                    <Input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={val => {
                        this.setState({
                          name: val.target.value,
                        });
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleDate">Thời gian kết thúc</Label>
                    <Input
                      type="date"
                      name="enddate"
                      value={this.state.enddate}
                      onChange={val => {
                        this.setState({
                          enddate: val.target.value,
                        });
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleNumber">
                      Số tiền cho mỗi lượt điểm danh{' '}
                      <span className="red-text">*</span>
                    </Label>
                    <div className="error-text">
                      {this.state.eachturnError}
                    </div>
                    <Input
                      type="number"
                      name="eachturn"
                      value={this.state.eachturn}
                      onChange={val => {
                        this.setState({
                          eachturn: val.target.value,
                        });
                      }}
                    />
                  </FormGroup>


                </Form>


              </Col>
            </Row>

            <div className="center-text-submit">
              <Container>
                <Button color="danger" type="submit"
                  pill className="px-4 my-3"
                  onClick={() => this.getdataupdate()}
                >
                  Cập nhật
                </Button>
                <NotificationSuccess />
                <NotificationDefeat />
              </Container>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
export default Diemdanhsua;

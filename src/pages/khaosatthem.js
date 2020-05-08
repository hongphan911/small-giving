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
import Cookies from 'js-cookie';
//import styled from 'styled-components';
import NotificationSuccess, {
  notifysuccess,
} from '../components/Notification/notificationSuccess';
import NotificationDefeat, {
  notifydefeat,
} from '../components/Notification/notificationDefeat';

const initialState = {
  id: '',
  name: '',
  startdate: '',
  enddate: '',
  url: '',
  patron: '',
  eachturn: '',
  total: '',
  token: Cookies.get('small-giving') ? Cookies.get('small-giving') : "",
  user: [],

  nameError: '',
  urlError: '',
  eachturnError: '',
  totalError: '',
};

class Khaosatthem extends React.Component {
  state = initialState;
  componentDidMount() {
    this.getUser()
    this.getdatainsert();
  }
  getUser = () => {
    if (this.state.token !== "") {
      let config = {
        method: "POST",
        body: JSON.stringify({
          token: this.state.token
        })
      }
      fetch(`http://smallgiving.cf/mobileapp/checktoken.php`, config)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            user: data
          }, () => this.getdatainsert())
        })
    }
  }
  getdatainsert() {
    const isValid = this.validate();
    if (isValid) {
      let config = {
        method: "POST",
        body: JSON.stringify({
          idCTV: this.state.user.idNguoiDung,
          TenKhaoSat: this.state.name,
          idNhaTaiTro: this.state.patron,
          Link: this.state.url,
          ThoiGianBD: this.state.startdate,
          ThoiGianKT: this.state.enddate,
          SoTienML: this.state.eachturn,
        }),
      };
      fetch('http://smallgiving.cf/mobileapp/trangquantri/admin/taokhaosat/insert.php', config)
        .then(response => response.json())
        .then((data) => {
          if (data.message === "success") {
            notifysuccess('this is a notify');
            window.location.reload();

          } else {
            notifydefeat('this is a notify');
          }
        });
      this.setState(initialState);
    }
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
    let urlError = '';
    let eachturnError = '';
    let totalError = '';

    if (!this.state.name) {
      nameError = 'Không được bỏ trống!';
    }
    if (!this.state.url) {
      urlError = 'Không được bỏ trống!';
    }
    if (!this.state.eachturn) {
      eachturnError = 'Không được bỏ trống!';
    }

    if (nameError || urlError || eachturnError) {
      this.setState({ nameError, urlError, eachturnError });
      notifydefeat('this is a notify');
      return false;
    }

    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    //const isValid = this.validate();
    //if (isValid) {
    //console.log(this.state);
    //clear form
    //this.setState(initialState);
    //}
  };

  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader className="text-danger" toggle={this.props.onHide}>
          Thêm mới khảo sát
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <CardBody>
                <Row>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup>
                        <Label for="exampleText">Mã khảo sát</Label>
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
                          Tên khảo sát <span className="red-text">*</span>
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
                          Số tiền cho mỗi lượt khảo sát{' '}
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
                  <Col>
                    <Form>
                      <FormGroup>
                        <Label for="exampleUrl">
                          Link khảo sát <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">{this.state.urlError}</div>
                        <Input
                          type="url"
                          name="url"
                          value={this.state.url}
                          onChange={val => {
                            this.setState({
                              url: val.target.value,
                            });
                          }}
                        />
                      </FormGroup>

                    </Form>
                  </Col>

                </Row>
              </CardBody>
            </Card>
            <div className="center-text-submit">
              <Container>
                <Button color="danger" type="submit" pill
                  className="px-4 my-3"
                  onClick={() => this.getdatainsert()}
                >
                  Đăng tải
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
export default Khaosatthem;

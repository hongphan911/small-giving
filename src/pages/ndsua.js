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
  Modal,
  ModalBody,
  ModalHeader,
  Container,
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
  email: '',
  phone: '',
  stk: '',
  dateofbirth: '',
  password: '',
  idnhom: '',

<<<<<<< HEAD
  emailError: '',
  phoneError: '',
  idnhomError: '',
  passwordError: '',
  dataselect: [],
=======
const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  stk: "",
  dateofbirth: "",
  password: "",
  idnhom: "",

  emailError: "",
  phoneError: "",
  idnhomError: "",
  passwordError: "",
  dataselect: [],

>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
};

class Nguoidungsua extends React.Component {
  state = initialState;
<<<<<<< HEAD
  componentDidMount = () => {
    console.log('check>>>', this.props.chooseId);
    this.getdataselect();
  };
  getdataselect = async () => {
    fetch('https://misappmobile.000webhostapp.com/trangquantri/shownhomnd.php')
      .then(response => response.json())
      .then(dataselect => {
        this.setState(
          {
            dataselect: dataselect,
          },
          () => console.log('kiemtradulieu', this.state.dataselect),
        );
      });
  };
=======
  componentWillReceiveProps = () => {
    console.log("check>>>", this.props.chooseId);
    this.getdatashow();
    this.getdataselect();
    this.getdataupdate();
  }
  getdatashow() {
    let config = {
      method: "POST",
      body: JSON.stringify({
        idNguoiDung: this.props.chooseId,
      }),
    };
    fetch('https://misappmobile.000webhostapp.com/trangquantri/admin/nguoidung/select.php', config)
      .then(response => response.json())
      .then(datashow => {
        this.setState(
          {
            id: datashow.idNguoiDung,
            name: datashow.TenNguoiDung,
            email: datashow.Email,
            phone: datashow.SDT,
            stk: datashow.STK,
            dateofbirth: datashow.NgaySinh,
            password: datashow.MatKhau,
            idnhom: datashow.idNhom,
          },
          () => console.log('kiemtradulieu>>', this.state.datashow),
        );
      });
  }
  getdataselect = async () => {
    fetch('https://misappmobile.000webhostapp.com/trangquantri/shownhomnd.php')
      .then((response) => response.json())
      .then((dataselect) => {
        this.setState({
          dataselect: dataselect,
        }, () => console.log('kiemtradulieu', this.state.dataselect),

        );
      });
  };
  getdataupdate() {
    let config2 = {
      method: "POST",
      body: JSON.stringify({
        idNguoiDung: this.state.id,
        TenNguoiDung: this.state.name,
        Email: this.state.email,
        SDT: this.state.phone,
        STK: this.state.stk,
        NgaySinh: this.state.dateofbirth,
        MatKhau: this.state.password,
        idNhom: this.state.idNhom,
      }),
    };
    fetch('https://misappmobile.000webhostapp.com/trangquantri/admin/nguoidung/update.php', config2)
      .then(response => response.json())
      .then((data) => {
        if (data.message === "success") {
          notifysuccess('this is a notify');
          window.location.reload();

        } else {



        }
      });
  }

>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  validate = () => {
    let emailError = '';
    let phoneError = '';
    let idnhomError = '';
    let passwordError = '';

    if (!this.state.phone) {
      phoneError = 'Không được bỏ trống!';
    }
    if (!this.state.idnhom) {
      idnhomError = 'Không được bỏ trống!';
    }
    if (!this.state.email) {
      emailError = 'Không được bỏ trống!';
      // emailError: đây là biến này
    }
    if (!this.state.password) {
      passwordError = 'Không được bỏ trống!';
    }
    if (phoneError || idnhomError || emailError || passwordError) {
      this.setState({ phoneError, idnhomError, emailError, passwordError });
      notifydefeat('this is a notify');
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader className="text-danger" toggle={this.props.onHide}>
          Sửa thông tin người dùng
        </ModalHeader>
        <ModalBody>
<<<<<<< HEAD
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <CardBody>
                <Row>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup>
=======

          <Form onSubmit={() => this.handleSubmit()}
          >
            <Card>
              <CardBody>

                <Row>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup >
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                        <Label for="exampleText"> Mã người dùng</Label>
                        <Input
                          disabled="true"
                          type="text"
                          name="id"
<<<<<<< HEAD
                          value={this.props.chooseId}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">
                          Nhóm người dùng <span className="red-text">*</span>
                        </Label>
=======
                          value={this.state.id}
                        />
                      </FormGroup>
                      <FormGroup >
                        <Label for="exampleSelect">Nhóm người dùng <span className="red-text">*</span></Label>
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697

                        <div className="error-text">
                          {this.state.idnhomError}
                        </div>
                        <Input
                          type="select"
                          name="idnhom"
<<<<<<< HEAD
                          value={this.state.idnhom}
                          onChange={val => {
                            this.setState({
                              idnhom: val.target.value,
                            });
                          }}
                        >
                          {this.state.dataselect.map(Item => {
                            return <option>{Item.TenNhom}</option>;
                          })}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">
                          Số điện thoại <span className="red-text">*</span>
=======

                          value={this.state.idnhom}
                          onChange={(val) => {
                            this.setState({
                              idnhom: val.target.value
                            })
                          }}
                        >{this.state.dataselect.map((Item, index) => {
                          return (
                            <option>{Item.idNhom}</option>
                          );
                        })}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">{' '}Số điện thoại <span className="red-text">*</span>
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                        </Label>
                        <Input
                          type="phone"
                          name="phone"
                          value={this.state.phone}
                          onChange={val => {
                            this.setState({
                              phone: val.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">
                          Email <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
<<<<<<< HEAD
                          {this.state.emailError}
                        </div>
                        <Input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={val => {
                            this.setState({
                              email: val.target.value,
                            });
=======
                          {this.state.phoneError}
                        </div>
                        <Input
                          disabled="true"
                          type="phone"
                          name="phone"
                          value={this.state.phone}
                          onChange={(val) => {
                            this.setState({
                              phone: val.target.value
                            })
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email <span className="red-text">*</span></Label>
                        <div className="error-text">
                          {this.state.emailError}
                        </div>
                        <Input
                          disabled="true"
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={(val) => {
                            this.setState({
                              email: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
<<<<<<< HEAD
                      <FormGroup>
=======
                      <FormGroup >
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                        <Label for="exampleText"> Họ tên</Label>
                        <Input
                          type="text"
                          name="name"
                          value={this.state.name}
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              name: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              name: val.target.value,

                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDate">Ngày sinh</Label>
                        <Input
                          type="date"
                          name="dateofbirth"
                          value={this.state.dateofbirth}
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              dateofbirth: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              dateofbirth: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Số tài khoản</Label>
                        <Input
                          type="text"
                          name="stk"
                          value={this.state.stk}
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              stk: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              stk: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
<<<<<<< HEAD
                        <Label for="exampleText">
                          Password <span className="red-text">*</span>
                        </Label>
                        {/* <div className="error-text">
                          {this.state.passwordError}
                        </div> */}
=======
                        <Label for="exampleText">Password <span className="red-text">*</span></Label>
                        <div className="error-text">
                          {this.state.passwordError}
                        </div>
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                        <Input
                          type="text"
                          name="password"
                          value={this.state.password}
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              password: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              password: val.target.value,

                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
<<<<<<< HEAD
=======

>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
              </CardBody>
            </Card>
            <div className="center-text-submit">
              <Container>
<<<<<<< HEAD
                <Button
                  color="danger"
                  type="submit"
                  pill
                  className="px-4 my-3"
                  //onClick={() => this.handleUpdate()}
=======
                <Button color="danger" type="submit" pill
                  className="px-4 my-3"
                  onClick={() => this.getdataupdate()}
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
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
export default Nguoidungsua;

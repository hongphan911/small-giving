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
  email: '',
  phone: '',
  sex: '',
  dateofbirth: '',
  password: '',
  idnhom: '',

  emailError: '',
  phoneError: '',
  idnhomError: '',
  passwordError: '',
  dataselect: [],
};

class Nguoidungthem extends React.Component {
  state = initialState;
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
    }
    if (!this.state.password) {
      passwordError = 'Không được bỏ trống!';
    }
    if (phoneError || idnhomError || emailError || passwordError) {
      this.setState({ phoneError, idnhomError, emailError, passwordError });
      notifydefeat('this is a notify');
      return false;
    }
    notifysuccess('this is a notify');
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
      //notification
    }
  };
  componentDidMount() {
    this.getdataselect();
  }

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
  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader className="text-danger" toggle={this.props.onHide}>
          Thêm mới người dùng
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <CardBody>
                <Row>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup>
                        <Label for="exampleText"> Mã người dùng</Label>
                        <Input
                          //disabled="true"
                          type="text"
                          name="id"
                          value={this.state.id}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">
                          Nhóm người dùng <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
                          {this.state.idnhomError}
                        </div>

                        <Input
                          type="select"
                          name="idnhom"
                          value={this.state.idnhom}
                          onChange={this.handleChange}
                        >
                          {this.state.dataselect.map(Item => {
                            return <option>{Item.TenNhom}</option>;
                          })}
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleText">
                          Số điện thoại <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
                          {this.state.phoneError}
                        </div>
                        <Input
                          type="phone"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">
                          Email <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
                          {this.state.emailError}
                        </div>
                        <Input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup>
                        <Label for="exampleText"> Họ tên</Label>
                        <Input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDate">Ngày sinh</Label>
                        <Input
                          type="date"
                          name="dateofbirth"
                          value={this.state.dateofbirth}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">Giới tính</Label>
                        <Input
                          type="select"
                          name="sex"
                          value={this.state.sex}
                          onChange={this.handleChange}
                        >
                          <option>Nam </option>
                          <option>Nữ</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">
                          Password <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
                          {this.state.passwordError}
                        </div>
                        <Input
                          type="text"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <div className="center-text-submit">
              <Container>
                <Button color="danger" type="submit" pill className="px-4 my-3">
                  Lưu
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
export default Nguoidungthem;

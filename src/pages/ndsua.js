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


const initialState ={
  id:"",
  name:"",
  email:"",
  phone:"",
  stk:"",
  dateofbirth:"",
  password:"",
  idnhom:"",
  
  emailError:"",
  phoneError:"",
  idnhomError:"",
  passwordError:"",
  datasua: [],
};

class Nguoidungsua extends React.Component {
  state = initialState;
  componentDidMount= () =>{
    console.log("check>>>", this.props.chooseId);
    this.getdatasua();
  }

  getdatasua = async () => {
    fetch('https://misappmobile.000webhostapp.com/trangquantri/admin/nguoidung/update.php')
      .then(response => response.json())
      .then(datasua => {
        this.setState(
          {
            datasua: datasua,
          },
          () => console.log('kiemtradulieu', this.state.datasua),
        );
      });
  };
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
    }
  };

  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader className="text-danger" toggle={this.props.onHide}>
          Sửa thông tin người dùng
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={()=>this.handleSubmit()}>
            <Card>
              <CardBody> 
              {this.state.datasua.map((Item, index) => {
                          return (                       
                <Row>                  
                  <Col xl={6} lg={12} md={12}>                    
                      <Form>
                        <FormGroup >
                        <Label for="exampleText"> Mã người dùng</Label>
                            <Input
                              disabled="true"
                              type="text"
                              name="id"
                              value={this.props.chooseId}
                            />
                        </FormGroup>
                        <FormGroup >
                        <Label for="exampleSelect">Nhóm người dùng <span className="red-text">*</span></Label>

                        <div className="error-text">
                          {this.state.idnhomError}
                        </div>
                        <Input 
                        type="select" 
                        name="idnhom"
                        value={this.state.idnhom}
                        onChange={(val) => {
                          this.setState({
                            idnhom: val.target.value
                          })
                        }}

                        >
                          <option>Cộng tác viên kế toán</option>
                          <option>Cộng tác viên viết bài</option>
                          <option>Chủ nhiệm</option>
                          <option>Nhà hảo tâm</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">
                          {' '}
                          Số điện thoại <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
                          {this.state.phoneError}
                        </div>
                          <Input
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
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={(val) => {
                                this.setState({
                                  email: val.target.value
                                })
                              }}
                            />
                        </FormGroup>        
                      </Form>                       
                </Col>
                <Col xl={6} lg={12} md={12}>                      
                      <Form>
                      <FormGroup >
                          <Label for="exampleText"> Họ tên</Label>
                          <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(val) => {
                              this.setState({
                                name: val.target.value
                              })
                            }}
                          />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">Ngày sinh</Label>
                            <Input
                              type="date"
                              name="dateofbirth"
                              value={this.state.dateofbirth}
                              onChange={(val) => {
                                this.setState({
                                  dateofbirth: val.target.value
                                })
                              }}
                            />
                          </FormGroup>                              
                        <FormGroup>
                            <Label for="exampleText">Số tài khoản</Label>
                            <Input 
                            type="text" 
                            name="stk"
                            value={this.state.stk}
                            onChange={(val) => {
                              this.setState({
                                stk: val.target.value
                              })
                            }}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleText">Password <span className="red-text">*</span></Label>
                            <div className="error-text">
                            {this.state.passwordError} 
                        </div>
                            <Input
                              type="text"
                              name="password"
                              value={this.state.password}
                              onChange={(val) => {
                                this.setState({
                                  password: val.target.value
                                })
                              }}
                            />
                          </FormGroup>                              
                      </Form>                        
                  </Col>                                           
                </Row> 
                );
              })}                      
              </CardBody>
            </Card>
            <div className="center-text-submit">
              <Container>
                <Button color="danger" type="submit" pill className="px-4 my-3">
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

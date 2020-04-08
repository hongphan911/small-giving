import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
  Container,Modal, ModalBody, ModalHeader
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
  nameError: '',
};

class Nhomndsua extends React.Component {
  state = initialState;
  componentDidMount= () =>{
    console.log("check>>>", this.props.chooseId);
    
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

    if (!this.state.name) {
      nameError = 'Bạn chưa nhập tên nhóm!';
    }

    if (nameError) {
      this.setState({ nameError });
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
      <Modal isOpen={this.props.show}
      >
        <ModalHeader className="text-danger" toggle={this.props.onHide}>
          Sửa thông tin nhóm người dùng
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
              <Row>
                      
                  <Col md={12}>
                      <Card>
                      <CardBody>
                          <Form>
                          <Label for="exampleEmail"> Mã nhóm</Label>
                              <Input
                                disabled="true"
                                type="email"
                                name="id"
                                value={this.props.chooseId}
                                
                              />
                          </Form>
                          <Form>
                              <Label for="exampleEmail">Tên nhóm <span className="red-text">*</span> </Label>
                              <div className="error-text">
                                  {this.state.nameError} 
                              </div>
                              <Input
                                  type="email"
                                  name="name"
                                  value={this.state.name}
                                  onChange={(val) => {
                                    this.setState({
                                      name: val.target.value
                                    })
                                  }}
                              />
                          </Form>
                      </CardBody>
                      </Card>                     
                  </Col>   
              </Row>
              <div className="center-text-submit"> 
                  <Container>
                    <Button color="danger" type="submit" pill className="px-4 my-3" >
                    Lưu
                  </Button>
                  <NotificationSuccess/>
                  <NotificationDefeat/>
                  </Container>  

                  </div>
        </Form>

        </ModalBody>
      </Modal>
      

    );
  }
}
export default Nhomndsua;

import React from 'react';
import {
   Button,
<<<<<<< HEAD
  Form, Label, Input,Row, Col, CardBody, Card
=======
   Modal,
  // ModalHeader,
  // ModalFooter,
   ModalBody,
  Form, Label, Input,Row, Col, CardBody, Card, Container
>>>>>>> 3529cfc058a4237bfaa577d924e05d956ef54cd7
} from 'reactstrap';
import styled from 'styled-components';
import NotificationSuccess, { notifysuccess } from '../components/Notification/notificationSuccess';
import NotificationDefeat, { notifydefeat } from '../components/Notification/notificationDefeat';

const initialState ={
    id:"",
    fromaccount:"",
    toaccount:"",
    money:"",
    
    fromaccountError:"",
    toaccountError:"",
    moneyError:""
};
class Chuyentienthem extends React.Component {
  state= initialState;
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value
    });
  };
  validate = () => {
    let fromaccountError = "";
    let toaccountError = "";
    let moneyError = "";


    if (!this.state.fromaccount) {
      fromaccountError ="Bạn cần chọn một tài khoản!";
    }
    if (!this.state.toaccount) {
      toaccountError ="Bạn cần chọn một tài khoản!";
    }
    if (!this.state.money){
      moneyError ="Bạn cần nhập một số tiền!";
    }
    if (fromaccountError || toaccountError || moneyError){
      this.setState({ fromaccountError, toaccountError, moneyError});
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
      
      <Form onSubmit={this.handleSubmit}>
      <Row>
      <Col xl={12} lg={12} md={12}>
        <Card>
          <CardBody className="pd-rancach">
            <Form>
              <Row>
                <Col md={3}>
              
              <Label for="exampleEmail"> Mã giao dịch </Label>
              </Col>
              <Col md={9}>
                
                  <Input
                  disabled="true"
                    type="email"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                  />

                  </Col>
                  </Row>
            </Form>
            <Form >
              <Row>
                <Col md={3}>
                  <Label for="exampleSelect">Tài khoản nguồn <span className="red-text">*</span></Label>
                </Col>
                <Col md={9}>
                <div className="error-text">
                  {this.state.fromaccountError} 
                </div> 
                  <Input type="select" 
                  name="fromaccount" 
                  value={this.state.fromaccount}
                  onChange={this.handleChange}
                  >
                    <option></option>
                    <option>hong hanh</option>
                    <option>hong nhung</option>
                    <option>huyen my</option>
                  </Input>
                </Col>
                </Row>
            </Form>
            <Form >
            <Row>
                <Col md={3}>
                <Label for="exampleSelect">Tài khoản đích <span className="red-text">*</span></Label>
                </Col>
                <Col md={9}>
                <div className="error-text">
                  {this.state.toaccountError}
                </div>
                <Input 
                  type="select" 
                  name="toaccount"
                  value={this.state.toaccount}
                  onChange={this.handleChange} 
                  >
                    <option></option>
                    <option>hong hanh</option>
                    <option>hong nhung</option>
                    <option>huyen my</option>
                </Input>
                </Col>
                </Row>
            </Form>
            
            <Form>
            <Row>
                <Col md={3}>
                <Label for="exampleNumber">Số tiền <span className="red-text">*</span></Label>
                </Col>
                <Col md={9}>
                <div className="error-text">
                  {this.state.moneyError}
                </div>
                  <Input
                    type="number"
                    name="money"
                    value={this.state.money}
                    onChange={this.handleChange}
                  />
                  </Col>
                </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
      
    </Row>
    <div className="center-text-submit">
        <Container>
                  <Button color="danger" type="submit" pill className="px-4 my-3" >
                  Chuyển
                </Button>
                <NotificationSuccess/>
                <NotificationDefeat/>
          </Container>
      </div>
    </Form>

    );
  }
}
export default Chuyentienthem;
import React from 'react';
import {
  Button,
  Form,
  Label,
  Input,
  Row,
  Col,
  CardBody,
  Card,
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
  account: '',
  money: '',

  accountError: '',
  moneyError: '',

};
class Naptienthem extends React.Component {
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
    let accountError = '';
    let moneyError = '';

    if (!this.state.account) {
      accountError = 'Bạn cần chọn một tài khoản!';
    }
    if (!this.state.money) {
      moneyError = 'Bạn cần nhập một số tiền!';
    }
    if (accountError || moneyError) {
      this.setState({ accountError, moneyError });
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
          Thêm mới nạp tiền nhà hảo tâm
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xl={12} lg={12} md={12}>
                <Card>
                  <CardBody className="pd-rancach">
                    <Form>
                      <Row>
                        <Col md={3}>
                          <Label for="exampleEmail"> Mã giao dịch</Label>
                        </Col>
                        <Col md={9}>
                          <Input
                            disabled="true"
                            type="email"
                            name="id"
                            value={this.state.id} />
                        </Col>
                      </Row>
                    </Form>
                    <Form>
                      <Row>
                        <Col md={3}>
                          <Label for="exampleSelect">
                            SDT nhà hảo tâm <span className="red-text">*</span>
                          </Label>
                        </Col>
                        <Col md={9}>
                          <div className="error-text">
                            {this.state.accountError}
                          </div>
                          <Input
                            type="text"
                            name="account"
                            value={this.state.account}
                            onChange={val => {
                              this.setState({
                                account: val.target.value,
                                accountError: ""
                              });
                            }}
                          >
                          </Input>
                        </Col>
                      </Row>
                    </Form>
                    <Form>
                      <Row>
                        <Col md={3}>
                          <Label for="exampleNumber">
                            Số tiền nạp<span className="red-text">*</span>
                          </Label>
                        </Col>
                        <Col md={9}>
                          <div className="error-text">
                            {this.state.moneyError}
                          </div>
                          <Input
                            type="number"
                            name="money"
                            value={this.state.money}
                            onChange={val => {
                              this.setState({
                                money: val.target.value,
                              });
                            }}
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
                <Button color="danger" type="submit" pill className="px-4 my-3">
                  Nạp
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
export default Naptienthem;

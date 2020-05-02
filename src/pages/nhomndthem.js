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
  nameError: '',
};

class Nhomndthem extends React.Component {
  state = initialState;
  componentDidMount() {
    this.getdatainsert();
  }
  getdatainsert() {
    let config = {
      method: "POST",
      body: JSON.stringify({
        TenNhom: this.state.name,
      }),
    };
    fetch('https://misappmobile.000webhostapp.com/trangquantri/admin/nhomnguoidung/insert.php', config)
      .then(response => response.json())
      .then((data) => {
        if (data.message === "success") {
          notifysuccess('this is a notify');
          window.location.reload();

        } else {
          notifydefeat('this is a notify');


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

    if (!this.state.name) {
      nameError = 'Bạn chưa nhập tên nhóm!';
    }

    if (nameError) {
      this.setState({ nameError });

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
          Thêm mới nhóm người dùng
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
                        value={this.state.id}
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
                <Button color="danger" type="submit"
                  pill className="px-4 my-3"
                  onClick={() => this.getdatainsert()}
                >
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
export default Nhomndthem;

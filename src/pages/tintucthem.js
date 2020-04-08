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
  idhoatdong: '',
  image: '',
  content: '',
  title: '',
  receiver: '',

  idhoatdongError: '',
  nameError: '',
  contentError: '',
};

class Tintucthem extends React.Component {
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
    let idhoatdongError = '';
    let nameError = '';
    let contentError = '';

    if (!this.state.name) {
      nameError = 'Không được bỏ trống!';
    }
    if (!this.state.idhoatdong) {
      idhoatdongError = 'Không được bỏ trống!';
    }
    if (!this.state.content) {
      contentError = 'Không được bỏ trống!';
    }

    if (idhoatdongError || nameError || contentError) {
      this.setState({ idhoatdongError, nameError, contentError });
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
          Thêm mới tin tức
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <CardBody>
                <Row>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup>
                        <Label for="exampleText"> Mã tin tức</Label>
                        <Input
                          disabled="true"
                          type="text"
                          name="id"
                          value={this.state.id}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">
                          Tên tin <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">{this.state.nameError}</div>
                        <Input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">
                          Thuộc hoạt động <span className="red-text">*</span>
                        </Label>
                        <div className="error-text">
                          {this.state.idhoatdongError}
                        </div>
                        <Input
                          type="select"
                          name="idhoatdong"
                          value={this.state.idhoatdong}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xl={6} lg={12} md={12}>
                    <Form>
                      <FormGroup>
                        <Label for="exampleImage"> Hình ảnh / Video</Label>
                        <Input
                          type="file"
                          name="image"
                          value={this.state.image}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText"> Tiêu đề thông báo</Label>
                        <Input
                          type="text"
                          name="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">
                          Đối tượng nhận thông báo
                        </Label>
                        <Input
                          type="select"
                          name="receiver"
                          value={this.state.receiver}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xl={12}>
                    <Form>
                      <Label for="exampleText">
                        Nội dung <span className="red-text">*</span>
                      </Label>
                      <div className="error-text">
                        {this.state.contentError}
                      </div>
                      <Input
                        type="textarea"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                      />
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <div className="center-text-submit">
              <Container>
                <Button color="danger" type="submit" pill className="px-4 my-3">
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
export default Tintucthem;

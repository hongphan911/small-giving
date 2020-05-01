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
  idhoatdong: '',
  image: '',
  content: '',
  title: '',
  receiver: '',

  idhoatdongError: '',
  nameError: '',
  contentError: '',
};

class Tintucsua extends React.Component {
  state = initialState;
  componentDidMount = () => {
    console.log('check>>>', this.props.chooseId);
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
          Sửa tin tức
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
                          value={this.props.chooseId}
<<<<<<< HEAD
=======
                          
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
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
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              name: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              name: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
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
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              idhoatdong: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              idhoatdong: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
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
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              image: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              image: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText"> Tiêu đề thông báo</Label>
                        <Input
                          type="text"
                          name="title"
                          value={this.state.title}
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              title: val.target.value,
                            });
=======
                          onChange={(val) => {
                            this.setState({
                              title: val.target.value
                            })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                          }}
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
<<<<<<< HEAD
                          onChange={val => {
                            this.setState({
                              receiver: val.target.value,
                            });
                          }}
                        />
=======
                          onChange={(val) => {
                            this.setState({
                              receiver: val.target.value
                            })
                          }}
                        >
                          <option>Tất cả mọi người</option>
                          <option>Người quyên góp cho hoạt động</option>
                          <option>người đăng kí nhận thông báo</option>
                          </Input>
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
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
<<<<<<< HEAD
                        onChange={val => {
                          this.setState({
                            content: val.target.value,
                          });
=======
                        onChange={(val) => {
                          this.setState({
                            content: val.target.value
                          })
>>>>>>> 47bc1659c20fb18ed2d0dbf973976b7549f50697
                        }}
                      />
                    </Form>
                  </Col>
                </Row>
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
export default Tintucsua;

import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  // FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

const initialState ={
  id:"",
  name:"",
  
  nameError:""
};

class Nhomndthem extends React.Component {
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
    let nameError = "";
   

    if (!this.state.name) {
        nameError ="Bạn chưa nhập tên nhóm!";
    }
    
    if (nameError){
      this.setState({ nameError});
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                        </Form>
                    </CardBody>
                    </Card>                     
                </Col>   
            </Row>
                <div className="center-text-submit">   
                  <Button color="danger" type="submit" pill className="px-4 my-3" >
                  Lưu
                </Button>
                </div>
      </Form>
    );
  }
}
export default Nhomndthem;
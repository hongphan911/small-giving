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
} from 'reactstrap';

const initialState ={
  id:"",
  name:"",
  money:"",
  
  moneyError:"",
};

class Diemdanhthem extends React.Component {
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
    let moneyError = "";

    if (!this.state.money) {
      moneyError ="Không được bỏ chống!";
    }
    
    if (moneyError ){
      this.setState({ moneyError});
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
            <Col xl={12} lg={12} md={12}>
                <Card>
                <CardBody className="pd-rancach">
                    <Form>
                    <FormGroup >
                    <Row>
                        <Col md={4}>
                    <Label for="exampleText"> Mã tài khoản</Label>
                    </Col>
                    <Col md={8}>
                        <Input
                            type="text"
                            name="id"
                            value={this.state.id}
                        onChange={this.handleChange}
                        />
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup >
                    <Row>
                        <Col md={4}>
                    <Label for="exampleText">Tên tài khoản</Label>
                    </Col>
                    <Col md={8}>
                    <Input 
                    type="text" 
                    name="name"
                    value={this.state.name}
                        onChange={this.handleChange} 
                    />
                    </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup >
                    <Row>
                        <Col md={4}>
                        <Label for="exampleText"> Số tiền cho mỗi lượt <span className="red-text">*</span></Label>
                        </Col>
                    <Col md={8}>
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
                    </FormGroup>                            
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
export default Diemdanhthem;
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
  startdate:"",
  enddate:"",
  url:"",
  patron:"",
  eachturn:"",
  total:"",
  
  nameError:"",
  urlError:"",
  eachturnError:"",
  totalError:"",
};

class WidgetPage extends React.Component {
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
    let urlError = "";
    let eachturnError = "";
    let totalError = "";

    if (!this.state.name) {
      nameError ="Không được bỏ chống!";
    }
    if (!this.state.url) {
      urlError ="Không được bỏ chống!";
    }
    if (!this.state.eachturn){
      eachturnError ="Không được bỏ chống!";
    }
    if (!this.state.total){
      totalError ="Không được bỏ chống!";
    }
    if (nameError || urlError || eachturnError || totalError ){
      this.setState({ nameError, urlError, eachturnError, totalError});
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
      <Card>
        <CardBody>

        
      <Row>
        
      <Col xl={6} lg={12} md={12}>
        
            <Form >
              <FormGroup >
              <Label for="exampleText">Mã khảo sát</Label>
                  <Input
                    type="text"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="exampleDate">Thời gian bắt đầu</Label>
                  
                  <Input
                    type="date"
                    name="startdate"
                    value={this.state.startdate}
                    onChange={this.handleChange}
                    
                  />
                </FormGroup>
              
              <FormGroup >
                <Label for="exampleEmail"> Thuộc nhà tài trợ</Label>
                <Input
                  type="email"
                  name="patron"
                  value={this.state.patron}
                  onChange={this.handleChange}
                  
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleNumber">Số tiền cho mỗi lượt khảo sát <span className="red-text">*</span></Label>
                <div className="error-text">
                  {this.state.eachturnError} 
                </div>
                  <Input
                    type="number"
                    name="eachturn"
                    value={this.state.eachturn}
                  onChange={this.handleChange}
                  />
              </FormGroup>
              
            </Form>
          
      </Col>

      <Col xl={6} lg={12} md={12}>
        
            <Form>
            <FormGroup >
              <Label for="exampleText">Tên khảo sát <span className="red-text">*</span></Label>
              <div className="error-text">
                  {this.state.nameError} 
                </div>
              <Input 
              type="text"
               name="name" 
               value={this.state.name}
                  onChange={this.handleChange}
               />
              </FormGroup>
            
              <FormGroup>
                  <Label for="exampleDate">Thời gian kết thúc</Label>
                  <Input
                    type="date"
                    name="enddate"
                    value={this.state.enddate}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup >
                <Label for="exampleUrl">Link khảo sát <span className="red-text">*</span></Label>
                <div className="error-text">
                  {this.state.urlError} 
                </div>
                <Input type="url" 
                name="url" 
                value={this.state.url}
                  onChange={this.handleChange}
                />
              </FormGroup>
                <FormGroup>
                <Label for="exampleNumber">Tổng tiền khảo sát <span className="red-text">*</span></Label>
                <div className="error-text">
                  {this.state.totalError} 
                </div>
                  <Input
                    type="number"
                    name="total"
                    value={this.state.total}
                  onChange={this.handleChange}

                  />
              </FormGroup>
              
            </Form>
          
      </Col>
    </Row>
    </CardBody>
      </Card>
      <div className="center-text-submit">
    
                  <Button color="danger" type="submit" pill className="px-4 my-3" >
                  Đăng tải
                </Button>
                </div>
      </Form>
    );
  }
}
export default WidgetPage;
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
  image:"",
  content:"",
  address:"",
  total:"",
  
  totalError:"",
  nameError:"",
  imageError:"",
  contentError:"",
};

class Hoatdongsua extends React.Component {
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
    let totalError = "";
    let nameError = "";
    let imageError = "";
    let contentError = "";

    if (!this.state.name) {
        nameError ="Không được bỏ trống!";
    }
    if (!this.state.total) {
        totalError ="Không được bỏ trống!";
    }
    if (!this.state.content){
        contentError ="Không được bỏ trống!";
    }
    if (!this.state.image){
        imageError ="Bạn chưa chọn ảnh/video!";
    }
    if (totalError || nameError || imageError || contentError ){
      this.setState({ totalError, nameError, imageError, contentError});
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
                      
                          <Form>
                            <FormGroup >
                            <Label for="exampleText"> Mã họat động</Label>
                                <Input 
                                disabled="true"
                                type="text" 
                                name="id"
                                value={this.state.id}
                                onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">Ngày bắt đầu</Label>
                                <Input
                                  type="date"
                                  name="startdate"
                                  value={this.state.startdate}
                                    onChange={this.handleChange}
                                />
                              </FormGroup>
                              <FormGroup >
                            <Label for="exampleText"> Địa chỉ</Label>
                                <Input  
                                type="text"  
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                />
                            </FormGroup>                           
                          </Form>                        
                    </Col>
                    <Col xl={6} lg={12} md={12}>                     
                          <Form>
                          <FormGroup>
                              <Label for="exampleText">Tên hoạt động <span className="red-text">*</span></Label>
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
                                <Label for="exampleDate">Ngày kết thúc </Label>
                                <Input
                                  type="date"
                                  name="enddate"
                                  value={this.state.enddate}
                                onChange={this.handleChange}
                                />
                              </FormGroup>
                              
                              <FormGroup >
                            <Label for="exampleNumber"> Tổng tiền dự kiến <span className="red-text">*</span></Label>
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
                      <Col xl={12}>
                      <Form>
                                <Label for="exampleImage"> Hình ảnh / Video <span className="red-text">*</span></Label>
                                <div className="error-text">
                                {this.state.imageError} 
                            </div>
                                <Input 
                                type="file" 
                                name="image" 
                                value={this.state.image}
                                onChange={this.handleChange}
                                />
                              </Form>
                        <Form>
                            <Label for="exampleText">Nội dung <span className="red-text">*</span></Label>
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
                  <Button color="danger" type="submit" pill className="px-4 my-3" >
                  Cập nhật
                </Button>
                </div>
      </Form>
    );
  }
}
export default Hoatdongsua;
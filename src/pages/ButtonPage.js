import React from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import Page from 'components/Page';

class ButtonPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Page
        className="ButtonPage"
        title="Buttons"
        breadcrumbs={[{ name: 'buttons', active: true }]}
      >
        

        

        <Row>
          <Col>
            <Card className="mb-3">
              
              <CardBody>
                <CardSubtitle>Tính năng</CardSubtitle>
                
                  <div>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 1 })}
                    active={this.state.rSelected === 1}
                  >
                  
                  </Button> one<br/>

                  </div>
                  <div>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 2 })}
                    active={this.state.rSelected === 2}
                  >
                    
                  </Button>Two<br/>

                  </div>
                  <div>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 3 })}
                    active={this.state.rSelected === 3}
                  >
                    
                  </Button>Three <br/>

                  </div>
              </CardBody>






              <CardBody>
                <CardSubtitle>Quyền</CardSubtitle>
                
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >
                    
                  </Button>Thêm<br/>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >
                    
                  </Button>Sửa<br/>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(3)}
                    active={this.state.cSelected.includes(3)}
                  >
                    
                  </Button>Xóa<br/>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(4)}
                    active={this.state.cSelected.includes(4)}
                  >
                    
                  </Button>Duyệt<br/>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(5)}
                    active={this.state.cSelected.includes(5)}
                  >
                    
                  </Button>Đăng tải<br/>
              
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ButtonPage;

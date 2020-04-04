import Page from 'components/Page';
import React from 'react';
import Tintucthem from 'pages/tintucthem'
import Tintucsua from 'pages/tintucsua'
import Tintucxoa from 'pages/tintucxoa'
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
class InputGroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal_nested_parent: false,
      modal_nested:false,
      modal_nested_sua:false,
      modal_nested_xoa:false
    };
  }
  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    fetch('https://misappmobile.000webhostapp.com/trangquantri/showtintuc.php')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            data: data,
          }, () => console.log('kiemtradulieu', this.state.data),
        );
      });
  };
  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };
  render() {
    return (
      <Page
        className="InputGroupPage"
        title="Tin tức"
        breadcrumbs={[{name:'quản trị hoạt động tình nguyện'},{ name: 'Tin tức', active: true }]}
      >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
                    <CardBody>
                      <Badge color="danger" pill className=" mb-3 p-2 can-click" onClick={this.toggle('nested_parent')}>
                      + Thêm mới
                      </Badge>
                      <Modal
                  isOpen={this.state.modal_nested_parent}
                  toggle={this.toggle('nested_parent')}
                  size="lg"
                  className={this.props.className}>
                  <ModalHeader className="text-danger" toggle={this.toggle('nested_parent')}>
                   Thêm mới tin tức
                  </ModalHeader>
                  <ModalBody>
                      <Tintucthem/>       
                  </ModalBody>
                  </Modal>
                      <Table {...{ [tableType || 'hover']: true }}>
                        <thead>
                          <tr className="table-danger ">                                                        
                            <th> ID</th> 
                            <th> Tên Tin</th>
                            <th> Tiêu đề thông báo</th>
                            <th> Tác vụ</th>  
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((Item, index) => {
                          return (
                          <tr>                          
                            <td>{Item.idTin}</td>
                            <td>{Item.TenTin}</td>
                            <td>{Item.TieuDeThongBao}</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_sua}
                                  toggle={this.toggle('nested_sua')}
                                  size="lg"
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_sua')}>
                                      Sửa tin tức
                                  </ModalHeader>
                                  <ModalBody>
                                  <Tintucsua/>
                                  </ModalBody>
                                  </Modal>   
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              <Modal
                                  isOpen={this.state.modal_nested_xoa}
                                  toggle={this.toggle('nested_xoa')}
                                  className={this.props.className}>
                                  <ModalHeader className="text-danger" toggle={this.toggle('nested_xoa')}>
                                      Xóa tin tức
                                  </ModalHeader>
                                  <ModalBody>
                                  <Tintucxoa/>
                                  </ModalBody>
                                  </Modal>                          
                            </td>
                          </tr>
                          );
                        })}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                  </Col>
                  </Row>
      ))}
      </Page>
    );
  }
}
export default InputGroupPage;
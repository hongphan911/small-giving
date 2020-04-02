import Page from 'components/Page';
import React from 'react';
import Tintucthem from 'pages/tintucthem'
import Tintucsua from 'pages/tintucsua'
import Tintucxoa from 'pages/tintucxoa'
import { Card, CardBody, Col, Row, Table, Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {FaEdit} from 'react-icons/fa';
import{MdDelete} from'react-icons/md';
const tableTypes = ['hover'];
class tinhd extends React.Component {
  state = {
    modal_nested_parent: false,
    modal_nested: false,
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
        className="tinhd"
        title="Tin tức"
        breadcrumbs={[{name:'quản trị hoạt động thiện nguyện'},{ name: 'Tin tức', active: true }]}
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
                            <th> STT</th>
                            <th> Mã Tin</th>
                            <th> Tên tin</th> 
                            <th> Nội dung</th>
                            <th> Tác vụ</th>  
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">1</th>
                            <td>ffđf</td>
                            <td>Otto</td>
                            <td>fdfkmelke </td> 
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
                          <tr>
                          <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Mkjfe</td>
                            <td></td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>djiojnkmvef</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>cndkndkfewokfmf</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>fedjgkewmgew</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              
                            </td>
                          </tr>
                          <tr>
                          <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>dfheiunwelkgm</td> 
                            <td>
                              <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                              <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                              
                              </td>
                          </tr>
                        <tr>
                        <th scope="row">7</th>
                            <td>Wendy</td>
                            <td>the Magic</td>
                            <td>cbdijgnewwigeoig</td> 
                            <td>
                            <FaEdit className="can-click " size="1.5em" onClick={this.toggle('nested_sua')}/>
                            <MdDelete className="can-click" size="1.5em" onClick={this.toggle('nested_xoa')}/>
                            
                            </td>
                          </tr>
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
export default tinhd;
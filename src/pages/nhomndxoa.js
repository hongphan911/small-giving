import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
class Nhomndxoa extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          {' '}
          <p>Bạn có chắc chắn muốn xóa nhóm người dùng này ?</p>{' '}
        </CardBody>
        <Button color="danger" pill className="px-4 my-3">
          Xóa
        </Button>
      </Card>
    );
  }
}
export default Nhomndxoa;

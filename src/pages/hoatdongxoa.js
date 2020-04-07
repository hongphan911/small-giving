import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
class Hoatdongxoa extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          {' '}
          <p>Bạn có chắc chắn muốn xóa hoạt động này ?</p>{' '}
        </CardBody>
        <Button color="danger" pill className="px-4 my-3">
          Xóa
        </Button>
      </Card>
    );
  }
}
export default Hoatdongxoa;

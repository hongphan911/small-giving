// import { AnnouncementCard, TodosCard } from 'components/Card';
// import HorizontalAvatarList from 'components/HorizontalAvatarList';
// import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
// import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
// import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  // avatarsData,
  chartjs,
  productsData,
  //supportTicketsData,
  //todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React  
// { Component }  
from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
// import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  //Button,
  Card,
  CardBody,
  //CardDeck,
  CardGroup,
  CardHeader,
  //CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';
// import axios from 'axios';

// const today = new Date();
// const lastWeek = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate() - 7,
// );

// <<<<<<< HEAD
class trangchu extends React.Component {
// =======
// class DashboardPage extends React.Component {
  
// >>>>>>> 9e521ffdf9f189a38aba87b788b161a8e2a29758
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
    

  }

  render() {
    const primaryColor = getColor('primary');
   // const dangerColor = getColor('danger');

    return (
      
      
      <Page
        className="trangchu"
        title="Dashboard"
        breadcrumbs={[{ name: 'Trang chủ', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Người dùng"
              
              number="5 600"
              
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Hoạt động thiện nguyện"
              
              number="35"
              
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Trả lời khảo sát"
              
              number="3 400"
              
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Lượt quyên góp"
              
              number="12 000 000"
             
            />
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Tổng quyên góp{' '}
                <small className="text-muted text-capitalize">2020</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Đầu tư người dùng</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Nạp tiền{' '}
                  <Badge color="danger">20.000.000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Trả lời khảo sát{' '}<Badge color="danger">18.000.000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Xem quảng cáo{' '}
                  <Badge color="danger">0</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Khác{' '}
                 <Badge color="danger">0</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
        </CardGroup>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Hoạt động thiện nguyện gần đây</CardHeader>
              <CardBody>
                {productsData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  ),
                )}
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Người dùng mới</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'Họ tên',
                    'Thời gian',
                    'Số Tiền',                  
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </Page>
      
    );
  }
}
export default trangchu;

import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
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
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Tổng tài trợ"
              subtitle="Tháng này"
              number="20.000.000"
              color="secondary"
              progress={{
                value: 75,
                label: 'Tháng trước',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Người dùng"
              subtitle="Tháng này"
              number="5.400"
              color="secondary"
              progress={{
                value: 45,
                label: 'Tháng trước',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Tổng hoạt động"
              subtitle="Tháng này"
              number="28"
              color="secondary"
              progress={{
                value: 90,
                label: 'Tháng trước',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Quyên góp"
              subtitle="Tháng này"
              number="38.000.000"
              color="secondary"
              progress={{
                value: 60,
                label: 'Tháng trước',
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Tổng quyên góp{' '}
                <small className="text-muted text-capitalize">Năm nay</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Tổng đầu tư người dùng</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Nạp tiền{' '}
                  <Badge color="secondary">18.000.000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Trả lời khảo sát <Badge color="secondary">20.000.000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Xem quảng cáo{' '}
                  <Badge color="secondary">0</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Nguồn khác <Badge color="secondary">0</Badge>
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
                    'name',
                    'date',
                    'participation',
                    '%',
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
export default DashboardPage;

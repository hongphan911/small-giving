import React from 'react';
import PropTypes from 'utils/propTypes';

import { Table, Progress } from 'reactstrap';

import Avatar from 'components/Avatar';

import withBadge from 'hocs/withBadge';

const AvatarWithBadge = withBadge({
  position: 'bottom-right',
  color: 'success',
})(Avatar);

const UserProgressTable = ({ headers, usersData, ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ avatar, name,date, number }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">
              <AvatarWithBadge src={avatar} />
            </td>
            <td className="align-middle text-center">{name}</td>
            <td className="align-middle text-center">{date}</td>
            <td className="align-middle text-center">{number}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UserProgressTable.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
      number: PropTypes.number,
    })
  ),
};

UserProgressTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default UserProgressTable;

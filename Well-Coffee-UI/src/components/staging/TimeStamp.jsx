import React from 'react';
import moment from 'moment';
import { Button, Modal, Badge, Card, ListGroup, Form } from 'react-bootstrap';

const TimeStamp = () => {
  const currentDate = moment().format('MMMM Do YYYY, h:mma');
  return <ListGroup.Item variant="info">{currentDate}</ListGroup.Item>;
};

export default TimeStamp;
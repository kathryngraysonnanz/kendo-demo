import * as React from 'react';
import { TaskBoardCard, TaskBoardCardHeader } from '@progress/kendo-react-taskboard';
import { CardBody } from '@progress/kendo-react-layout';
import { cards } from './cards';
const images = {};
cards.forEach(card => {
  images[String(card.id)] = card.image;
});

const CardHeaderComponent = props => {
  return <TaskBoardCardHeader {...props} title={props.task.description} />;
};

const CardBodyComponent = props => {
  return <CardBody>
      <p>Priority: {props.task.priority.priority}</p>
      </CardBody>;
};

export const Card = props => {
  return <TaskBoardCard {...props} cardHeader={CardHeaderComponent} cardBody={CardBodyComponent} />;
};

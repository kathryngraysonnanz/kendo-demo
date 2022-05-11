import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';
import { Input } from '@progress/kendo-react-inputs';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { TaskBoardColumn } from '@progress/kendo-react-taskboard';
const themeColor = {
  'todo': 'warning',
  'inProgress': 'info',
  'done': 'success'
};

const ColumnHeader = props => {
  const {
    edit,
    title,
    status
  } = props.column;
  return <div className={'k-taskboard-column-header'}>
        <div className={'k-taskboard-column-header-text k-text-ellipsis'}>
          {edit ? <Input value={title} onChange={props.onTitleChange} onBlur={props.onColumnExitEdit} autoFocus={true} /> : <>
                <BadgeContainer style={{
          left: '12px',
          top: '-4px'
        }}>
                  <Badge themeColor={themeColor[status]} style={{
            zIndex: 0
          }}>
                    {props.tasks && props.tasks.length}
                  </Badge>
                </BadgeContainer>
                <span style={{
          marginLeft: '30px'
        }}>{title}</span>
              </>}
        </div>
        <span className={'k-spacer'} />
        <div className={classNames('k-taskboard-column-header-actions', {
      'k-disabled': edit
    })}>
          <Button fillMode="flat" icon="edit" title={props.editButtonTitle} onClick={props.onColumnEnterEdit} />
          <Button fillMode="flat" icon="add" title={props.addButtonTitle} onClick={props.onShowAddCardDialog} />
          <Button fillMode="flat" icon="close" title={props.closeButtonTitle} onClick={props.onColumnDelete} />
        </div>
      </div>;
};

export const Column = props => {
  return <TaskBoardColumn {...props} header={ColumnHeader} />;
};

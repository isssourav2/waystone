import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

function Step5() {
  const [cont, SetCont] = React.useState(true);

  const itemsFromBackend = [
    { id: uuid(), content: cont && <input type="text" /> },
    { id: uuid(), content: 'Second task' },
    { id: uuid(), content: 'Third task' },
    { id: uuid(), content: 'Fourth task' },
    { id: uuid(), content: 'Fifth task' },
  ];

  const columnsFromBackend = {
    [uuid()]: {
      name: 'Requested',
      items: itemsFromBackend,
    },
    [uuid()]: {
      name: 'Todo',
      items: [],
    },
    [uuid()]: {
      name: 'InProgress',
      items: [],
    },
    [uuid()]: {
      name: 'Done',
      items: [],
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const [columns, setColumns] = useState(columnsFromBackend);
  console.log('columns ', columns);
  let classesdrag = 'drag-col-paper';
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        margin: '0px -4px',
      }}
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="drag-wrap-col" key={columnId}>
              <h2>{column.name}</h2>

              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className="drag-col"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    className={'drag-col-paper ' + column.name}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Step5;

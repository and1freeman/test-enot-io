import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import ColoredVerticalDash from './ColoredVerticalDash';
import ExpandIcon from './ExpandIcon';
import Todo from './Todo';
import { TodoData } from './types';

interface TodoGroupProps {
  headerText?: string;
  todos: TodoData[];
}

const TodoGroupHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ColoredVerticalDash />
      <Typography
        sx={{
          ml: 3,
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

const colors = ['#ff0000', '#366eff', '#ffeb33'];

const TodoGroup = ({ todos, headerText }: TodoGroupProps) => {
  return (
    <Box
      component="article"
      sx={{
        overflow: 'hidden',
        borderRadius: '25px',
        boxShadow: `-8px -8px 20px 0px #FFFFFF0D,
              16px 16px 20px 0px #00000026`,
        p: 4,
      }}
    >
      <Accordion
        sx={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        {headerText && (
          <AccordionSummary expandIcon={<ExpandIcon />}>
            <TodoGroupHeader>{headerText}</TodoGroupHeader>
          </AccordionSummary>
        )}

        <AccordionDetails
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            mt: 5,
          }}
        >
          {todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                color={colors[index % colors.length]}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TodoGroup;

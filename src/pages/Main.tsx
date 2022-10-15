import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useAppContext, useHandlersContext } from '../app/context';
import { Header } from '../components/header';
import { AddTodoForm, TodoGroup, useTodos } from '../components/todo';
import RunningLine from '../components/running-line';

const Main = () => {
  const { addTodo, toggleTodayTodos } = useHandlersContext();
  const {
    ui: { areTodayTodosShown },
  } = useAppContext();

  const [todaysTodos, todosChunksByDate] = useTodos();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Header />

      <Box
        sx={{
          px: 9,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={toggleTodayTodos} />}
          label={<Typography sx={{ fontSize: 24 }}>Today Tasks:</Typography>}
        />
        <Button
          sx={{
            fontWeight: '700',
            fontSize: 24,
          }}
          onClick={openDialog}
        >
          +
        </Button>
      </Box>

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <AddTodoForm onOk={addTodo} />
      </Dialog>

      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          px: 5,
          py: 4,
        }}
      >
        {todaysTodos && areTodayTodosShown && <TodoGroup todos={todaysTodos} />}

        {todosChunksByDate.map(([chunkDate, chunk]) => {
          return (
            <TodoGroup
              key={chunkDate}
              headerText={chunkDate + ' Tasks'}
              todos={chunk}
            />
          );
        })}
      </Box>
      <RunningLine />
    </Box>
  );
};

export default Main;

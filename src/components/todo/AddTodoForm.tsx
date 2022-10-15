import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { TodoData } from './types';
import { v4 as uuid4 } from 'uuid';

interface AddTodoFormProps {
  open?: boolean;
  onClose?: () => void;
  onOk: (data: TodoData) => void;
}

const AddTodoForm = ({ open, onClose, onOk }: AddTodoFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const todoData = {
      id: uuid4(),
      completed: false,
      ...Object.fromEntries(formData.entries()),
    } as TodoData;

    onOk(todoData);
  };

  const today = moment();
  const [date, setDate] = useState(today);

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        p: 2,
      }}
      component="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <h1>Add todo</h1>
      <TextField name="name" size="small" label="Name" fullWidth autoFocus />
      <TextField
        name="description"
        size="small"
        label="Description"
        multiline
        fullWidth
        rows={5}
      />
      <DatePicker
        value={date}
        renderInput={(params) => <TextField name="date" {...params} />}
        minDate={today}
        onChange={(value) => {
          setDate(moment(value));
        }}
      />
      <Button variant="contained" type="submit">
        Add todo
      </Button>
    </Box>
  );
};

export default AddTodoForm;

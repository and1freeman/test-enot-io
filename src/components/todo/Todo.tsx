import { Box, Typography } from '@mui/material';
import { useHandlersContext } from '../../app/context';
import ColoredVerticalDash from './ColoredVerticalDash';
import CustomSwitch from './CustomSwitch';
import { TodoData } from './types';

const Todo = ({
  id,
  name,
  description,
  completed,
  color,
}: TodoData & { color?: string }) => {
  const { toggleTodo } = useHandlersContext();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ColoredVerticalDash color={color} />
      <Box sx={{ ml: 3, flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 600,
            textDecoration: completed ? 'line-through from-font' : undefined,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: '#ffffff',
            opacity: 0.6,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: 200,
            whiteSpace: 'nowrap',
          }}
        >
          {description}
        </Typography>
      </Box>
      <CustomSwitch checked={completed} onChange={() => toggleTodo(id)} />
    </Box>
  );
};

export default Todo;

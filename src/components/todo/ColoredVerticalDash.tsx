import { Box } from '@mui/material';

const ColoredVerticalDash = ({
  color = 'secondary.main',
}: {
  color?: string;
}) => {
  return (
    <Box
      sx={{
        width: 5,
        height: 40,
        backgroundColor: color,
        borderRadius: 3,
        flexShrink: 0,
      }}
    />
  );
};

export default ColoredVerticalDash;

import { styled } from '@mui/material/styles';
import { Switch, SwitchProps } from '@mui/material';

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2.5,
    transitionDuration: '150ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: 'primary.main',
      '& + .MuiSwitch-track': {
        backgroundColor: '#10c200',
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        backgroundImage: `url('data:image/svg+xml;utf-8,<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z" fill="${encodeURIComponent(
          '#a9a9a9'
        )}"/></svg>')`,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25,
    backgroundImage: `url('data:image/svg+xml;utf-8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z" fill="${encodeURIComponent(
      '#a9a9a9'
    )}"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: '#366eff',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default CustomSwitch;

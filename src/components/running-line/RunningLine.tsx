import { useQuery } from '@tanstack/react-query';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { Response } from './types';
import { useAppContext } from '../../app/context';
import { Box } from '@mui/material';

const NEWS_URL = 'https://content.guardianapis.com/search';

const fetchNews = async () => {
  const response = await fetch(
    NEWS_URL + '?api-key=' + process.env.REACT_APP_NEWS_API_KEY
  );

  const news = (await response.json()) as { response: Response };

  return news.response.results[0].webTitle;
};

const run = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

const RunningLineAnimation = styled('div')({
  display: 'inline-block',
  animation: `${run} 15s linear infinite`,
  whiteSpace: 'nowrap',
  paddingLeft: '100%',
});

const RunningLine = () => {
  const { data } = useQuery(['news'], fetchNews);
  const {
    ui: { isRunningLineShown },
  } = useAppContext();

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {data && (
        <RunningLineAnimation>
          {isRunningLineShown && <Box>{data}</Box>}
        </RunningLineAnimation>
      )}
    </Box>
  );
};

export default RunningLine;

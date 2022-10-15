import { useMemo } from 'react';
import moment from 'moment';
import { useAppContext } from '../../app/context';

const splitIntoChunks = <Item extends { [key: string]: any }>(
  array: Item[],
  propName: keyof Item
) => {
  return array.reduce<Map<string, Item[]>>((acc, el) => {
    const value = el[propName];
    const list = acc.get(value) || [];

    list.push(el);

    acc.set(value, list);

    return acc;
  }, new Map());
};

const useTodos = () => {
  const { todos } = useAppContext();

  const today = moment().format('l');
  const todosMap = useMemo(() => splitIntoChunks(todos, 'date'), [todos]);

  const todaysTodos = todosMap.get(today);

  const todosChunksByDate = useMemo(() => {
    let list = Array.from(todosMap).sort((a, b) => {
      return moment(a[0]).diff(moment(b[0]));
    });

    const tomorrow = moment().add(1, 'days').format('l');

    if (todaysTodos) {
      list = list.filter(([date]) => date !== today);
    }

    if (todosMap.get(tomorrow)) {
      list = list.map(([date, dateTodos]) => {
        if (date === tomorrow) {
          return ['Tomorrow', dateTodos];
        }

        return [date, dateTodos];
      });
    }

    return list;
  }, [todosMap, todaysTodos, today]);

  return [todaysTodos, todosChunksByDate] as const;
};

export default useTodos;

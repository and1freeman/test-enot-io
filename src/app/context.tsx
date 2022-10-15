import { v4 as uuid4 } from 'uuid';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { TodoData, TodoEvent } from '../components/todo';

type UIEvent =
  | {
      type: 'ui/toggle-running-line';
    }
  | {
      type: 'ui/toggle-today-todos';
    };

export type Event = UIEvent | TodoEvent;

export type State = {
  ui: {
    areTodayTodosShown: boolean;
    isRunningLineShown: boolean;
  };
  todos: TodoData[];
};

type Handlers = {
  toggleTodo: (id: string) => void;
  addTodo: (data: TodoData) => void;
  toggleTodayTodos: () => void;
  toggleRunningLine: () => void;
};

interface TodoProviderProps {
  children: ReactNode;
}

const AppContext = createContext<State>(null!);
const HandlersContext = createContext<Handlers>(null!);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const useHandlersContext = () => {
  return useContext(HandlersContext);
};

const initialState: State = {
  ui: {
    areTodayTodosShown: true,
    isRunningLineShown: true,
  },
  todos: [
    {
      id: uuid4(),
      date: '11/27/2022',
      name: 'First todo',
      description: 'Some long task description',
      completed: false,
    },
    {
      id: uuid4(),
      date: '11/28/2022',
      name: 'Second todo',
      description: 'some description',
      completed: true,
    },
    {
      id: uuid4(),
      date: '11/28/2022',
      name: 'Third todo',
      description: '',
      completed: true,
    },
    {
      id: uuid4(),
      date: '11/29/2022',
      name: '1',
      description: '',
      completed: false,
    },
  ],
};

export const reducer = (state: State, event: Event): State => {
  if (event.type === 'ui/toggle-today-todos') {
    return {
      ...state,
      ui: {
        ...state.ui,
        areTodayTodosShown: !state.ui.areTodayTodosShown,
      },
    };
  }

  if (event.type === 'ui/toggle-running-line') {
    return {
      ...state,
      ui: {
        ...state.ui,
        isRunningLineShown: !state.ui.isRunningLineShown,
      },
    };
  }

  if (event.type === 'todo/add') {
    const todos = [...state.todos, event.data];

    return { ...state, todos };
  }

  if (event.type === 'todo/toggle') {
    const todos = state.todos.map((todo) => {
      if (todo.id === event.data.id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    return { ...state, todos };
  }

  return state;
};

const AppProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTodo = useCallback((id: string) => {
    dispatch({ type: 'todo/toggle', data: { id } });
  }, []);

  const addTodo = useCallback((data: TodoData) => {
    dispatch({ type: 'todo/add', data });
  }, []);

  const toggleTodayTodos = useCallback(() => {
    dispatch({ type: 'ui/toggle-today-todos' });
  }, []);

  const toggleRunningLine = useCallback(() => {
    dispatch({ type: 'ui/toggle-running-line' });
  }, []);

  const handlers: Handlers = useMemo(
    () => ({
      toggleTodo,
      addTodo,
      toggleTodayTodos,
      toggleRunningLine,
    }),
    [toggleTodo, addTodo, toggleTodayTodos, toggleRunningLine]
  );

  return (
    <HandlersContext.Provider value={handlers}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </HandlersContext.Provider>
  );
};

export default AppProvider;

import create from 'zustand';

type IZustand = {
    todo: Array<any>
    addTodo: (payload: string) => void
    updateTodo: (todo: string, id: number) => void
    deleteTodo: (id: number) => void
}

const useStore = create<IZustand>((set, get) => ({
    todo: [],
    addTodo: (todos) => {
        set(state => ({
            todo: [
                ...state.todo,
                {
                    id: Math.random() * 100,
                    title: todos,
                }
            ]
        }))
    },
    updateTodo: (todo, id) => {
        set((state) => ({
            todo: state.todo.map(items => {
                if (items.id === id) {
                    return {
                        ...items,
                        id: items.id,
                        title: todo
                    }
                } else {
                    return items
                }
            })
        }))
    },
    deleteTodo: (id) => {
        set((state) => ({ todo: state.todo.filter(item => item.id !== id) }))
    }
}));

export default useStore;
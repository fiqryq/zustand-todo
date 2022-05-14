import create from 'zustand';

type IZustand = {
    todo: Array<ITodo>
    addTodo: (payload: string) => void
    updateTodo: (item: string, id: number) => void
    getTodo: () => Array<any>
    deleteTodo: (id: number) => void
}

type ITodo = {
    title: string
}

const useStore = create<IZustand>((set, get) => ({
    todo: [],
    addTodo: (todos) => {
        set(state => ({
            todo: [
                ...state.todo,
                {
                    title: todos,
                }
            ]
        }))
        localStorage.setItem('todo', JSON.stringify(get().todo))
    },
    getTodo: () => {
        const data: any = localStorage.getItem('todo')
        return JSON.parse(data)
    },
    updateTodo: (item, id) => {
    },
    deleteTodo: (id) => {
        const parse: any = localStorage.getItem('todo')
        const data = JSON.parse(parse)
        const newData = data.filter((item: any, idx: number) => idx !== id)
        localStorage.setItem('todo', JSON.stringify(newData))
    }
}));

export default useStore;
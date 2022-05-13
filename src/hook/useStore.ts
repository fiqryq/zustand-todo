import create from 'zustand';

type IZustand = {
    todo: Array<any>
    addTodo: (payload: string) => void
    updateTodo: (payload: any) => void
}

const useStore = create<IZustand>((set, get) => ({
    todo: [],
    addTodo: (todos: any) => {
        set((state) => ({ todo: [...state.todo, todos] }))
    },
    updateTodo: (data) => {
        console.log(data, data)
    },
    deleteTodo: () => {

    }
}));

export default useStore;
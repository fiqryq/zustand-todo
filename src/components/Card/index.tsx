import { FiMoreVertical, FiEdit, FiDelete } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import useStore from "../../hook/useStore";

type ICard = {
  todo: string;
  id: number;
};

export const Card = (props: ICard) => {
  const state = useStore();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    state.updateTodo(data.todo, props.id);
    setOpen(false);
    reset();
  };

  return (
    <div className="flex w-full cursor-pointer items-center justify-between rounded-md bg-slate-200/30 p-5 hover:bg-slate-500/10">
      <p className="truncate pr-6">{props.todo}</p>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FiMoreVertical />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setOpen(true)}
                    className={`${
                      active ? "bg-sky-800 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiEdit className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <FiEdit className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-sky-800 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => state.deleteTodo(props.id)}
                  >
                    {active ? (
                      <FiDelete className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <FiDelete className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Modal
        title="What do you want to do?"
        open={open}
        close={() => setOpen(false)}
        children={
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="w-full rounded-md border-2 border-sky-800/50 p-2"
              {...register("todo", { required: true, value: props.todo })}
            />
            {errors.todo && (
              <span className="text-red-500">This field is required</span>
            )}
            <button
              className="mt-3 w-full rounded-md bg-sky-700 p-2 text-white hover:bg-sky-800"
              type="submit"
            >
              Submit
            </button>
          </form>
        }
      />
    </div>
  );
};

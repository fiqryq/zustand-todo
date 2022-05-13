import Modal from "../Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Fab = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div
        className="fixed right-32 bottom-8 cursor-pointer rounded-full bg-sky-700 p-3 px-5 font-bold text-white hover:bg-sky-800"
        onClick={() => setOpen(true)}
      >
        +
      </div>
      <Modal
        title="What do you want to do?"
        open={open}
        close={() => setOpen(false)}
        children={
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="w-full rounded-md border-2 border-sky-800/50 p-2"
              {...register("todo", { required: true })}
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
    </>
  );
};

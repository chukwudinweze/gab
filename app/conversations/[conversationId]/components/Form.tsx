"use client";

import useConversation from "@/app/hook/useConversation";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    register,
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      conversationId,
      ...data,
    });
  };
  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
      <HiPhoto size={30} className="text-sky-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="write a message"
        />
      </form>
    </div>
  );
};

export default Form;

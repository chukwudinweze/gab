"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  requred?: string;
  register: UseFormRegister<FieldValues>;
}

const MessageInput = () => {
  return <div>MessageInput</div>;
};

export default MessageInput;

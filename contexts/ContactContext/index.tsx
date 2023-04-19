import React, { createContext, FC, useState } from "react";

interface IContext {
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const ContactContext = createContext<IContext>({
  isError: false,
  setIsError: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isSuccess: false,
  setIsSuccess: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isLoading: false,
  setIsLoading: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  message: "",
  setMessage: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

interface Props {
  children: React.ReactNode;
}

export const ContactContextProvider: FC<Props> = ({ children }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <ContactContext.Provider
      value={{
        isError,
        setIsError,
        isSuccess,
        setIsSuccess,
        isLoading,
        setIsLoading,
        message,
        setMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

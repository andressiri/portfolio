import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ContactContext } from "contexts";
import { validateEmail } from "utils/helpers";
import { useSendContactEmail } from "services";
import { IFormData, IInputsVisited } from "typings/contact";

const useGetFormHandlers = () => {
  const {
    isError,
    setIsError,
    isSuccess,
    setIsSuccess,
    isLoading,
    message,
    setMessage,
  } = useContext(ContactContext);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [inputsVisited, setInputsVisited] = useState<IInputsVisited>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const resetMessage = useRef<NodeJS.Timeout | null>(null);
  const { sendContactEmail } = useSendContactEmail();

  useEffect(() => {
    if (isSuccess) {
      setIsError(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setInputsVisited({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
      resetMessage.current = setTimeout(() => {
        setIsSuccess(false);
        setMessage("");
      }, 15000);
    }

    if (isError) {
      setIsSuccess(false);
      resetMessage.current = setTimeout(() => {
        setIsError(false);
        setMessage("");
      }, 15000);
    }
  }, [isError, isSuccess, formData, setIsError, setIsSuccess, setMessage]);

  useEffect(() => {
    if (isLoading) {
      if (resetMessage.current) clearTimeout(resetMessage.current);
      setIsError(false);
      setIsSuccess(false);
      setMessage("");
    }
  }, [isLoading, setIsError, setIsSuccess, setMessage]);

  useEffect(() => {
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        setDisableSubmit(true);
        return;
      }
    }

    if (!validateEmail(formData.email)) {
      setDisableSubmit(true);
      return;
    }

    setDisableSubmit(false);
  }, [formData]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleVisited = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (inputsVisited[e.target.name as keyof typeof inputsVisited]) return;

      setInputsVisited({
        ...inputsVisited,
        [e.target.name]: true,
      });
    },
    [inputsVisited]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (!disableSubmit) sendContactEmail({ formData });
    },
    [formData, disableSubmit, sendContactEmail]
  );

  return {
    formData,
    inputsVisited,
    disableSubmit,
    handleOnChange,
    handleVisited,
    handleSubmit,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useGetFormHandlers;

import { useCallback, useEffect, useRef, useState } from "react";
import { GeneralProps } from "typings/customSelector";

type Props = Omit<GeneralProps, "optionsKey">;

const useGetControllers = ({
  options,
  icons,
  images,
  optionSelectAction,
  initialSelect,
  globalOptionSelected,
}: Props) => {
  const optionSelected = useRef<number>(initialSelect ? initialSelect - 1 : 0);
  const [selectedOptionText, setSelectedOptionText] = useState<string>(
    !options ? "" : initialSelect ? options[initialSelect - 1] : options[0]
  );
  const [iconSrc, setIconSrc] = useState<JSX.Element | null>(
    !icons ? null : initialSelect ? icons[initialSelect - 1] : icons[0]
  );
  const [imageSrc, setImageSrc] = useState<string>(
    !images ? "" : initialSelect ? images[initialSelect - 1] : images[0]
  );
  const [optionToChange, setOptionToChange] = useState<number>(
    initialSelect ? initialSelect - 1 : 0
  );
  const [selectFocus, setSelectFocus] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const focused = useRef(false);
  const textBackup = useRef<string>("");
  const iconBackup = useRef<JSX.Element | null>(null);
  const imageBackup = useRef<string>("");
  const optionToChangeBackup = useRef<number>(
    initialSelect ? initialSelect - 1 : 0
  );
  const shouldUpdate = useRef<boolean>(false);

  const handleSetHoverOption = useCallback(
    (id: number) => {
      if (options) setSelectedOptionText(options[id]);
      if (icons) setIconSrc(icons[id]);
      if (images) setImageSrc(images[id]);
      setOptionToChange(id);
      shouldUpdate.current = true;
    },
    [options, icons, images]
  );

  const handleRecoverFromHover = useCallback(() => {
    setSelectedOptionText(textBackup.current);
    setIconSrc(iconBackup.current);
    setImageSrc(imageBackup.current);
    setOptionToChange(optionToChangeBackup.current);
    shouldUpdate.current = false;
  }, []);

  const handleOptionSelection = useCallback(() => {
    if (shouldUpdate.current && optionSelectAction) {
      optionSelected.current = optionToChange;
      optionSelectAction(optionToChange, selectedOptionText, iconSrc, imageSrc);
    }
    shouldUpdate.current = false;
  }, [
    selectedOptionText,
    iconSrc,
    imageSrc,
    optionToChange,
    optionSelectAction,
  ]);

  useEffect(() => {
    if (!globalOptionSelected && globalOptionSelected !== 0) return;

    if (globalOptionSelected !== optionSelected.current) {
      if (options) setSelectedOptionText(options[globalOptionSelected]);
      if (icons) setIconSrc(icons[globalOptionSelected]);
      if (images) setImageSrc(images[globalOptionSelected]);
    }
  }, [globalOptionSelected, options, icons, images]);

  const selectOnClick = useCallback(() => {
    if (focused.current) selectRef.current?.blur();
  }, []);

  const selectOnFocus = useCallback(() => {
    if (options && selectedOptionText) textBackup.current = selectedOptionText;
    if (icons && iconSrc) iconBackup.current = iconSrc;
    if (images && imageSrc) imageBackup.current = imageSrc;
    optionToChangeBackup.current = optionToChange;
    setSelectFocus((prev: boolean) => !prev);
    setTimeout(() => (focused.current = true), 300);
  }, [
    selectedOptionText,
    iconSrc,
    imageSrc,
    optionToChange,
    options,
    icons,
    images,
  ]);

  const selectOnBlur = useCallback(() => {
    setSelectFocus(false);
    focused.current = false;
    handleOptionSelection();
  }, [handleOptionSelection]);

  const selectOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (focused.current) {
        if (e.key === "Escape" || e.key === "Enter") {
          if (e.key === "Escape") handleRecoverFromHover();
          selectRef.current?.blur();
          return;
        }

        if (e.key === "ArrowUp" || e.key === "ArrowRight") {
          const moveTo =
            (options && optionToChange < options.length - 1) ||
            (icons && optionToChange < icons.length - 1) ||
            (images && optionToChange < images.length - 1)
              ? optionToChange + 1
              : 0;
          handleSetHoverOption(moveTo);
          return;
        }

        if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
          const moveTo =
            (options && optionToChange > 0) ||
            (icons && optionToChange > 0) ||
            (images && optionToChange > 0)
              ? optionToChange - 1
              : options
              ? options.length - 1
              : icons
              ? icons.length - 1
              : images
              ? images.length - 1
              : 0;
          handleSetHoverOption(moveTo);
          return;
        }
      }
    },
    [
      optionToChange,
      options,
      icons,
      images,
      handleSetHoverOption,
      handleRecoverFromHover,
    ]
  );

  return {
    selectRef,
    selectedOptionText,
    iconSrc,
    imageSrc,
    selectFocus,
    optionToChange,
    handleSetHoverOption,
    handleRecoverFromHover,
    selectOnClick,
    selectOnFocus,
    selectOnBlur,
    selectOnKeyDown,
  };
};

export default useGetControllers;

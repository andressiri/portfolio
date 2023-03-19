import { FC, useMemo } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CustomSelectContainer,
  SelectedContainer,
  SelectedImage,
  SelectedIcon,
  SelectedOptionParagraph,
  CustomOptionContainer,
  OptionIcon,
  OptionImage,
  OptionText,
} from "./styledComponents";
import useGetControllers from "./useGetControllers";
import {
  OptionsRequired,
  IconsRequired,
  ImagesRequired,
} from "typings/customSelector";

const CustomSelector: FC<OptionsRequired | IconsRequired | ImagesRequired> = ({
  optionsKey,
  options,
  icons,
  images,
  optionSelectAction,
  initialSelect,
  width,
}) => {
  const arrayToMap = useMemo(
    () => (options ? options : icons ? icons : images ? images : []),
    [icons, images, options]
  );

  const {
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
  } = useGetControllers({
    options,
    icons,
    images,
    optionSelectAction,
    initialSelect,
  });

  return (
    <CustomSelectContainer width={width}>
      <SelectedContainer
        ref={selectRef}
        tabIndex={0}
        onClick={selectOnClick}
        onFocus={selectOnFocus}
        onBlur={selectOnBlur}
        onKeyDown={(e) => selectOnKeyDown(e)}
      >
        {images ? (
          <SelectedImage
            src={imageSrc}
            alt="Selected option image"
            aria-hidden={true}
          />
        ) : icons ? (
          <SelectedIcon>{iconSrc}</SelectedIcon>
        ) : (
          <></>
        )}
        <SelectedOptionParagraph options={options}>
          {selectedOptionText}
          <KeyboardArrowDownIcon sx={{ fontSize: "18px", paddingTop: "2px" }} />
        </SelectedOptionParagraph>
      </SelectedContainer>
      {selectFocus && (
        <ul>
          {arrayToMap.map((_item: string | JSX.Element, id: number) => {
            return (
              <CustomOptionContainer
                key={`${optionsKey}${id}`}
                onMouseEnter={() => handleSetHoverOption(id)}
                onMouseLeave={handleRecoverFromHover}
                options={options}
                icons={icons}
                images={images}
                isSelected={optionToChange === id}
              >
                {images ? (
                  <OptionImage
                    src={images[id]}
                    alt={`${optionsKey} image ${id}`}
                    aria-hidden={true}
                  />
                ) : icons ? (
                  <OptionIcon>{icons[id]}</OptionIcon>
                ) : (
                  <></>
                )}
                {options ? <OptionText>{options[id]}</OptionText> : <></>}
              </CustomOptionContainer>
            );
          })}
        </ul>
      )}
    </CustomSelectContainer>
  );
};

export default CustomSelector;

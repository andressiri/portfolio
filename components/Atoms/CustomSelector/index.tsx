import { FC } from "react";
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
  options,
  icons,
  images,
  optionSelectAction,
  initialSelect,
  width,
}) => {
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
        role="select"
        tabIndex={0}
        onClick={selectOnClick}
        onFocus={selectOnFocus}
        onBlur={selectOnBlur}
        onKeyDown={(e) => selectOnKeyDown(e)}
      >
        {images ? (
          <SelectedImage src={imageSrc} alt="Selected option image" />
        ) : icons ? (
          <SelectedIcon endIcon={iconSrc} tabIndex={-1} />
        ) : (
          <></>
        )}
        <SelectedOptionParagraph options={options}>
          {selectedOptionText}
          <KeyboardArrowDownIcon sx={{ fontSize: "18px", paddingTop: "2px" }} />
        </SelectedOptionParagraph>
      </SelectedContainer>
      {selectFocus && (
        <>
          {options
            ? options.map((option: string, id: number) => {
                return (
                  <CustomOptionContainer
                    role="option"
                    key={`${id}${option}`}
                    onMouseEnter={() => handleSetHoverOption(id)}
                    onMouseLeave={handleRecoverFromHover}
                    options={options}
                    icons={icons}
                    images={images}
                    isSelected={optionToChange === id}
                  >
                    {images ? (
                      <OptionImage src={images[id]} alt={`${option} image`} />
                    ) : icons ? (
                      <OptionIcon endIcon={icons[id]} tabIndex={-1} />
                    ) : (
                      <></>
                    )}
                    <OptionText>{option}</OptionText>
                  </CustomOptionContainer>
                );
              })
            : images
            ? images.map((image: string, id: number) => {
                return (
                  <CustomOptionContainer
                    role="option"
                    key={`${id}${image}`}
                    onMouseEnter={() => handleSetHoverOption(id)}
                    onMouseLeave={handleRecoverFromHover}
                    options={options}
                    icons={icons}
                    images={images}
                    isSelected={optionToChange === id}
                  >
                    <OptionImage src={images[id]} alt={`${image} image`} />
                  </CustomOptionContainer>
                );
              })
            : icons?.map((icon: JSX.Element, id: number) => {
                return (
                  <CustomOptionContainer
                    role="option"
                    key={`${id}${icon}`}
                    onMouseEnter={() => handleSetHoverOption(id)}
                    onMouseLeave={handleRecoverFromHover}
                    options={options}
                    icons={icons}
                    images={images}
                    isSelected={optionToChange === id}
                  >
                    <OptionIcon endIcon={icons[id]} />
                  </CustomOptionContainer>
                );
              })}
        </>
      )}
    </CustomSelectContainer>
  );
};

export default CustomSelector;

import { FC, useCallback, useContext, useMemo, useRef } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { CustomSelector } from "components/Atoms";
import languagesFlags from "assets/languageSelector";
import { Container } from "./styledComponents";
import { ContainerProps } from "typings/customSelector";

const LanguageSelector: FC<ContainerProps> = ({
  isDrawer,
  isDrawerOpen,
  upwardsUnfold,
}) => {
  const { languageSelected, setLanguageSelected } = useContext(GeneralContext);
  const { i18n } = useTranslation();
  const { push } = useRouter();
  const initialSelect = useRef<number>(i18n.language.includes("es") ? 2 : 1);
  const languages = useMemo(() => {
    return ["en", "es"];
  }, []);

  const optionSelectAction = useCallback(
    (optionToChange: number) => {
      push("/", undefined, {
        locale: languages[optionToChange],
        scroll: false,
      });
      setLanguageSelected(optionToChange);
    },
    [languages, push, setLanguageSelected]
  );

  return (
    <Container
      isDrawer={isDrawer}
      isDrawerOpen={isDrawerOpen}
      upwardsUnfold={upwardsUnfold}
    >
      <CustomSelector
        optionsKey="Language selector"
        images={languagesFlags}
        optionSelectAction={optionSelectAction}
        initialSelect={initialSelect.current}
        globalOptionSelected={languageSelected}
        upwardsUnfold={upwardsUnfold}
      />
    </Container>
  );
};

export default LanguageSelector;

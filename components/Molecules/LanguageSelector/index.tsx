import { FC, useCallback, useContext, useMemo, useRef } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { CustomSelector } from "components/Atoms";
import languagesFlags from "assets/languageSelector";
import { Container } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const LanguageSelector: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  const { languageSelected, setLanguageSelected } = useContext(GeneralContext);
  const { i18n } = useTranslation();
  const { push } = useRouter();
  const initialSelect = useRef<number>(i18n.language.includes("es") ? 2 : 1);
  const languages = useMemo(() => {
    return ["en", "es"];
  }, []);

  const optionSelectAction = useCallback(
    (optionToChange: number) => {
      push("/", undefined, { locale: languages[optionToChange] });
      setLanguageSelected(optionToChange);
    },
    [languages, push, setLanguageSelected]
  );

  return (
    <Container isDrawer={isDrawer} isDrawerOpen={isDrawerOpen}>
      <CustomSelector
        optionsKey="Language selector"
        images={languagesFlags}
        optionSelectAction={optionSelectAction}
        initialSelect={initialSelect.current}
        globalOptionSelected={languageSelected}
      />
    </Container>
  );
};

export default LanguageSelector;

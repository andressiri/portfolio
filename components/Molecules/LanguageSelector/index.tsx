import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { CustomSelector } from "components/Atoms";
import languagesFlags from "assets/languageSelector";
import { Container } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
}

const LanguageSelector: FC<Props> = ({ isDrawer }) => {
  const { i18n } = useTranslation();
  const { push } = useRouter();
  const [initialSelect, setInitialSelect] = useState<number>(1);
  const languages = useMemo(() => {
    return ["en", "es"];
  }, []);

  useEffect(() => {
    console.log(i18n.language);
    if (i18n.language.includes("es")) {
      setInitialSelect(1);
    }
  }, [i18n.language]);

  const optionSelectAction = useCallback(
    (optionToChange: number) => {
      push("/", undefined, { locale: languages[optionToChange] });
    },
    [languages, push]
  );

  return (
    <Container isDrawer={isDrawer}>
      <CustomSelector
        images={languagesFlags}
        optionSelectAction={optionSelectAction}
        initialSelect={initialSelect}
      />
    </Container>
  );
};

export default LanguageSelector;

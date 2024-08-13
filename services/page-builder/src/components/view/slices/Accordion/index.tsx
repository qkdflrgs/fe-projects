import { vars } from "@litae/themes";
import { Box, Text } from "@litae/react-components-layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@litae/react-components-accordion";

type AccordionContentItem = {
  key: string;
  title: string;
  content: string;
};

type Props = {
  accordionContents: AccordionContentItem[];
  openedAccordion?: boolean;
  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    titleTextColor?: string;
    titleTextSize?: keyof typeof vars.typography.fontSize;
    titleTextWeight?: keyof typeof vars.typography.fontWeight;
    contentTextColor?: string;
    contentTextSize?: keyof typeof vars.typography.fontSize;
    contentTextWeight?: keyof typeof vars.typography.fontWeight;
  };
};

export const AccordionSlice = ({
  accordionContents,
  openedAccordion,
  sliceStyle,
}: Props) => {
  const {
    padding = 0,
    paddingX = 2,
    paddingY = 0,
    backgroundColor = vars.colors.$scale.gray[200],
    titleTextColor = vars.colors.$scale.gray[900],
    titleTextSize = 16,
    titleTextWeight = 600,
    contentTextColor = vars.colors.$scale.gray[600],
    contentTextSize = 14,
    contentTextWeight = 400,
  } = sliceStyle ?? {};

  const defaultActiveItems = openedAccordion
    ? accordionContents.map(({ key }) => key)
    : [];

  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{ backgroundColor }}
    >
      <Accordion defaultActiveItems={defaultActiveItems}>
        {accordionContents.map(({ key, title, content }) => (
          <AccordionItem key={key} itemName={key}>
            <AccordionButton>
              <Text
                fontSize="xl"
                style={{
                  color: titleTextColor,
                  fontSize: titleTextSize,
                  fontWeight: titleTextWeight,
                  whiteSpace: "pre-wrap",
                }}
              >
                {title}
              </Text>
            </AccordionButton>
            <AccordionPanel>
              <Text
                fontSize="md"
                style={{
                  color: contentTextColor,
                  fontSize: contentTextSize,
                  fontWeight: contentTextWeight,
                  whiteSpace: "pre-wrap",
                }}
              >
                {content}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

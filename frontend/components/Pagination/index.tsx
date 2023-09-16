import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageContainer, PageNumber, PageSwitch } from "./styles";

export const Pagination = () => {
  return(
    <PageContainer>
      <PageNumber>1</PageNumber>
      <PageNumber>2</PageNumber>
      <PageNumber>3</PageNumber>
      <PageNumber>4</PageNumber>
      <PageNumber>5</PageNumber>
      <PageSwitch><ChevronLeft/></PageSwitch>
      <PageSwitch><ChevronRight/></PageSwitch>
    </PageContainer>
  );
};
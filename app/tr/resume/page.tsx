import ResumePage from "../../../components/ResumePage";
import { pageMetadata } from "../../../lib/site";
export const metadata = pageMetadata("tr", "/resume", "Özgeçmiş");
export default function Page() {
  return <ResumePage lang="tr" />;
}

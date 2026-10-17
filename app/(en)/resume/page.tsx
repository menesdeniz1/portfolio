import ResumePage from "../../../components/ResumePage";
import { pageMetadata } from "../../../lib/site";
export const metadata = pageMetadata("en", "/resume", "Résumé");
export default function Page() {
  return <ResumePage lang="en" />;
}

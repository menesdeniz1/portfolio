import "../globals.css";
import SiteShell from "../../components/SiteShell";
import { pageMetadata } from "../../lib/site";
export const metadata = pageMetadata("tr");
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="tr">{children}</SiteShell>;
}

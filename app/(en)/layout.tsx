import "../globals.css";
import SiteShell from "../../components/SiteShell";
import { pageMetadata } from "../../lib/site";
export const metadata = pageMetadata("en");
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}

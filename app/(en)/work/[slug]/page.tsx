import StoryPage from "../../../../components/StoryPage";
import { stories, slugs, type Slug } from "../../../../content/projects";
import { pageMetadata } from "../../../../lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return pageMetadata("en", "/work/" + slug, stories.en[slug as Slug]?.title);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StoryPage lang="en" slug={slug} />;
}

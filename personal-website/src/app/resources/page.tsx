// app/resources/[slug]/page.tsx
// Renders a placeholder for articles and leaves a clear TODO for Markdown fetching/rendering.

import React from "react";

// TODO: Implement fetching and rendering of Markdown content.
// - Example plan:
//   1) Store article markdown files in /content/resources/<slug>.md
//   2) At build time (or runtime), read the file and pass the string here
//   3) Render with a Markdown component such as `react-markdown` + `remark-gfm`
//   4) (Optional) Switch to MDX if you want interactive components inline

// For now, this is a placeholder.
const articles: Record<string, { title: string; md?: string | null }> = {
  "navigating-carms": {
    title: "Navigating the CaRMS Match: A Guide for Medical Students",
    md: null, // Empty for now
  },
  "ortho-resources": {
    title: "Top Resources for Aspiring Orthopedic Surgeons",
    md: null, // Empty for now
  },
  "study-techniques": {
    title: "Effective Study Techniques for Medical School",
    md: null, // Empty for now
  },
};

// Stub for future data-loading; keep here to show intended shape
// async function fetchMarkdown(slug: string): Promise<string | null> {
//   // TODO: fetch or read markdown from /content/resources/<slug>.md
//   return null;
// }

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Article not found</h1>
        <p className="opacity-80">We couldn't find the requested article.</p>
      </article>
    );
  }

  // const mdFromSource = await fetchMarkdown(params.slug); // TODO: use later
  const hasContent = Boolean(article.md /*|| mdFromSource*/);

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      {!hasContent ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="m-0 font-medium">This page is empty for now.</p>
          <p className="m-0 opacity-80">
            {/* Visible note for developers/users */}
            Content will be written in Markdown and rendered here when ready.
          </p>
        </div>
      ) : (
        // When ready: replace with a Markdown renderer
        // <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.md || mdFromSource!}</ReactMarkdown>
        <p className="opacity-80">(Markdown rendering coming soon)</p>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

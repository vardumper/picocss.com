import { useRef } from "react";
import metaData from "~/data/meta";

import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Custom Components ${titleSuffix}`,
  description: "How to get more out of Pico by adding custom components",
});

export default function CustomComponents() {
  const stickyFooterRef = useRef();
  const tabbedContentRef = useRef();
  const tabsRef = useRef();
  const themeSwitcherRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Custom components"
        description="How to get more out of Pico by adding custom components"
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "sticky-footer",
            title: "Sticky Footer",
            ref: stickyFooterRef,
          },
          {
            anchor: "tabbedContent",
            title: "Tabbed Content",
            ref: tabbedContentRef,
          },
          {
            anchor: "tabs",
            title: "Tabs",
            ref: tabsRef,
          },
          {
            anchor: "theme-swicther",
            title: "Theme Switcher",
            ref: themeSwitcherRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section>
          <p>
            Pico includes a number of pre-made components such as{" "}
            <a href="/docs/accordion">Accordion</a>, <a href="/docs/card">Card</a>,{" "}
            <a href="/docs/dropdown">Dropdown</a> and many more. That said, Pico aims to be a
            minimalist CSS framework with a strong focus on performance — keeping file sizes down to
            a minimum. Not everything that is possible with HTML and CSS, needs to be a part of its
            core.
          </p>
          <p>
            Nonetheless, Pico is very flexible, so adding additional custom components is very easy.
          </p>
        </section>

        <section ref={stickyFooterRef}>
          <Heading level={2} anchor="sticky-footer">
            Sticky Footer Example
          </Heading>
          <p>
            A sticky footer, that is glued to the bottom of the browsers viewport unless a page has
            a lot of content.
          </p>
        </section>

        <section ref={tabbedContentRef}>
          <Heading level={2} anchor="tabbed-content">
            Tabbed Content Example
          </Heading>
          <p>Tabbed content is easy.</p>
        </section>

        <section ref={tabsRef}>
          <Heading level={2} anchor="tabs">
            Tabs Example
          </Heading>
          <p>Using tabs is simple.</p>
        </section>

        <section ref={themeSwitcherRef}>
          <Heading level={2} anchor="theme-switcher">
            Theme Switcher Example
          </Heading>
          <p>There are many ways to switch themes.</p>
        </section>
      </Content>
    </>
  );
}

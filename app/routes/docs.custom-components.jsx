import { useRef } from "react";

import metaData from "~/data/meta";

import Code from "~/components/Code";
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
            A sticky footer, positioning the footer at the bottom of the viewport unless the pages
            <Code display="inline">{`<main>`}</Code> element has sufficient content.
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
            Tabs
          </Heading>
          <article aria-label="Tabs example" className="component" id="tabs-example">
            <style>{`
              #tabs-example [role="tabs"] {
                display: flex;
              }

              #tabs-example [role="tabs"] section {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
              }

              #tabs-example [role="tabs"] figure {
                flex-grow: 1;
                width: 100%;
                height: 100%;
                display: none;
              }

              #tabs-example [role="tabs"] [type="radio"]:checked + figure {
                display: block;
              }

              #tabs-example nav[role="tab-control"] {
                --pico-border-width: 0.0625rem;
                border-bottom: 1px solid var(--pico-border-color);
              }

              #tabs-example nav[role="tab-control"] ul,
              #tabs-example nav[role="tab-control"] ul li {
                padding-bottom:0;
              }

              #tabs-example nav[role="tab-control"] label {
                margin: 0;
                overflow: visible;
                font-family: inherit;
                text-transform: none;
                margin: 0;
                --pico-background-color: var(--pico-primary-background);
                --pico-border-color: var(--pico-primary-border);
                --pico-color: var(--pico-primary-inverse);
                --pico-box-shadow: var(--pico-button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
                padding: var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal);
                border: var(--pico-border-width) solid var(--pico-border-color);
                // border-bottom-width: 0;
                border-radius: calc(var(--pico-border-radius) * 2) caLc(var(--pico-border-radius)* 2) 0 0;
                outline: none;
                background-color: var(--pico-background-color);
                box-shadow: var(--pico-box-shadow);
                color: var(--pico-color);
                font-weight: var(--pico-font-weight);
                font-size: 1rem;
                line-height: var(--pico-line-height);
                text-align: center;
                text-decoration: none;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                transition: background-color var(--pico-transition), border-color var(--pico-transition), color var(--pico-transition), box-shadow var(--pico-transition);
                --pico-background-color: transparent;
                --pico-color: var(--pico-primary);
                --pico-border-color: currentColor;
              }
              #tabs-example nav[role="tab-control"] label:is([aria-current], :hover, :active, :focus),
              #tabs-example nav[role="tab-control"] label:hover,
              #tabs-example nav[role="tab-control"] label:active,
              #tabs-example nav[role="tab-control"] label:focus) {
                --pico-background-color: transparent;
                --pico-color: var(--pico-primary-hover);
              }
            `}</style>
            <nav role="tab-control">
              <ul>
                <li>
                  <label for="tab1" aria-selected="tab">
                    Tab 1
                  </label>
                </li>
                <li>
                  <label for="tab2">Tab 2</label>
                </li>
              </ul>
            </nav>

            <div role="tabs">
              <section>
                <input hidden="hidden" type="radio" name="tabs" id="tab1" checked="checked" />
                <figure>
                  <blockquote>
                    "When you're new to something, you bring an ignorance that can be highly
                    innovative."
                    <footer>
                      <cite>– Rick Rubin</cite>
                    </footer>
                  </blockquote>
                </figure>

                <input hidden="hidden" type="radio" name="tabs" id="tab2" />
                <figure>
                  <blockquote>
                    "Nothing beats a simple worldview. When we know who is the bad guy, the day has
                    structure."
                    <footer>
                      <cite>– Volker Pispers</cite>
                    </footer>
                  </blockquote>
                </figure>
              </section>
            </div>
            <Code as="footer">{`
  <style>
    [role="tabs"] {
      display: flex;
    }

    [role="tabs"] section {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    [role="tabs"] figure {
      flex-grow: 1;
      width: 100%;
      height: 100%;
      display: none;
    }

    [role="tabs"] [type="radio"]:checked + figure {
      display: block;
    }

    nav[role="tab-control"] label.active {
      color: var(--primary);
      cursor: pointer;
    }
  </style>

  <nav role="tab-control">
    <ul>
      <li><label for="tab1">
        <button class="outline">Tab 1</button>
      </label></li>
      <li><label for="tab2"><button class="outline">Tab 2</button></label></li>
    </ul>
  </nav>

  <div role="tabs">
    <section>
      <input hidden="hidden" type="radio" name="tabs" id="tab1" checked="checked" />
      <figure>
        <blockquote>
          "When you're new to something, you bring an ignorance that can
          be highly innovative."
          <footer>
            <cite>– Rick Rubin</cite>
          </footer>
        </blockquote>
      </figure>

      <input hidden="hidden" type="radio" name="tabs" id="tab2" />
      <figure>
        <blockquote>
          "Nothing beats a simple worldview. When we know who is the bad
          guy, the day has structure."
          <footer>
            <cite>– Volker Pispers</cite>
          </footer>
        </blockquote>
      </figure>
    </section>
  </div>`}</Code>
          </article>
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

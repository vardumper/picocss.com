import metaData from "~/data/meta";

import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Link ${titleSuffix}`,
  description: "Link come with .secondary and .contrast styles.",
});

export default function LinkPage() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      {/* Header */}
      <Header
        title="Link"
        description={
          <>
            Links come with <Code display="inline">.secondary</Code> and{" "}
            <Code display="inline">.contrast</Code> styles.
          </>
        }
      />

      {/* Content */}
      <Content>
        <article aria-label="Links example" className="component">
          <Link to="#" onClick={preventDefault}>
            Primary
          </Link>
          <br />
          <Link to="#" onClick={preventDefault} className="secondary">
            Secondary
          </Link>
          <br />
          <Link to="#" onClick={preventDefault} className="contrast">
            Contrast
          </Link>
          <br />
          <Code as="footer">{`<a href="#">Primary</a>
<a href="#" class="secondary">Secondary</a>
<a href="#" class="contrast">Contrast</a>`}</Code>
        </article>

        <p>
          <Code display="inline">.secondary</Code> and <Code display="inline">.contrast</Code>{" "}
          classes are not available in the{" "}
          <Link to="/docs/classless">class&#8209;less&nbsp;version</Link>.
        </p>
        <p>
          <Code display="inline">aria-current</Code> send the active state to assistive technologies
          and is displayed as the hover links.
        </p>
        <article aria-label="Active link example" className="component">
          <Link to="#" onClick={preventDefault}>
            Regular link
          </Link>
          <br />
          <Link to="#" onClick={preventDefault} aria-current="page">
            Active link
          </Link>
          <br />
          <Link to="#" onClick={preventDefault}>
            Regular link
          </Link>
          <br />
          <Code as="footer">{`<a href="#">Regular link</a>
<a href="#" aria-current="page">Active link</a>
<a href="#">Regular link</a>`}</Code>
        </article>
      </Content>
    </>
  );
}

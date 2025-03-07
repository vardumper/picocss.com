import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";
import Link from "~/components/Link";
import Heading from "~/components/Heading";

import { useModal } from "~/contexts/ModalContext";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Modal ${titleSuffix}`,
  description:
    "The classic modal component with graceful spacings across devices and viewports, using the semantic HTML tag <dialog>.",
});

const ThankYouForRegisteringExample = ({ preventDefault, ...props }) => {
  return (
    <dialog {...props}>
      <article>
        <header>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <Link to="#" aria-label="Close" className="close" onClick={preventDefault} />
          <p>
            <strong>🗓️ Thank You for Registering!</strong>
          </p>
        </header>
        <p>
          We're excited to have you join us for our upcoming event. Please arrive at the museum on
          time to check in and get started.
        </p>
        <ul>
          <li>Date: Saturday, April 15</li>
          <li>Time: 10:00am - 12:00pm</li>
        </ul>
      </article>
    </dialog>
  );
};

const ConfirmYourMembershipExample = ({
  handleClickOverlay,
  modalIsOpen,
  onCloseModal,
  ...props
}) => {
  return (
    <dialog onClick={handleClickOverlay} open={modalIsOpen} {...props}>
      <article>
        <Heading level={2}>Confirm Your Membership</Heading>
        <p>
          Thank you for signing up for a membership! Please review the membership details below:
        </p>
        <ul>
          <li>Membership: Individual</li>
          <li>Price: $10</li>
        </ul>
        <footer>
          <button className="secondary" onClick={onCloseModal}>
            Cancel
          </button>
          <button onClick={onCloseModal}>Confirm</button>
        </footer>
      </article>
    </dialog>
  );
};

export default function Modal() {
  const { modalIsOpen, onOpenModal, onCloseModal } = useModal();
  const preventDefault = (e) => e.preventDefault();

  const syntaxRef = useRef();
  const liveDemoRef = useRef();
  const utilitiesRef = useRef();

  // Handle click on overlay
  const handleClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal(event);
    }
  };

  return (
    <>
      {/* Demo modal */}
      <ConfirmYourMembershipExample
        handleClickOverlay={handleClickOverlay}
        modalIsOpen={modalIsOpen}
        onCloseModal={onCloseModal}
      />

      {/* Header */}
      <Header
        title="Modal"
        description={
          <>
            The classic modal component with graceful spacings across devices and viewports, using
            the semantic HTML tag <Code display="inline">{`<dialog>`}</Code>.
          </>
        }
      />

      {/* Table of Contents */}
      <TableOfContents
        data={[
          { anchor: "", title: "Syntax", ref: syntaxRef },
          {
            anchor: "demo",
            title: "Demo",
            ref: liveDemoRef,
          },
          {
            anchor: "utilities",
            title: "Utilities",
            ref: utilitiesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <p>
            Modals are built with <Code display="inline">{`<dialog>`}</Code> as a wrapper and{" "}
            <Code display="inline">{`<article>`}</Code> for the modal content.
          </p>
          <p>
            Inside <Code display="inline">{`<header>`}</Code>{" "}
            <Code display="inline">{`<a class="close">`}</Code> is defined to{" "}
            <Code display="inline">{`float: right;`}</Code> allowing a close icon to be top aligned
            with a title.
          </p>
          <ThankYouForRegisteringExample preventDefault={preventDefault} className="example" open />
          <Code>{`<dialog open>
  <article>
    <header>
      <Link to="#" aria-label="Close" class="close" />
      <p>
        <strong>🗓️ Thank You for Registering!</strong>
      </p>
    </header>
    <p>
      We're excited to have you join us for our
      upcoming event. Please arrive at the museum 
      on time to check in and get started.
    </p>
    <ul>
      <li>Date: Saturday, April 15</li>
      <li>Time: 10:00am - 12:00pm</li>
    </ul>
  </article>
</dialog>`}</Code>
          <p>
            Inside <Code display="inline">{`<footer>`}</Code>, the content is right aligned by
            default.
          </p>
          <ConfirmYourMembershipExample
            handleClickOverlay={preventDefault}
            modalIsOpen={true}
            onCloseModal={preventDefault}
            className="example"
          />
          <Code>{`<dialog open>
  <article>
    <h2>Confirm Your Membership</h2>
    <p>
      Thank you for signing up for a membership!
      Please review the membership details below:
    </p>
    <ul>
      <li>Membership: Individual</li>
      <li>Price: $10</li>
    </ul>
    <footer>
      <button className="secondary">
        Cancel
      </button>
      <button>Confirm</button>
    </footer>
  </article>
</dialog>`}</Code>
        </section>

        <section ref={liveDemoRef}>
          <Heading level={2} anchor="demo">
            Demo
          </Heading>
          <p>Toggle a modal by clicking the button below.</p>
          <article aria-label="Modal demo" id="modal-demo">
            <button className="contrast" onClick={onOpenModal}>
              Open modal
            </button>
          </article>
          <p>
            Pico does not include JavaScript code. You need to implement your JS to interact with
            modals.
          </p>
          <p>
            To open a modal, add the <Code display="inline">open</Code> attribute to the
            <Code display="inline">{"<dialog>"}</Code> container.
          </p>
        </section>

        <section ref={utilitiesRef}>
          <Heading level={2} anchor="utilities">
            Utilities
          </Heading>
          <p>Modals come with 3 utility classes.</p>
          <p>
            These classes are not available in the{" "}
            <Link to="/docs/classless">class-less version</Link>.
          </p>
          <p>
            <Code display="inline">.modal-is-open</Code> prevents any scrolling and interactions
            below the modal.
          </p>
          <Code>{`<!doctype html>
<html class="modal-is-open">
  ...
</html>`}</Code>
          <p>
            <Code display="inline">.modal-is-opening</Code> brings an opening animation.
          </p>
          <Code>{`<!doctype html>
<html class="modal-is-open modal-is-opening">
  ...
</html>`}</Code>
          <p>
            <Code display="inline">.modal-is-closing</Code> brings a closing animation.
          </p>
          <Code>{`<!doctype html>
<html class="modal-is-open modal-is-closing">
  ...
</html>`}</Code>
        </section>
      </Content>
    </>
  );
}

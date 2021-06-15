import styled, { css } from "styled-components";

import { PayPalButton } from "./paypal_button";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--clr-progbar);
  margin: auto;
  max-width: 120ch;
  margin-top: 1rem;
  background-color: var(--clr-progress--darkest);
  border-radius: 10px;
  border: 1px solid black;
  padding: 1em;
`;

/**
 * Put a left margin on the left-aligned content so the right side of the page
 * doesn't look too empty.
 */
const ContentWrapper = styled.div`
  @media (min-width: 450px) {
    margin-left: 10%;
    padding-left: 2%;
    border-left: 3px solid var(--clr-progbar);
  }
`;

const Header = styled.div`
  text-align: center;

  & > p {
    margin: auto;
  }

  & > h1 {
    color: white;
    font-size: 3.5em;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Money = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 0em;
  align-items: center;

  & > h3 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr 4fr;
    grid-column-gap: 1em;

    & > h3 {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
`;

const P = styled.p`
  color: inherit;
`;

/**
 * These spans are structured into a table-like layout using the css grid in
 * "Money"
 */
const Span = styled.span`
  color: var(--clr-progbar);
  ${(props) =>
    props.big &&
    css`
      font-size: 3.5em;
    `}
  ${(props) =>
    props.small &&
    css`
      font-size: 0.8em;
    `}

  @media(min-width: 450px) {
    ${(props) =>
      props.justifyRight &&
      css`
        &:nth-child(3n + 2) {
          justify-self: right;
        }
      `}
  }
`;

const Address = styled.p`
  margin-left: 2em;
  & > span {
    color: var(--clr-progbar);
    font-size: 1.3rem;
    display: block;
  }
`;

const Cash = styled(Span)`
  font-size: 3.5em;
  margin-bottom: 0.5em;

  @media (max-width: 450px) {
    justify-self: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
const CashEmoji = ({ count }) => <Cash>{"💵\t".repeat(count)}</Cash>;

export const CashDonation = () => (
  <StyledArticle>
    <Header>
      <h1>Cash Donations</h1>
      <P>
        Consider supporting our cause! Monetary donations of any size will
        provide children with access to high quality music education at
        Empowerment Academy!
      </P>
    </Header>
    <ContentWrapper>
      <Money>
        <h3>What Your Money Will Buy</h3>
        <Span big justifyRight>
          $5
        </Span>
        <Span small>
          Enough maintenance supplies like cork grease or valve oil, for
          scholars to keep their instruments in good working order for one year.
        </Span>
        <CashEmoji count={1} />
        <Span big justifyRight>
          $10
        </Span>
        <Span small>One pair of drum sticks.</Span>
        <CashEmoji count={2} />
        <Span big justifyRight>
          $20
        </Span>
        <Span small>Annual tune-up for one instrument.</Span>
        <CashEmoji count={3} />
        <Span big justifyRight>
          $50
        </Span>
        <Span small>
          One piece of repertoire: a song with a part for every student that we
          can play together.
        </Span>
        <CashEmoji count={4} />
        <Span big justifyRight>
          $100
        </Span>
        <Span small>
          A case for an instrument donated without one, or one ukulele.
        </Span>
        <CashEmoji count={5} />
        <Span big justifyRight>
          $150
        </Span>
        <Span small>
          Enough sheet music to fill an entire concert program for one band.
        </Span>
        <CashEmoji count={6} />
        <Span big justifyRight>
          $200
        </Span>
        <Span small>One high-quality used band instrument.</Span>
        <CashEmoji count={7} />
      </Money>
      <div>
        <P>Click the PayPal button below to make a donation through PayPal!</P>
        <PayPalButton />
        <P>
          Or, send a check payable to "Empowerment Academy PTO" to this address.
        </P>
        <Address>
          <span>attn: Jack DeVries</span>
          <span>Empowerment Academy</span>
          <span>211 Sherman Ave.</span>
          <span>Jersey City, NJ 07307</span>
        </Address>
      </div>
    </ContentWrapper>
  </StyledArticle>
);

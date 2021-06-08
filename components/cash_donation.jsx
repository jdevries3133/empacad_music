import styled, { css } from "styled-components";

const Article = styled.article`
  margin-top: 1rem;
  background-color: var(--clr-progress--darkest);
  border-radius: 10px;
  border: 1px solid black;
  padding: 1em;

  & > *,
  & > header > * {
    color: var(--clr-progbar);
  }

  @media (min-width: 1000px) {
    padding-left: 20%;
  }
`;

const Header = styled.header`
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

/**
 * Should contain three spans: money amount, description, and visual (emojis)
 */
const Money = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 1em;
  align-items: center;

  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr 4fr;
  }
`;

const Span = styled.span`
  &:nth-child(3n + 1) {
    justify-self: right;
  }
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
`;

const Address = styled.p`
  margin-left: 2em;
  & > span {
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
  <Article>
    <Header>
      <h1>Cash Donations</h1>
      <p>
        Consider supporting our cause! Monetary donations of any size will
        provide children with access to high quality music education at
        Empowerment Academy!
      </p>
    </Header>
    <h3>What Your Money Will Buy</h3>
    <Money>
      <Span big>$5</Span>
      <Span small>
        Enough maintenance supplies like cork grease or valve oil, for scholars
        to keep their instruments in good working order for one year.
      </Span>
      <CashEmoji count={1} />
      <Span big>$10</Span>
      <Span small>One pair of drum sticks.</Span>
      <CashEmoji count={2} />
      <Span big>$20</Span>
      <Span small>Annual tune-up for one instrument.</Span>
      <CashEmoji count={3} />
      <Span big>$50</Span>
      <Span small>
        One piece of repertoire: a song with a part for every student that we
        can play together.
      </Span>
      <CashEmoji count={4} />
      <Span big>$100</Span>
      <Span small>
        A case for an instrument donated without one, or one ukulele.
      </Span>
      <CashEmoji count={5} />
      <Span big>$150</Span>
      <Span small>
        Enough sheet music to fill an entire concert program for one band.
      </Span>
      <CashEmoji count={6} />
      <Span big>$200</Span>
      <Span small>One high-quality used band instrument.</Span>
      <CashEmoji count={7} />
    </Money>
    <h3>How to Donate</h3>
    <p>
      Donate by mailing a check payable to the Empowerment Academy PTO (Parent
      Teacher Organization).
    </p>
    <Address>
      <span>attn: Jack DeVries</span>
      <span>Empowerment Academy</span>
      <span>211 Sherman Ave.</span>
      <span>Jersey City, NJ 07307</span>
    </Address>
  </Article>
);

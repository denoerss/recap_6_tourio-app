import styled from "styled-components";
import Card from "../components/Card";
import useSWR from "swr";
import { StyledLink } from "../components/StyledLink";

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  background-color: greenyellow;
  color: #0d0f14;
  bottom: 50px;
  right: 50px;
`;

const Subhead = styled.h2`
  font-size: 45px;
  color: white;
  line-height: 3.5rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const EmColored = styled.em`
  color: greenyellow;
  font-style: normal;
`;

const EmUnderliend = styled.em`
  text-decoration: underline;
  font-style: normal;
`;

export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <Subhead>
        Discover <EmColored>Hamburg</EmColored> <br />
        and <EmUnderliend>other cities</EmUnderliend>.
      </Subhead>
      <ListContainer>
        {data.map((place) => {
          return (
            <li key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place._id}
              />
            </li>
          );
        })}
      </ListContainer>
      <FixedLink href="/create">+ place</FixedLink>
    </>
  );
}

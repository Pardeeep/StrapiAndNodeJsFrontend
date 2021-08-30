import type { NextPage } from "next";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Homepage from "../components/HomePage/Homepage";
import life from "../public/life.jpg";
import life1 from "../public/life2.jpg";
import life2 from "../public/life3.jpg";
import life3 from "../public/life4.jpg";

interface Post {
  id: number,
  Cover: { url: StaticImageData , __typename: string },
  Title: string,
  Description: string,
  __typename: string
}

interface PostJsonResponse {
  posts : Post[]
}

const Containter = styled.div`
  color: white;
  overflow-x: hidden;
`;

const Center = styled.div`
  padding: 2.5rem 1rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflowx: none;
`;

const Home = (props :any) => {
  let i: StaticImageData[] = [life, life1, life2, life3];

  return (
    <Containter>
      <Homepage />
      <Center>
        {props.data.posts.map((post:Post)=> <Card key={post.id} Description={props.Description} image={post.Cover.url} alt={post.Title} />)}
      </Center>
      <Footer />
    </Containter>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://intense-journey-63176.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data:messages } = await client.query({
    query: gql`
      query {
        posts {
          id
          Cover {
            url
          }
          Title
          Description
        }
      }
    `,
  });
  return {
    props: {
      data: messages
    },
  };
};

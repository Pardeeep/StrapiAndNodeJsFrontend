import type { NextPage } from "next";
import Link from 'next/link'
import styled from "styled-components";
import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Homepage from "../components/HomePage/Homepage";
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

const Pages = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    .active {
      background: rgb(250,210,10);
      padding-left: 1px;
      color: white;
    }
`

const Icons = styled.div`
  width: 30px;
  height: 30px;
  border: 0.5px solid #e5e5e5;
  color: #808080;
  font-size: .7rem;
  border-radius: 50%;
  margin: 10px;
  margin-bottom: 5rem;
  display: grid;
  cursor: pointer;
  place-items:center;

`

const Home = (props :any) => {

  return (
    <Containter>
      <Homepage />
      <Center>
        {props.data.posts.map((post:Post)=> <Card key={post.id} Description={props.Description} image={post.Cover.url} alt={post.Title} />)}
      </Center>
      <Pages>
        <Link href="/" passHref={true}><Icons>&lt;</Icons></Link>
        <Link href="/" passHref={true}><Icons className="active">1</Icons></Link>
        <Link href="/" passHref={true}><Icons>2</Icons></Link>
        <Link href="/" passHref={true}><Icons>3</Icons></Link>
        <Link href="/" passHref={true}><Icons>4</Icons></Link>
        <Link href="/" passHref={true}><Icons>5</Icons></Link>
        <Link href="/" passHref={true}><Icons>&gt;</Icons></Link>
      </Pages>
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

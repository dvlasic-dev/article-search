import styled from "@emotion/styled";
import Link from "next/link";
import { IPost, CategoryEnum, IPosts } from "../utils/types";
import { formatDate } from "../utils/functions";

const Posts = ({
  currentCategory,
  posts,
  handleConfirmDelete,
  totalPostsLength,
}: IPosts) => {
  const currentPostCount = posts.length;
  return (
    <>
      <PostsHeader>
        {currentCategory.id !== 0 ? (
          <Heading3>
            Current category: <span>{currentCategory.name}</span>
          </Heading3>
        ) : null}

        <Heading4>
          Currently showing {currentPostCount}{" "}
          {currentPostCount !== 1 ? "articles" : "article"}
        </Heading4>
      </PostsHeader>
      {totalPostsLength < 100 ? <Button>refetch</Button> : null}
      <PostsWrapper>
        {posts.map((item: IPost) => {
          return (
            <PostContent key={item.title}>
              <button id="delete" onClick={() => handleConfirmDelete(item)}>
                Delete post
              </button>
              <Link
                href={`https://www.alpha-orbital.com/news/${item.slug}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={`https://www.alpha-orbital.com/assets/images/post_img/${item.post_image}`}
                  alt="bizon"
                />
              </Link>
              <InnerContainer>
                <Link
                  href={`https://www.alpha-orbital.com/news/${item.slug}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h1>{item.title}</h1>
                </Link>

                <h4>{formatDate(item.date)}</h4>
                <div dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                <ArticleLink
                  href={`https://www.alpha-orbital.com/news/${item.slug}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Full article
                </ArticleLink>
              </InnerContainer>
            </PostContent>
          );
        })}
      </PostsWrapper>
    </>
  );
};

const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  color: white;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1024px) {
    /* only if wider width gets more columns */
    // grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 0.5rem;
  }
`;
const PostContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background-color: #111827;
  padding: 10px;
  border-radius: 0.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  button[id="delete"] {
    display: none;
    position: absolute;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    top: 10px;
    right: 10px;
    color: white;
    background-color: #dc2626;
  }
  &:hover button[id="delete"] {
    display: flex;
  }
`;
const Image = styled.img`
  width: 100%;
  align-self: center;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  h1,
  p,
  h4 {
    margin: 0.5rem 0;
  }
  h4 {
    color: #9ca3af;
  }
`;
const ArticleLink = styled(Link)`
  display: flex;
  background: none;
  margin-left: auto;
  margin-right: 0;
  padding: 0.25rem;
  font-size: 1.125rem;
  color: #60a5fa;
  margin-top: auto;
`;
const Heading3 = styled.h3`
  margin: 1rem 0;
  font-size: 1.5rem;
  span {
    color: #0284c7;
  }
`;
const Heading4 = styled.h4`
  margin: 1rem 0;
  margin-left: auto;
`;
const Button = styled.button`
  width: fit-content;
  display: flex;
  background-color: #047857;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  margin-left: auto;
  font-size: 1rem;
`;
export default Posts;

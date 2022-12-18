import styled from "@emotion/styled";
import { ISearch } from "../utils/types";

const Search = ({ searchPosts, searchQuery, setSearchQuery }: ISearch) => {
  return (
    <SearchWrapper onSubmit={searchPosts}>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.form`
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 0 0.5rem;
  }
`;

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 0;
  padding: 0.5rem;
`;
const Button = styled.button`
  padding: 0.25rem 0.5rem;
  width: calc(100% / 6);
  background-color: #60a5fa;
  height: 2.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

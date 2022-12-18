import styled from "@emotion/styled";
import { ICategories, ICategory, IPost } from "../utils/types";

type CategoryProps = {
  active: boolean;
};

const Categories = ({
  currentCategory,
  categories,
  setCategory,
  handleCategoryChange,
}: ICategories) => {
  const handleSetCategory = (category: ICategory) => {
    setCategory(category);
    handleCategoryChange(category);
  };

  return (
    <CategoryWrapper>
      {categories.map((item: ICategory) => {
        return (
          <Category
            active={currentCategory.id === item.id}
            key={item.id}
            onClick={() => handleSetCategory(item)}
          >
            {item.name}
          </Category>
        );
      })}
      <Category
        active={currentCategory.id === 0}
        onClick={() => {
          handleSetCategory({ id: 0, name: "All posts" });
        }}
      >
        All posts
      </Category>
    </CategoryWrapper>
  );
};

export default Categories;

const CategoryWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1.5rem auto;
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
`;

const Category = styled("button")<CategoryProps>`
  width: max-content;
  border-radius: 0.5rem;
  padding: 0.25rem;
  color: ${(props) => (props.active ? "#2563eb" : "white")};

  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  font-size: 1.125rem;
  &:hover {
    color: #60a5fa;
  }
`;

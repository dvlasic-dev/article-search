import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useOnClickOutside } from "../utils/hooks";
import { ICategory } from "../utils/types";

const Dropdown = ({
  categories,
  handleDeleteByCategory,
}: {
  categories: ICategory[];
  handleDeleteByCategory: (item: ICategory) => void;
}) => {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef, () => setOpen(false));

  const removeByCategory = (item: ICategory) => {
    handleDeleteByCategory(item);
    setOpen(false);
  };

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownButton onClick={() => setOpen((open) => !open)}>
        Toggle posts
      </DropdownButton>
      {isOpen ? (
        <DropdownContent>
          <ul>
            {categories.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>{" "}
                  <button onClick={() => removeByCategory(item)}>
                    Remove posts
                  </button>
                </li>
              );
            })}
          </ul>
        </DropdownContent>
      ) : null}
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  display: flex;
  min-width: fit-content;
  position: relative;
  margin: 0.5rem;
`;
const DropdownButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #075985;
  color: white;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  background-color: white;
  border-radius: 0.5rem;
  z-index: 10;
  padding: 0.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  ul {
    width: 100%;
    list-style: none;
    li {
      display: flex;
      gap: 0.25rem;
      justify-content: space-between;
      min-width: max-content;
      margin: 0.5rem 0;
      align-items: center;
      color: black;

      span {
        min-width: 5rem;
      }
      button {
        min-width: max-content;
        background-color: #dc2626;
        color: white;
        border-radius: 0.25rem;
        padding: 0.25rem;
        margin-left: 0.5rem;
      }
    }
  }
`;

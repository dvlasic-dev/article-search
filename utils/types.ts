export interface IPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  post_image: string;
  post_thumbnail: string;
  post_category_id: string;
}
export interface ICategory {
  id: string | number;
  name: string;
}
export interface ICategories {
  currentCategory: ICategory;
  categories: ICategory[];
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  handleCategoryChange: (category: ICategory) => void;
}
export interface IPosts {
  currentCategory: ICategory;
  posts: IPost[];
  handleConfirmDelete: (post: IPost) => void;
  totalPostsLength: number;
}
export enum CategoryEnum {
  "X Universe" = 1,
  "Elite: Dangerous" = 2,
  "Starpoint Gemini" = 3,
  "EVE Online" = 4,
}

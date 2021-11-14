import { ReactNode } from 'react';
import { SeoProps } from 'common/Seo/models.d';
import { WindowLocation } from '@reach/router';

type InputSearchType = 'text';

export interface InputSearchProps {
  placeholder?: string;
  ref?: HTMLInputElement;
  type: InputSearchType;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  handler?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void);
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export interface IPost {
  id: string;
  body: string;
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    description?: string;
    title: string;
    tags: string[];
  };
}

export type TLocation = WindowLocation;

export interface PostTemplateProps {
  data: {
    site: { siteMetadata: SeoProps };
    mdx: IPost;
    previous: {
      fields: { slug: string };
      frontmatter: {
        title: string;
      };
    };
    next: {
      fields: { slug: string };
      frontmatter: {
        title: string;
      };
    };
  };
  location: TLocation;
}

export interface ArticlesProps {
  posts: IPost[];
}

export interface IndexPageProps {
  data: {
    site: { siteMetadata: SeoProps };
    allMdx: {
      nodes: IPost[];
    };
  };
}

export interface IFlatSearchResults {
  excerpt: string;
  slug: string;
  date: string;
  title: string;
}

export interface ILocalSearchPages {
  index: string;
  store: Record<string, IFlatSearchResults>[];
}

export interface SearchPageProps {
  data: { localSearchPages: ILocalSearchPages };
  location: TLocation;
}

export interface TagTemplateProps {
  data: { allMdx: { nodes: IPost[]; totalCount: number } };
  pageContext: { tag: string };
}

export interface ITagsGroup {
  fieldValue: string;
  totalCount: number;
}

export interface TagsPageProps {
  data: {
    site: { siteMetadata: SeoProps };
    allMdx: {
      group: ITagsGroup[];
    };
  };
}

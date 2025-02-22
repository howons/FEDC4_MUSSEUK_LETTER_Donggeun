/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * Musseuk
 * Musseuk Letter API Docs
 * OpenAPI spec version: 1.0.0
 */
export type PostPostsPostIdComments401 = {
  message: string;
};

export type PostPostsPostIdComments201 = {
  commentId: number;
};

export type PostPostsPostIdCommentsBody = {
  content: string;
  imageName: string;
  nickname: string;
  positionX: number;
  positionY: number;
};

export type PostPostsPostIdCommentsParams = {
  /**
   * 로그인 된 상태로 요청하는지의 여부<br/>(true로 요청하는 경우 Authorization 헤더에 액세스 토큰을 담아 보내야 함)<br/><br/>true이면 테이블의 authorId에 로그인한 사용자의 ID가 들어감.<br/>false이면 테이블의 authorId에 NULL이 들어감.
   */
  asSignedUser?: boolean;
};

export type PutPostsPostId400Validation = {
  content?: string;
  imageName?: string;
  title?: string;
};

export type PutPostsPostId400 = {
  message: string;
  validation?: PutPostsPostId400Validation;
};

export type PutPostsPostIdBody = {
  content: string;
  imageName: string;
  title: string;
};

export type PostPosts400Validation = {
  content?: string;
  imageName?: string;
  title?: string;
};

export type PostPosts400 = {
  message: string;
  validation?: PostPosts400Validation;
};

export type PostPosts201 = {
  postId: number;
};

export type PostPostsBody = {
  content: string;
  imageName: string;
  title: string;
};

export type GetPostsOrderby = (typeof GetPostsOrderby)[keyof typeof GetPostsOrderby];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetPostsOrderby = {
  popular: 'popular',
  latest: 'latest'
} as const;

export type GetPostsParams = {
  /**
   * 페이지 번호
   */
  page?: number;
  /**
   * 정렬 기준 (인기순, 최신순)
   */
  orderby?: GetPostsOrderby;
  /**
   * 특정 유저가 작성한 머쓱이만 조회할 때 사용 (userId)
   */
  authorId?: number;
  /**
   * 특정 키워드가 제목이나 내용에 포함된 머쓱이만 조회할 때 사용
   */
  keyword?: string;
};

export type PostSlackVerificationBody = {
  slackId: string;
  slackWorkspace: string;
};

export type PutUsersUserIdSlack400Validation = {
  code?: string;
};

export type PutUsersUserIdSlack400 = {
  message: string;
  validation?: PutUsersUserIdSlack400Validation;
};

export type PutUsersUserIdSlackBody = {
  code: string;
};

export type PutUsersUserId400Validation = {
  introduce?: string;
  name?: string;
};

export type PutUsersUserId400 = {
  message: string;
  validation?: PutUsersUserId400Validation;
};

export type PutUsersUserIdBody = {
  introduce: string;
  name: string;
};

export type GetUsersParams = {
  /**
   * 페이지 번호
   */
  page?: number;
  /**
   * 특정 키워드가 포함된 사용자만 조회할 때 사용
   */
  keyword?: string;
};

export type PutAuthPassword500 = {
  message: string;
};

export type PutAuthPassword400Validation = {
  password?: string;
};

export type PutAuthPassword400 = {
  message: string;
  validation?: PutAuthPassword400Validation;
};

export type PutAuthPassword200 = {
  message: string;
};

export type PutAuthPasswordBody = {
  password: string;
};

export type GetAuthCheck200 = {
  accessToken: string;
  userId: number;
};

export type PostAuthSignout200 = {
  message: string;
};

export type PostAuthSignin400 = {
  message: string;
};

export type PostAuthSignin200 = {
  accessToken: string;
  userId: number;
};

export type PostAuthSigninBody = {
  password: string;
  username: string;
};

export type PostAuthSignup409 = {
  message: string;
};

export type PostAuthSignup400Validation = {
  name?: string;
  password?: string;
  username?: string;
};

export type PostAuthSignup400 = {
  message: string;
  validation?: PostAuthSignup400Validation;
};

export type PostAuthSignup201 = {
  accessToken: string;
  userId: number;
};

export type PostAuthSignupBody = {
  name: string;
  password: string;
  username: string;
};

export type NotFoundPostResponse = {
  message: string;
};

export type NotFoundCommentResponse = {
  message: string;
};

export type NotFoundUserResponse = {
  message: string;
};

export type UnauthorizedResponse = {
  message: string;
};

export interface Comment {
  authorId?: number;
  commentId: number;
  content: string;
  imageName: string;
  nickname: string;
  positionX: number;
  positionY: number;
  postId: number;
}

export type PostDetailCommentsItem = {
  commentId: number;
  imageName: string;
  positionX: number;
  positionY: number;
};

export interface PostDetail {
  authorId: number;
  authorName: string;
  comments: PostDetailCommentsItem[];
  content: string;
  imageName: string;
  postId: number;
  title: string;
}

export type PostListItem = {
  authorId: number;
  authorName: string;
  commentCount: number;
  content: string;
  imageName: string;
  postId: number;
  title: string;
};

export type PostList = PostListItem[];

export interface User {
  commentCount: number;
  imageName: string;
  introduce: string;
  name: string;
  postCount: number;
  slackId: string;
  slackWorkspace: string;
  userId: number;
  username: string;
}

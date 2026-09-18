import type { Post as PostType } from '../types/post'
import { Post } from './Post'

const samplePosts: PostType[] = [
  {
    id: 1,
    title: 'The small API habit that makes debugging faster',
    author: 'Maya Chen',
    excerpt: 'Before reaching for another tool, write down the request shape, the response you expected, and the first place reality diverged.',
    date: '2026-09-18T12:00:00.000Z',
    category: 'Workflow',
  },
  {
    id: 2,
    title: 'A practical guide to calmer CSS architecture',
    author: 'Jordan Lee',
    excerpt: 'A naming convention is useful, but a clear decision about ownership is what keeps a stylesheet from becoming a second application.',
    date: '2026-09-12T09:30:00.000Z',
    category: 'CSS & Design',
  },
  {
    id: 3,
    title: 'What I learned profiling a slow React route',
    author: 'Sam Okafor',
    excerpt: 'The biggest win was not a clever memo. It was removing work from a component that never needed to know about the whole page.',
    date: '2026-09-08T14:15:00.000Z',
    category: 'React',
  },
]

type PostListProps = {
  posts?: PostType[]
}

export function PostList({ posts = samplePosts }: PostListProps) {
  return (
    <section className="posts-section" aria-labelledby="latest-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The team notebook</p>
          <h1 id="latest-heading">Latest insights</h1>
        </div>
        <span className="post-count">{posts.length} posts</span>
      </div>
      <div className="post-list">
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </section>
  )
}

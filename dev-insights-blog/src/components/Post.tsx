import { memo } from 'react'
import type { Post as PostType } from '../types/post'

type PostProps = {
  post: PostType
}

function isRecent(date: string) {
  const hoursSincePosted = (Date.now() - new Date(date).getTime()) / 3_600_000
  return hoursSincePosted >= 0 && hoursSincePosted <= 24
}

export const Post = memo(function Post({ post }: PostProps) {
  const recent = isRecent(post.date)
  const formattedDate = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(post.date))

  return (
    <article
      className={`post-card ${post.author === 'Maya Chen' ? 'post-card--featured' : ''}`}
      style={post.author === 'Maya Chen' ? { borderTopColor: 'var(--coral)' } : undefined}
    >
      <div className="post-card__topline">
        <span className="post-category">{post.category}</span>
        {recent && <span className="new-badge">New!</span>}
      </div>
      <h2>{post.title}</h2>
      <p className="post-excerpt">{post.excerpt}</p>
      <footer className="post-meta">
        <span className="author-avatar" aria-hidden="true">{post.author.charAt(0)}</span>
        <span>By <strong>{post.author}</strong></span>
        <span className="meta-divider" aria-hidden="true">/</span>
        <time dateTime={post.date}>{formattedDate}</time>
      </footer>
    </article>
  )
})

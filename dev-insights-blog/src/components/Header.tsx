export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Dev Insights home">
        <span className="brand-mark" aria-hidden="true">DI</span>
        <span>Dev Insights</span>
      </a>
      <nav aria-label="Primary navigation">
        <a className="new-post-link" href="#new-post">
          <span aria-hidden="true">+</span> New Post
        </a>
      </nav>
    </header>
  )
}

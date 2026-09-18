import { Header } from './components/Header'
import { PostList } from './components/PostList'
import { withLogger } from './components/hoc/withLogger'
import './App.css'

const LoggedPostList = withLogger(PostList, 'PostList')

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="intro" aria-label="About Dev Insights">
          <span className="intro-rule" aria-hidden="true"></span>
          <p>Notes from the people building for the web</p>
          <span className="intro-rule" aria-hidden="true"></span>
        </section>
        <LoggedPostList />
      </main>
      <footer className="site-footer">
        <span>Dev Insights / Internal knowledge, openly shared.</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  )
}

export default App

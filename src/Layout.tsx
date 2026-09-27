import type { FC } from 'hono/jsx'

export const Layout: FC<{ title: string; children: any }> = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <meta name="description" content="Himanshu Dixit — AI Systems Researcher & Software Engineer" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="container">
          <header class="header">
            <h1 class="name"><a href="/">Himanshu Dixit</a></h1>
            <p class="role">AI Systems Researcher &amp; Software Engineer</p>
            <div class="nav-links">
              <a href="/">Overview</a>
              <a href="/research">Research</a>
              <a href="/systems">Systems &amp; Code</a>
              <a href="/publications">Publications</a>
              <a href="https://github.com/Himan-D">GitHub</a>
              <a href="mailto:himan@trinetralabs.ai">Contact</a>
            </div>
          </header>
          <hr class="divider" />
          <main>
            {props.children}
          </main>
          <footer class="footer">
            <hr class="divider" />
            <p>Himanshu Dixit · <a href="https://github.com/Himan-D">GitHub</a> · <a href="https://www.linkedin.com/in/him-d/">LinkedIn</a> · <a href="mailto:himan@trinetralabs.ai">himan@trinetralabs.ai</a></p>
          </footer>
        </div>
      </body>
    </html>
  )
}

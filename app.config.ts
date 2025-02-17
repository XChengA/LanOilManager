export default defineAppConfig({
  charset: 'utf-16',
  viewport: 'width=500, initial-scale=1',
  title: 'casterBlog',
  meta: [
    // <meta name="description" content="My amazing site">
    { name: 'description', content: 'casterBlog' },
    { name: 'keywords', content: 'casterBlog react vue html javaScript 前端' }
  ],
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
})

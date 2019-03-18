# designnest.io

Personal website running on Gatsby, React, and Node.js.

## Installation

```bash
git clone git@github.com:designnestio/designnest_io
cd designnest_io
yarn
yarn run dev
```

## Features

- Posts and pages in Markdown
- Tags and categories
- Disqus comments

## Notes

### Format all markdown files

```bash
cd content/posts
prettier
  --print-width 100
  --no-semi
  --single-quote
  --jsx-single-quote
  --trailing-comma es5
  --arrow-parens avoid
  --parser "markdown"  "**/*.md"
```

## Contributing

If you see any typos or formatting errors in a post, please do not hesitate to open a pull request and fix it!

## Acknowledgements

- Tania Rascia - Her blog UI/UX, fell in love with it and used it for this site.

## License

This project is open source and available under the [MIT License](LICENSE).

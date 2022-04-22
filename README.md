# Enchanted-Code Theme
The official Enchanted-Code jekyll theme. Inspired from the Minima theme. Designed to be uncluttered and optimised for modern web-browsers.

## Features
- Theme picker to switch between site themes
- Dark-mode, Light-mode
- Feather Icons included (v4.29.0)
- Responsive design

## Installation
And add these lines to your Jekyll site's `_config.yml`:

```yaml
remote_theme: enchantedcode-theme

plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-remote-theme
```

## Usage
### Config
Configuration options are documented in the sample `_config.yml` file.

### Includes
- `breadcrumb.html` - A breadcrumb element (if enabled)
- `feather-icon.html` - Place a svg feather-icon (icon_name argument must be supplied)
- `footer.html` - The sites footer element
- `head.html` - The sites head element
- `header.html` - The sites header element with navbar, title, etc
- `posts.html` -  The posts, with optional pagination

### Layouts
- `default.html` - A basic html page with head, header, main and footer
- `home.html` - The sites homepage/index
- `page.html` - A page that isn't a post e.g. about or contact
- `post.html` - A layout for posts

### Sass
- `enchantedcode-theme.scss` - The site theme loader
- `theme` - directory containing all the site themes

### Assets
- `main.scss` - The import sass theme from `_sass`

## Development
To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.

## License
The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

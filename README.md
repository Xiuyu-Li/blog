# Blog
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea934904-1db4-4631-adde-dc64a3ee580c/deploy-status)](https://app.netlify.com/sites/xiuyuli-blog/deploys)

This is my own blog built with `Gatsby`.

## Old version

- 2017: https://github.com/Xiuyu-Li/blog/tree/archive-hexo

## Get Started

```bash
# Run dev server at localhost
npm run dev

# Build your website to blog folder
bash build.sh

# Build and deploy your website to GitHub Pages, Netlify or wherever you want.
npm run deploy
```
## Structure

```
                         Github
                      +----------+              Lambda,         
                      |  Action  |              Redirect,        
                      |          |              etc.             
                  +---+----+-----v----+        +---------+         +---------+
+--------+  Push  |        |          | Deploy |         | Request |         |
| Author +--------> master | gh-pages +--------> Netlify <---------+ Clients |
+--------+        |        |          |        |         |         |         |
                  +--------+----------+        +---------+         +----+----+
                       Repository                                                           
                                                                               

```

## Credits

- https://www.himself65.com/

## LICENSE
1. Blog **posts** (`/content/blog`) and **assets** (`/content/assets`) are licensed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.  
2. All **codes** are licensed under the [MIT](https://opensource.org/licenses/MIT) license.  
3. All Copyright reserved for the rest of the content.

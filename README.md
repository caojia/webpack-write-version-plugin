Webpack Write Version Plugin
===

Simple webpack plugin which write version to build file.

Usage
---

```
const WebpackWriteVersionPlugin = require('webpack-write-version-plugin');

module.exports = {
	plugins: [
		new WebpackWriteVersionPlugin({
			fileName: "", // default is "version"
			version: "", // default is "0" 
		}),
	]
}
```

This plugin can also be coordinated with <https://github.com/pirelenito/git-revision-webpack-plugin> to write out local git version.

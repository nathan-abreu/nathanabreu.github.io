# nathanabreu.github.io

## Primeiros passos

Install o less and watch compiler. Watch compiler will listen to touched files and automatically update the page.

To install less:
```
npm install -g less
```

To install less-watch-compiler:
```
npm install -g less-watch-compiler
```

NOTE: You have to install them globally (`-g` flag).

## Usage

### Watch compiler

You can listen to updates files using the following command:

```
less-watch-compiler
```

Configurations are inside [less-watch-compiler.config.json](../less-watch-compiler.config.json).  
We should have a main file (inside `less` directory) defined in this configuration file, that will import all the smaller files and include them in one output file (inside `css` directory).

When commiting, remember to commit all modified .less files and generated .css files.

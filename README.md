generator-atomapp
=================

atom app generator


## Usage

```sh
$ npm install -g yo generator-atomapp
$ mkdir MyAtomApp && cd $_
$ yo atomapp
```

## Development

```sh
$ grunt
```

### livereload

Add following script to your `html` you want.

```html
<script src="http://localhost:35729/livereload.js"></script>
```

See [this link][livereload].


## Distribution

```sh
$ grunt dist
```

Check `./dist` directory.


## Execution

### OSX

```sh
$ grunt run # without distribution
$ open ./dist/Atom.app # after distribution
```

### Windows

```sh
> grunt run # without distribution
> .\\dist\\atom.exe # after distribution
```

### Linux

```sh
$ grunt run # without distribution
$ ./dist/atom # after distribution
```


## Test

```sh
$ npm install -g mocha
$ npm test
```


[livereload]: https://github.com/gruntjs/grunt-contrib-watch#enabling-live-reload-in-your-html

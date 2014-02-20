*This repository is a mirror of the [component](http://component.io) module [yields/direction](http://github.com/yields/direction). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-direction`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# direction

  automatically adjust input direction based on user language.

## Installation

    $ component install yields/direction

## Example

```html
<input type='text' name='foo'>
<textarea></textarea>

<script>
  var input = document.querySelector('input')
    , txt = document.querySelector('textarea')
    , direction = require('direction');

  direction(input);
  direction(txt);
</script>
```

## License

  MIT

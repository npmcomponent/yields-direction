
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

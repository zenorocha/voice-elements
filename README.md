# &lt;voice-elements&gt;

> Web Component wrapper to the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html), that allows you to do voice recognition (speech to text) and speech synthesis (text to speech) using [Polymer](http://www.polymer-project.org/).

## Demo

[Check it live!](http://zenorocha.github.io/voice-elements)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install voice-elements --save
```

Or [download as ZIP](https://github.com/zenorocha/voice-elements/archive/gh-pages.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/voice-elements/dist/voice-player.html">
    <link rel="import" href="bower_components/voice-elements/dist/voice-recognition.html">
    ```

3. Start using it!

    ```html
    <voice-player></voice-player>
    <voice-recognition></voice-recognition>
    ```

## &lt;voice-player&gt;

Provides you a simple DOM API to do speech synthesis (text to speech).

### Options

Attribute  | Options        | Default             | Description
---        | ---         | ---                 | ---
`autoplay` | *boolean*   | `false`             | Specifies if the audio should play when page loads.
`accent`   | `en-US`, `en-GB`, `es-ES`, `fr-FR`, `it-IT`, `de-DE`, `ja-JP`, `ko-KR`, `zh-CN`    | `en-US`    | Specifies the language to be synthesized and spoken.
`text`     | *string*    | `You are awesome`   | Specifies the text to be synthesized and spoken.

### Methods

Method     | Parameters     | Returns            | Description
---        | ---            | ---                | ---
`speak()`  | None.          | Nothing.           | Triggers the voice audio to be played.
`cancel()` | None.          | Nothing.           | Triggers the voice audio to be canceled.
`pause()`  | None.          | Nothing.           | Triggers the voice audio to be paused.
`resume()` | None.          | Nothing.           | Triggers the voice audio to be resumed.

### Events

Event      | Description
---        | ---
`onstart`  | Triggers when the voice begun to be spoken.
`onend`    | Triggers when the voice completed to be spoken.
`onerror`  | Triggers when the voice player detects an error.
`onpause`  | Triggers when the voice player is resumed.
`onresume` | Triggers when the voice player is resumed.

## &lt;voice-recognition&gt;

Provides you a simple DOM API to do voice recognition (speech to text).

### Options

Attribute    | Options        | Default           | Description
---          | ---         | ---               | ---
`continuous` | *boolean*   | `false`           | Specifies if the recognition should continue when the user pauses while speaking.
`text`       | *string*    |                   | Returns the recognized text.

### Methods

Method    | Parameters     | Returns           | Description
---       | ---            | ---               | ---
`start()` | None.          | Nothing.          | Starts the voice recognition.
`stop()`  | None.          | Nothing.          | Requests to recognition service to stop listening to more audio.
`abort()` | None.          | Nothing.          | Requests to immediately stop listening and stop recognizing.

### Events

Event      | Description
---        | ---
`onstart`  | Triggers when the recognition begins.
`onerror`  | Triggers when there's a recognition error.
`onend`    | Triggers when the recognition ends.
`onresult` | Triggers when there's a recognition result.

## Browser Support

Unfortunately, the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html) still have a poor support. Check [Can I Use](http://caniuse.com/#feat=web-speech) for more information.

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
None ✘ | Latest ✔ | None ✘ | None ✘ | Latest ✔ |

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

2. Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

3. To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

4. To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

5. To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/zenorocha/voice-elements/releases).

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha

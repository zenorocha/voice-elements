# &lt;voice&gt; ![Bower Version](https://badge.fury.io/bo/voice-element.svg)

> [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html) wrapper that allows you to do voice recognition (speech to text) and speech synthesis (text to speech) using [Polymer](http://www.polymer-project.org/).

## Demo

[Check it live!](http://zenorocha.github.io/voice-element)

## Usage

1. Install the component using [Bower](http://bower.io/):

    ```sh
    $ bower install voice-element --save
    ```

2. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

3. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/voice-element/dist/voice-element.html">
    ```

4. Start using it!

    ```html
    <voice-element></voice-element>
    ```

## Options

Attribute  | Options     | Default             | Description
---        | ---         | ---                 | ---
`autoplay` | *boolean*   | `false`             | Specifies if the audio should play when page loads.
`text`     | *string*    | `You are awesome`   | Specifies the text to be synthesized and spoken.
`pitch`    | *int*       | `1`                 | Specifies the speaking pitch for the utterance. It ranges between `0` and `2`.
`rate`     | *int*       | `1`                 | Specifies the speaking rate for the utterance. `1` corresponds to a normal speaking rate. `2` is twice as fast, `0.5` is half as fast, and so on.
`volume`   | *int*       | `1`                 | Specifies the speaking volume for the utterance. It ranges between `0` and `1`.

## Methods

Method   | Parameters     | Returns             | Description
---      | ---            | ---                 | ---
`play()` | None.          | Nothing.            | Triggers the audio to be played.

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
    $ grunt
    ```

4. Once you finish developing it, build the distribution files and publish it on Bower.

    ```sh
    $ grunt build
    $ bower register voice-element https://github.com/you/voice-element
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/zenorocha/voice-element/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)

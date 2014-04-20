# &lt;voice-elements&gt; [![Bower Version](https://badge.fury.io/bo/voice-elements.svg)]() [![Custom Elements](http://img.shields.io/badge/custom-elements-9073c0.svg)]()

> Web Component wrapper to the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html), that allows you to do voice recognition (speech to text) and speech synthesis (text to speech) using [Polymer](http://www.polymer-project.org/).

## Demo

[Check it live!](http://zenorocha.github.io/voice-elements)

## Usage

1. Install the component using [Bower](http://bower.io/):

    ```sh
    $ bower install voice-elements --save
    ```

2. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

3. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/voice-elements/dist/voice-player.html">
    <link rel="import" href="bower_components/voice-elements/dist/voice-recognition.html">
    ```

4. Start using it!

    ```html
    <voice-player></voice-player>
    <voice-recognition></voice-recognition>
    ```

## &lt;voice-player&gt;

Provides you a simple DOM API to do speech synthesis (text to speech).

### Options

Attribute  | Type        | Default             | Description
---        | ---         | ---                 | ---
`autoplay` | *boolean*   | `false`             | Specifies if the audio should play when page loads.
`text`     | *string*    | `You are awesome`   | Specifies the text to be synthesized and spoken.
`pitch`    | *int*       | `1`                 | Specifies the speaking pitch for the utterance. It ranges between `0` and `2`.
`rate`     | *int*       | `1`                 | Specifies the speaking rate for the utterance. `1` corresponds to a normal speaking rate. `2` is twice as fast, `0.5` is half as fast, and so on.
`volume`   | *int*       | `1`                 | Specifies the speaking volume for the utterance. It ranges between `0` and `1`.

### Methods

Method   | Parameters     | Returns             | Description
---      | ---            | ---                 | ---
`play()` | None.          | Nothing.            | Triggers the audio to be played.

## &lt;voice-recognition&gt;

Provides you a simple DOM API to do speech synthesis (text to speech).

### Options

Attribute    | Type        | Default             | Description
---          | ---         | ---                 | ---
`continuous` | *boolean*   | `false`             | Specifies if the audio should play when page loads.

### Methods

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

4. To publish a new version, build the distribution files, bump package version, create tag, commit and push.

    ```sh
    $ grunt build
    ```

    ```sh
    $ grunt bump       # v0.0.1
    $ grunt bump:minor # v0.1.0
    $ grunt bump:major # v1.0.0
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

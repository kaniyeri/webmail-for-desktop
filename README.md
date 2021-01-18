# Webmail for Desktop

Electron based website wrapper for IIT Bombay Webmail.[https://webmail-sso.iitb.ac.in]  


**This is not an official implementation.**

# Usage and Installation

Download one of the release packages from the right, pertaining to your operating system. It will work natively, without any extra packages.

## Building from source

### Prerequisites 
- Nodejs
- Electron  


To install prebuilt Electron binaries, use [`npm`](https://docs.npmjs.com/).
```sh
npm install electron --save-dev 
```

### Key commands

Before running any of the following commands run(only once):

```bash
npm install
```

run:

```bash
npm run start
```

compile:

For windows, first set the icon attribute(the one under packagerConfig) in the package.json file to `assets/webmail-win.ico`

For macos, set the above mentioned attribute to `assets/webmail-mac.icns`

The above step is required due to the way that electron forge works (:

then, compile package using:

```bash
npm run package
```

and make with:

```bash
npm run make
```

## License

[GNU Affero General Public License v3.0](LICENSE)

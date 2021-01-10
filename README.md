# Webmail for Desktop!

This is a desktop app that ports webmail to native the windows and mac environment!

## Key commands

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
For macos, the above mentioned attribute to `assets/webmail-mac.icns`

The above step is required due to the way that electron forge works (:

then, compile package using:

```bash
npm run pacakge
```

and make with:

```bash
npm run make
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)

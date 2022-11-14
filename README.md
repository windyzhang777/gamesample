# Project

This project utilizes [React Native Web](https://www.npmjs.com/package/react-native-web) to share as much UI code as possible

Front end is React & React Native with Redux & Sagas.

# Project Structure

### store

- All of Redux

### navigation

- Main app nav
- TODO: add more info

### screens

- These map to screens in the app
- They should be smart components meaning that they have the connections to redux
- They should have route parameters
- No UI

### containers

- Not as common but can be useful
- Connected to redux that doesn’t map to a full fledged screen
- examples: top nav, custom avatar,

### components

- Dumb components that do all the drawing, they should take in data and work with it.
- Ok to use local state and navigation hooks here if necessary but those are about it. everything else should be done from screens/containers.

## Install

To install `node_modules` for use with both `native` and `web` projects. Just run `yarn` or `yarn install` from the project root.

## Development

### Web

To run the development web platform server run `yarn web` from the workspace root.

### Native

#### iOS

In the project root and run `yarn ios`

#### Setup

In order to work on the native project, you'll need to first setup your environment: https://reactnative.dev/docs/environment-setup

Follow along the instructions for the "React Native CLI Quickstart".

You'll have to also run `pod install` from the `ios` directory in order to install the CocoaPod dependencies.

#### Useful commands

`yarn native` - the default server that bundles the source for native

`yarn ios` - kicks off the bundler if it's not open, then opens the iOS Simulator

`yarn android` - kicks off the bundler if it's not open, then opens the Android Simulator

### Storybook (Not Migrated over yet)

Storybook is a useful component previewer, documentor, and tester for react components visually. It has its own user interface and view from the platform app.

#### Web

`yarn storybook:web` - will start the web version of storybook.

#### Native

`yarn storybook:native` - will start the web client for the native app storybook instance.

NOTE: you will need to have the native storybook preview open.

## Build

TODO

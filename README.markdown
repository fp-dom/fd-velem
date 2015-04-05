# fd-velem

[![Build Status](https://travis-ci.org/fp-dom/fd-velem.svg)](https://travis-ci.org/fp-dom/fd-velem) [![npm version](https://badge.fury.io/js/fd-velem.svg)](http://badge.fury.io/js/fd-velem)
> Create virtual dom elements FP-style!

## Installation

`npm install fd-velem --save`

## Usage

```js
import velem from 'fd-velem';

var div = velem('div')({})(['Hello World']);

```

## API

`velem :: (tagName, content)`

* `tagName` -> string: type of element to be created. 

* `content` -> string: Contents of the newly created element.

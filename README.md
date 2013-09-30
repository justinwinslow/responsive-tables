Responsive HTML Tables
======================

Ugh, tables... am I right? There are other responsive table frameworks out there but I wanted to create one that was super simple in scope, extremely flexible, and easy to use.

## What It Does

When the containing element of your table is smaller than the table itself, the first column of the table becomes fixed and subsequent columns are allowed to scroll horizontally underneath. This means no dropping columns or any other tomfoolery like that, and the table fluidly resizes to any width.

## Usage

### Instantiating

`$('table').responsiveTable()`

### Hover

On hover, a class called "hover" is added to rows in the table body. Style `tr.hover` to get row hilighting or other effects.

### Async

So, what if I need to instantiate the table before data is actually ready? Because of how this is implemented, a clone of the table is made to act as the fixed column. The easiest way I found to keep the tables sync'd up using Marionette, was just to force rendering the whole view when data returns and add the responsive tables code in the `onRender` handler.

As I build this out I may add methods for updating state, or whatever, to make it more friendly to more complex situations.

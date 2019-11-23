![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# stencil-component-prefetch

A web component for pre-fetching the code for additional components used later in the app.

By default the browser fetches the component code as-needed when a component is added to the DOM.

In certain cases this be problematic when network latency is bad or disconnected. An example is when pages are separate components the code must be downloaded
prior to the page rendering, this may result in a noticeable lag between when a user clicks on a nav element and when the page actually transitions.

A number of other cases where this is an issue are discussed here along with a proposed prefetchComponent() api: https://github.com/ionic-team/stencil/pull/1558

Hopefully one day that api will come to fruition.  Until then we have this component.

See the demo: https://beck24.github.io/stencil-component-prefetch/

See the component properties/methods: https://github.com/beck24/stencil-component-prefetch/blob/master/src/components/stencil-component-prefetch/readme.md

# Installation

## Via NPM

Install the module

    npm install @beck24/stencil-component-prefetch

# Usage

In your `app-root` component:

Add the pre-fetch component to your rendered markup

    <stencil-component-prefetch />

Import `Build` and `Element` from stencil core

    import { Component, h, Build, Element } from '@stencil/core';

Make an element reference variable

    export class AppRoot {
      @Element() el: HTMLElement;

Use the `componentDidRender` lifecycle hook to fetch a reference to the prefetcher and pre-fetch your components

    componentDidRender() {

      const componentsConfig = [
        {
          tag: 'my-custom-toast'
        },
        {
          tag: 'app-menu',
        },
        {
          tag: 'page-search',
          props: {
            prefetching: true,
          }
        },
        {
          tag: 'my-other-heavy-component',
          props: {
            enabled: true,
            name: 'some-name'
          }
        }
      ];

      if (Build.isBrowser) {
        // only pre-fetch if it's a real browser
        const prefetch = this.el.querySelector('stencil-component-prefetch');

        prefetch.setComponents(componentsConfig);
      }
    }

By default the components are pre-fetched after a delay of 1500ms to ensure it isn't interfering with more immediate loading/rendering tasks.  
This behavior can be changed with the `setDelay` method if desired

    // set a delay of 0 - fetch immediately
    prefetch.setDelay(0).then(() => {
      prefetch.setComponents(componentsConfig);
    });

# Method

The component forces pre-fetching by sequentially adding registered components to the DOM in a hidden div and immediately removing them.  
The addition of the component triggers the browser to fetch the code if it hasn't already. The immediate removal keeps the DOM clean of unwanted/duplicate components.

This seems to work well, with a few things to watch out for.

You should not pre-fetch components that:

1. automatically change the route
2. automatically manipulate DOM elements outside of themselves
3. automatically change/affect state
4. automatically make API calls that may be unwanted/unnecessary immediately

There are ways to work around these limitations if they are your own stencil components.

# State-changing Component prefetch example

If you have a component you want to prefetch, but it modifies state you can add a new prop to the component

    @Prop() prefetching: boolean = false;

Prevent the component actually rendering if prefetching

    render() {
      if (this.prefetching) {
        return null;
      }

      return (
        <div>My rendered component</div>
      )
    }

Early-return on lifecycle hooks that perform actions unwanted during pre-fetching

    componentWillLoad() {
      if (this.prefetching) {
        return;
      }

      // all state stuff ignored during pre-fetch
      this.store.mapStateToProps(this, state => {

      });
    }

    componentDidRender() {
      if (this.prefetching) {
        return;
      }

      // state-modifying stuff
    }

When prefetching this component just set the prop `prefetching` to true in the `app-root`

    componentDidRender() {

      const componentsConfig = [
        {
          tag: 'my-state-changing-component',
          props: {
            prefetching: true,
          }
        }
      ];

      if (Build.isBrowser) {
        const prefetch = this.el.querySelector('stencil-component-prefetch');

        prefetch.setComponents(componentsConfig);
      }
    }


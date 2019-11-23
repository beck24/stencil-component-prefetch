import { Component, h, Method, Element } from '@stencil/core';

export interface prefetchComponentInterface {
  tag: string,
  props?: Object
}

@Component({
  tag: 'stencil-component-prefetch',
  styleUrl: 'stencil-component-prefetch.css',
  shadow: true
})
export class StencilComponentPrefetch {
  @Element() el: HTMLElement;

  private delay: number = 1500;

  /**
   *
   * @param delay number - the amount of time to wait before pre-fetching (ms)
   */
  @Method('setDelay')
  async setDelay(delay: number) {
    this.delay = delay;
  }


  /**
   *
   * @param components an array of component information to prefetch
   *
   * [
   *  {
   *    tag: 'my-component',
   *    props: {
   *      myProp: value,
   *      otherProp, otherValue
   *    }
   *  }
   * ]
   */
  @Method('setComponents')
  async setComponents(components: prefetchComponentInterface[]) {
    setTimeout(() => {
      const container = this.el.shadowRoot.querySelector('.stencil-component-prefetch');

      components.forEach(c => {
        const props = c.hasOwnProperty('props') ? c.props : {};

        const component = Object.assign(document.createElement(c.tag), props);

        container.appendChild(component);
        component.remove();
      });
    }, this.delay);
  }


  render() {
    return <div class="stencil-component-prefetch" />
  }
}

# `<HelloButton/>` for React

## Usage

```javascript
import React, { useState } from "react"
import { HelloButton } from "@hellocoop/react"

function ExampleLoginPage() {
  const [loading, setLoading] = useState(false)
  const login = async () => {
    try {
      setLoading(true) // Show load spinner and disable button
      /* To create a request url,
        see https://www.hello.dev/documentation/Integrating-hello.html#_2-create-request-url */
      const res = await fetch() // Fetch the request URL from your backend
      const { requestURL } = await res.json()
      window.location.href = requestURL
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  return <HelloButton onClick={login} loading={loading} disabled={loading} />
}
```

## Props

| Name     | Type                   | Description                                                                                           |
| -------- | ---------------------- | ----------------------------------------------------------------------------------------------------- |
| onClick  | Function               | **Required**<br/><br/>Called on click of Hellō button                                                 |
| loading  | Boolean                | Defaults to `false`<br/><br/>Show load spinner<br/>(Best used in conjunction with `disabled` prop)    |
| disabled | Boolean                | Defaults to `false`<br/><br/>Disable Hellō button<br/>(Best used in conjunction with `loading` prop)  |
| tooltip  | Boolean                | Defaults to `true`<br/><br/>Show the about tooltip button                                             |
| color    | String: [Enum](#color) | Controls style of Hellō button                                                                        |
| hover    | String: [Enum](#hover) | Controls hover effect of Hellō button                                                                 |
| lang     | String: [Enum](#lang)  | Defaults to "en"<br/><br/>Language of Hellō button, about tooltip button and text                     |
| label    | String                 | Defaults to "ō&nbsp;&nbsp;&nbsp;Continue with Hellō"<br/><br/>Overwrite the default Hellō button text |

## Styling

`color` and `hover` props control styling of the Hellō Button.

Demo different button styles at [hello.dev](https://www.hello.dev/documentation/getting-started.html#_2-standard-hello-buttons)

### `color`

The values suffixed with `invert` and `static` are theme aware.

- hello-btn-black-on-light
- hello-btn-black-on-dark
- hello-btn-white-on-light
- hello-btn-white-on-dark
- hello-btn-white-and-invert
- hello-btn-black-and-invert
- hello-btn-black-and-static
- hello-btn-white-and-static

### `hover`

- hello-btn-hover-glow
- hello-btn-hover-glare
- hello-btn-hover-none

### Advanced Styling

Internally `<HelloButton/>` renders this markup

```html
<div class="hello-container">
  <button class="hello-btn">ō&nbsp;&nbsp;&nbsp;Continue with Hellō</button>
  <div class="hello-about-conatiner">
    <button class="hello-about">Hello lets you control your identity</button>
    <span class="hello-about-bubble">
      Hellō is a personal identity wallet that lets you choose what you share,
      how you authenticate, and how you recover your wallet. Hellō remembers who
      you are and protects your privacy.
    </span>
  </div>
</div>
```

If you want to apply additional styles, the `HelloButton` component accepts a `style` and `className` prop as well, values which gets applied to the `.hello-btn` node.

You can also add/overwrite targetting classes per the markup above.

```
.hello-container {
    /*
       top level container holding the Hellō button,
       about button and bubble
    */
}
.hello-btn {
    // Hellō button
}
.hello-about-container {
    // container for hello about button and bubble
}
.hello-about {
    // Hellō about button
}
.hello-about-bubble {
    // Hellō about bubble
}
```

## Locales

### lang

| Value        | Language |
| ------------ | -------- |
| en (Default) | English  |
| hi           | Hindi    |
| ar           | Arabic   |
| de           | German   |
| fr           | Frarch   |
| es           | Spanish  |

Don't see your locale? We encourage you to create a translation for your locale per
[hellocoop/wallet-i18n](https://github.com/hellocoop/wallet-i18n) and submit a pull request for review.

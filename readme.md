# Stencil Component POC

Stencil v4.19.0 introduced support for Declarative Shadow DOM. However, there were issues with `:host` styles not being applied correctly to the host element when Declarative Shadow DOM is enabled via the `serializeShadowRoot` option in `renderToString`. This issue seems to be resolved in Stencil v4.21.0.

## Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/ionic-team/stencil-component-starter.git
   cd stencil-component-starter
   ```

2. **Install deps:**
   ```sh
   npm install
   ```

3. **Start the dev server:**
   ```sh
   npm run start
   ```

   This will build the project, prerender the components, and start the dev server.
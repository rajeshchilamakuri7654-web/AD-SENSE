import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppServer from './AppServer';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <AppServer />
    </StaticRouter>
  );
}

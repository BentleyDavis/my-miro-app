import * as React from 'react';
import ReactDOM from 'react-dom';
import Airtable from 'airtable';

async function init() {
  const [sticker] = await miro.board.widgets.create({
    type: 'sticker',
    text: 'Hello, World!',
  });

  await miro.board.viewport.zoomToObject(sticker);
}

async function airtableTest() {
  // This code is never run and an error still appears
  const base = new Airtable({apiKey: ''}).base('');
  console.log(base)
}

function App() {
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <img src="/src/assets/congratulations.png" />
      </div>
      <div className="cs1 ce12">
        <h1>Congratulations!</h1>
        <p>You've just created your first Miro app!</p>
        <p>
          To explore more and build your own app, see the Miro Developer
          Platform documentation.
        </p>
      </div>
      <div className="cs1 ce12">
        <a
          className="button button-primary"
          target="_blank"
          href="https://developers.miro.com/docs/welcome"
        >
          Read the documentation
        </a>

        <a onClick={airtableTest}
          className="button button-primary"
          href=""
        >
          Just here to satify validation. This does not need to be clicked
        </a>

      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

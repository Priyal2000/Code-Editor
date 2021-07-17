import React, { useState, useEffect } from 'react';
import Editor from './component/Editor'
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PasteClient  from "pastebin-api";
import axios from 'axios';
import fetch, { BodyInit } from "node-fetch";
import Parser from "fast-xml-parser";

function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  
const saveHtml = async (e) => {

  const res = await fetch("https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php", {
    method: "POST",
    url:"https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Referer: "http://pastebin.com"},
    body: JSON.stringify( {
      api_dev_key: "Eb2QzoySh0PxS3sABUztvcutkOnsL1-q",
      api_option: "paste",
      api_paste_name: "Test.html",
      api_paste_code: "<h1>Hello<h1>",
      api_paste_format: "html5",
      api_paste_private:  0,
      api_paste_expire_date: "N",

    }),
  });

  const url = await res.text();
  console.log(url);
  
}

  
 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div>
      <div class="navbar">
   <h1>CODE EDITOR</h1>
  <button onClick={saveHtml}>Save HTML</button>
  <button >Save CSS</button>
  <button >Save JS</button>
</div>
    <div className="flex-container">
      <div className="column">
        
        <Tabs>
          <div className = "tabs">
          <TabList>
            <Tab>HTML</Tab>
            <Tab>CSS</Tab>
            <Tab>Javascript</Tab>
          </TabList>
          </div>
          
          <div className="top-pane">
            <TabPanel>
            <Editor
                  language="xml"
                  displayName="HTML"
                  value={html}
                  onChange={setHtml}
                />
              </TabPanel>
            <TabPanel>
            <Editor
                  language="css"
                  displayName="CSS"
                  value={css}
                  onChange={setCss}
                />
            </TabPanel>
            <TabPanel>
            <Editor
                  language="javascript"
                  displayName="JS"
                  value={js}
                  onChange={setJs}
                />
            </TabPanel>
          </div>
       </Tabs>
      </div>
      <div className="column">
        <div className="btm-pane"  >
        <div class="title">Preview</div>
          <div class="content">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;
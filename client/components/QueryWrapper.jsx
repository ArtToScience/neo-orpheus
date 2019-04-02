import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';



const QueryWrapper = props => {

  return (
    <div className="ace-editor">
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        value={props.codeInput}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  )
};

export default QueryWrapper;
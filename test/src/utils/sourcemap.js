import sourceMap from 'source-map-js';

// 找到以.js结尾的fileName
function matchStr(str) {
  if (str.endsWith('.js')) return str.substring(str.lastIndexOf('/') + 1);
}

// 将所有的空格转化为实体字符
function repalceAll(str) {
  return str.replace(new RegExp(' ', 'gm'), '&nbsp;');
}

// 获取文件路径
function getFileLink(str) {
  const reg = /vue-loader-options!\.(.*)\?/;
  const res = str.match(reg);
  console.log(res);
  if (res && Array.isArray(res)) {
    return res[1];
  }
}

function loadSourceMap(fileName) {
  let file,
    env = process.env.NODE_ENV;
  if (env == 'development') {
    file = getFileLink(fileName);
  } else {
    file = matchStr(fileName);
  }
  if (!file) return;
  return new Promise(resolve => {
    fetch(`http://localhost:8083/getmap?fileName=${file}&env=${env}`).then(response => {
      if (env == 'development') {
        resolve(response.text());
      } else {
        resolve(response.json());
      }
    });
  });
}

export const findCodeBySourceMap = async ({ fileName, line, column }, callback) => {
  let sourceData = await loadSourceMap(fileName);
  if (!sourceData) return;
  let result, codeList;
  if (process.env.NODE_ENV == 'development') {
    let source = getFileLink(fileName),
      isStart = false;
    result = {
      source,
      line: line - 1, // 具体的报错行数
      column, // 具体的报错列数
      name: null,
    };
    codeList = sourceData.split('\n').filter(item => {
      if (item.indexOf('<script') != -1 || isStart) {
        isStart = true;
        return item;
      } else if (item.indexOf('</script') != -1) {
        isStart = false;
      }
    });
  } else {
    let { sourcesContent, sources } = sourceData;
    let consumer = await new sourceMap.SourceMapConsumer(sourceData);
    result = consumer.originalPositionFor({
      line: Number(line),
      column: Number(column),
    });
    let code = sourcesContent[sources.indexOf(result.source)];
    codeList = code.split('\n');
  }
  // result结果
  // {
  //   "source": "webpack://myapp/src/views/HomeView.vue",
  //   "line": 24,  // 具体的报错行数
  //   "column": 0, // 具体的报错列数
  //   "name": null
  // }
  let row = result.line,
    len = codeList.length - 1;
  let start = row - 5 >= 0 ? row - 5 : 0, // 将报错代码显示在中间位置
    end = start + 9 >= len ? len : start + 9; // 最多展示10行
  let newLines = [];
  let j = 0;
  for (let i = start; i <= end; i++) {
    j++;
    newLines.push(
      `<div class="code-line ${i + 1 == row ? 'heightlight' : ''}" title="${
        i + 1 == row ? result.source : ''
      }">${j}. ${repalceAll(codeList[i])}</div>`
    );
  }

  let innerHTML = `<div class="errdetail"><div class="errheader">${result.source} at line ${
    result.column
  }:${row}</div><div class="errdetail">${newLines.join('')}</div></div>`;
  callback(innerHTML);
};

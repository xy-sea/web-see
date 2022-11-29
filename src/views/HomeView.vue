<template>
  <div class="home">
    <el-row>
      <el-button type="primary" @click="codeErr">js错误</el-button>
      <el-button type="success" @click="asyncError">异步错误</el-button>
      <el-button type="danger" @click="promiseErr">promise错误</el-button>
    </el-row>
    <el-row>
      <el-button type="info" @click="xhrError">xhr请求报错</el-button>
      <el-button type="warning" @click="fetchError">fetch请求报错</el-button>
    </el-row>
    <el-row>
      <el-button type="danger" @click="resourceError">加载资源报错</el-button>
    </el-row>
    <p class="error">报错统计</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="message" label="报错信息" width="350"> </el-table-column>
      <el-table-column prop="page_url" label="报错页面" width="180"> </el-table-column>
      <el-table-column prop="time" label="报错时间">
        <template slot-scope="scope">
          <span>{{ scope.row.time ? new Date(scope.row.time) : scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="userId" label="用户id"> </el-table-column>
      <el-table-column prop="deviceInfo" label="浏览器信息">
        <template slot-scope="scope">
          <span>{{ scope.row.deviceInfo.browser }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="deviceInfo" label="操作系统">
        <template slot-scope="scope">
          <span>{{ scope.row.deviceInfo.os }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="recordScreenId" label="还原错误代码" width="100">
        <template slot-scope="scope">
          <el-button v-if="scope.row.type == 'error' || scope.row.type == 'unhandledrejection'" type="primary" @click="revertCode(scope.row)">查看源码</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="recordScreenId" label="播放录屏" width="100">
        <template slot-scope="scope">
          <el-button v-if="scope.row.recordScreenId" type="primary" @click="playRecord(scope.row.recordScreenId)">播放录屏</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialogTitle" :class="{ 'revert-disalog': fullscreen }" top="10vh" :fullscreen="fullscreen" :visible.sync="revertdialog" width="90%" :destroy-on-close="true" @opened="opened">
      <div id="revert" ref="revert"></div>
    </el-dialog>
  </div>
</template>

<script>
import { findCodeBySourceMap } from '../utils/sourcemap';
import { unzip } from '../utils/recordScreen.js';
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';

export default {
  name: 'HomeView',
  data() {
    return {
      fullscreen: true,
      revertdialog: false,
      dialogTitle: '',
      tableData: [
        // {
        //   type: 'error',
        //   status: 'error',
        //   message: "Cannot read properties of undefined (reading 'length')",
        //   fileName: 'http://10.105.108.93:3000/js/app.8c773fef.js',
        //   line: 1,
        //   column: 1509,
        //   recordScreenId: '8a2d8510-747c-43da-abfa-4cf61fef5446',
        //   userId: '123',
        //   sdkVersion: '1.0.0',
        //   sdkName: 'web-see',
        //   apikey: 'abcd',
        //   date: '2022-11-28',
        //   uuid: '42fa00f5-aea2-44f0-bfcf-d59186d34714',
        //   page_url: 'http://10.105.108.93:3000/#/',
        //   deviceInfo: {
        //     browser_version: '107.0.0.0',
        //     browser: 'Chrome',
        //     os_version: '10',
        //     os: 'Windows',
        //     ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        //     device: 'Unknow',
        //     device_type: 'Pc'
        //   }
        // }
      ]
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      setTimeout(() => {
        fetch(`http://localhost:8083/getErrorList`)
          .then((response) => response.json())
          .then((res) => {
            this.tableData = res.data;
          });
      }, 500);
    },
    fetchError() {
      fetch('https://jsonplaceholder.typicode.com/posts/a')
        .then((res) => {
          if (res.status == 404) {
            this.getTableData();
          }
        })
        .catch(() => {
          this.getTableData();
        });
    },
    opened() {},
    revertCode(row) {
      findCodeBySourceMap(row, (res) => {
        this.dialogTitle = '查看源码';
        this.fullscreen = false;
        this.revertdialog = true;
        console.log('v', res);

        this.$nextTick(() => {
          this.$refs.revert.innerHTML = res;
        });
      });
    },
    playRecord(id) {
      fetch(`http://localhost:8083/getRecordScreenId?id=${id}`)
        .then((response) => response.json())
        .then((res) => {
          let { code, data } = res;
          if (code == 200) {
            let events = unzip(data[0].events);
            this.fullscreen = true;
            this.dialogTitle = '播放录屏';
            this.revertdialog = true;
            this.$nextTick(() => {
              new rrwebPlayer(
                {
                  target: document.getElementById('revert'),
                  data: {
                    events
                  }
                },
                {
                  UNSAFE_replayCanvas: true
                }
              );
            });
          }
        });
    },
    format(time) {
      let str = new Date(time);
      return str.toLocaleDateString().replace(/\//g, '-') + ' ' + str.toTimeString().substr(0, 8);
    },
    asyncError() {
      this.getTableData();
      setTimeout(() => {
        JSON.parse('');
      });
    },
    codeErr() {
      this.getTableData();
      let a = undefined;
      if (a.length) {
        console.log('1');
      }
    },
    resourceError() {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://abc.com/index.js';
      document.body.appendChild(script);
      // 资源加载失败
      script.onerror = () => {
        this.getTableData();
      };
    },
    promiseErr() {
      new Promise((resolve) => {
        this.getTableData();
        let person = {};
        person.name.age();
        resolve();
      });
    },

    xhrError() {
      let _this = this;
      let ajax = new XMLHttpRequest();
      ajax.open('GET', 'https://abc.com/test/api');
      ajax.setRequestHeader('content-type', 'application/json');
      ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
          _this.getTableData();
        }
        if (ajax.status === 200 || ajax.status === 304) {
          console.log('ajax', ajax);
        }
      };
      ajax.send();
      ajax.addEventListener('loadend', () => {});
    }
  }
};
</script>
<style lang="less">
.error {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  font-weight: 800;
  background-color: #ebeef5;
}
.el-row {
  text-align: left;
  margin-bottom: 10px;
}
.el-dialog__header {
  font-size: 20px;
  font-weight: 800;
}
.revert-disalog {
  .el-dialog__body {
    height: 720px;
  }
}
.rr-player {
  margin: 0 auto;
}
#revert {
  width: 100%;
  display: flex;
}
.errdetail {
  text-align: left;
  width: 100%;
  font-size: 18px;
}
.code-line {
  padding: 5px 0;
}
.heightlight {
  background-color: yellowgreen;
}
.errheader {
  padding: 10px;
  border-bottom: 1px solid rgb(214, 210, 210);
}
</style>

import { getFlag, setFlag, Severity } from '../utils';
import { EVENTTYPES } from '../shared';
import { handleVueError } from './helper';
const hasConsole = typeof console !== 'undefined';
const MitoVue = {
  install(Vue) {
    if (getFlag(EVENTTYPES.VUE) || !Vue || !Vue.config) return;
    setFlag(EVENTTYPES.VUE, true);
    // vue 提供 warnHandler errorHandler报错信息
    Vue.config.errorHandler = function (err, vm, info) {
      handleVueError.apply(null, [err, vm, info, Severity.Normal, Severity.Error, Vue]);
    };
  }
};
export { MitoVue };

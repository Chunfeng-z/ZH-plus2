// 通过jsx的形式渲染vnode
import {
  defineComponent
} from "vue";

export default defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.vNode;
  }
});

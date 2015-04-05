import assert from 'assert';
import velem  from './';
import VNode from 'virtual-dom/vnode/vnode';


it('fd-velem', () => {
  let div = velem('div')({})(['Hello World']);
  assert(div instanceof VNode);
});

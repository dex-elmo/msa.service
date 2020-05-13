import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import { store } from '~/lib/service';
import autobind from "~/lib/ui/module/autobindDecorator";
import * as alert from '~/lib/ui/module/alert/index';
import {observer} from "mobx-react";
import {AlertStore} from "../../../../types/service";

interface Props {
  /** 헤더 */
  header:string | object;
  /** 콘텐츠 */
  contents:string | object;
  /** Alert의 버튼 객체 배열 */
  // actions:{key:string, content:string, color:string, func:(val:string)=>void}[];
  actions:{key:string, content:string, color:string}[];
  /** Alert 크기 */
  size:'mini' | 'tiny' | 'small' | 'large';
  /** Alert의 vertical centered 여부 */
  centered:boolean;
  /** Alert dim 클릭시 close 여부. button이 없으면 true로 고정 */
  onClose:boolean;
  /** dim 옵션 */
  dimmer:true | 'blurring' | 'inverted'
}

/**
 * Alert 함수형 컴포넌트입니다.
 *
 * - `Alert` 컴포넌트를 코드에 삽입해야 합니다.
 * - `alert`를 import 한 후 함수형으로 사용합니다. ex) `alert.show()`
 * - `show()`의 파라미터는 `header, contents, param`입니다.
 */
@observer
@autobind
class AlertComponent extends Component<Props>{
  constructor(props:any) {
    super(props);
  }

  static defaultProps = {
    header:'',
    contents:'',
    size: 'mini',
    centered: true,
    onClose: true,
    dimmer: true,
    actions: null,
  };

  close = () => {
    alert.close();
  };

  show = () =>{
  };

  render(){
    const { open , size, centered, onClosed, header, contents, dimmer, actions} = store.alertStore;

      let i = 0;
      const semanticActions = actions?.map(action => ({
        index: i++,
        key: action.key,
        content: action.content,
        color: action.color,
      }));

    return(
      <>
        <Modal open={open} size={size} centered={centered} dimmer={dimmer} onClose={onClosed || actions === null ? this.close : this.show}>
          {header ? <Modal.Header content={header} /> : ''}
          {contents ? <Modal.Content content={contents} /> : ''}
          {actions !== null ? <Modal.Actions actions={semanticActions} onActionClick={(event, data) => {
            if(actions?.length>=2){
              // console.log(data.index);
              if(data.index === 0) {
                alert.confirmed();
              }
            }

            this.close(); }}
          /> : ''}
        </Modal>
      </>
    )
  }

}

export default AlertComponent;

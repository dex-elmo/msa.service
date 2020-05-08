import React from 'react';
import {Button, Modal, Image} from 'semantic-ui-react';
import autobind from "~/lib/ui/module/autobindDecorator";

interface Props {
  /** 헤더 */
  header:string | object;
  /** 콘텐츠 */
  contents:string | object;
  /** Modal의 버튼 객체 배열 */
  // actions:{key:string, content:string, color:string, func:(val:string)=>void}[];
  actions:{key:string, content:string, color:string}[];
  /** Modal 크기 */
  size:'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';
  /** Modal의 vertical centered 여부 */
  centered:boolean;
  /** Modal dim 클릭시 close 여부. button이 없으면 true로 고정 */
  onClose:boolean;
  /** dim 옵션 */
  dimmer:true | 'blurring' | 'inverted'
  /** Modal의 close button 유무 */
  closeIcon:boolean;
  /** Image 파일 */
  image:string;
  /** Image 사이즈 */
  imgSize:'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big';
  /** Modal 스크롤 여부 */
  scrolling:boolean;
  /** Modal 버튼 naming */
  buttonName:string;
}

interface actions {
  key: string;
  content: string;
  color: string;
  func: (val:string) => void;
}

/**
 *  Modal 컴포넌트입니다.
 */
@autobind
class ModalComponent extends React.Component<Props>{
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
    closeIcon: false,
    image:'',
    imgSize:'tiny',
    scrolling:false,
    buttonName:'Modal',
  };

  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render(){
    const {open} = this.state;
    const {size, centered, onClose, header, contents, dimmer, actions, closeIcon, image, imgSize, scrolling, buttonName } = this.props;

    let i = 0;
    const semanticActions = actions.map(action => ({
      index: i++,
      key: action.key,
      content: action.content,
      color: action.color,
    }));

    // const semanticActions = actions.map(action => {
    //   const { func, ...semanticAction } = action;
    //   return semanticAction;
    // });

    return(
      <>
        <Button onClick={this.show}>{buttonName}</Button>

        <Modal open={open} size={size} centered={centered} dimmer={dimmer} onClose={onClose || actions === null ? this.close : this.show} closeIcon={closeIcon}>
          {header ? <Modal.Header content={header} /> : ''}

          { image
            ?
            <Modal.Content image={true} scrolling={scrolling}>
              <Image
                wrapped={true}
                size={imgSize}
                src={image}
              />
              <Modal.Description>
                {contents}
              </Modal.Description>
            </Modal.Content>
            :
              contents
              ?
              <Modal.Content image={false} scrolling={scrolling}>
                <Modal.Description>
                  {contents}
                </Modal.Description>
              </Modal.Content>
              :
              ''
          }

          {/*{actions !== null ? <Modal.Actions actions={actions} onActionClick={(event, data) => {*/}
          {actions !== null ? <Modal.Actions actions={semanticActions} onActionClick={(event, data) => {
            // console.log(data);
            // actions[data.index].func(data.index);
            // data.func('aaa');              // modal.index actions[].func   // func에서 return bool -> close 여부     // className 추가제공 // func안에 이벤트객체 (event)
            this.close();
          }} /> : ''}
        </Modal>
      </>
    )
  }
}

export default ModalComponent;

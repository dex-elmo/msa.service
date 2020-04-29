import React from 'react';
import {Button, Modal, Image} from 'semantic-ui-react';
import autobind from "~/lib/ui/module/autobindDecorator";

interface Props {
  /**
    버튼 크기
   */
  size:'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';
  centered:boolean;
  onClosed:boolean;
  header:boolean;
  headerContent:object;
  content:boolean;
  contentContent:object;
  dimmer:any;
  actions:actions[];
  closeIcon:boolean;
  imgSrc:string;
  imgSize:any;
  scrolling:boolean;
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
    size: 'mini',
    centered: true,
    onClosed: true,
    dimmer: true,
    header: true,
    content: true,
    actions: null,
    closeIcon: false,
    imgSrc:'',
    imgSize:'tiny',
    scrolling:false
  };

  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render(){
    const {open} = this.state;
    const {size, centered, onClosed, header, headerContent, contentContent, dimmer, actions, closeIcon, imgSrc, imgSize, scrolling } = this.props;
    // const semanticActions = actions.map(action => ({
    //   key: action.key,
    //   content: action.content,
    //   color: action.content,
    // }));
    const semanticActions = actions.map(action => {
      const { func, ...semanticAction } = action;
      return semanticAction;
    });

    return(
      <>
        <Button onClick={this.show}>Modal</Button>

        <Modal open={open} size={size} centered={centered} dimmer={dimmer} onClose={onClosed || actions === null ? this.close : this.show} closeIcon={closeIcon}>
          {header ? <Modal.Header content={headerContent} /> : ''}

          { imgSrc
            ?
            <Modal.Content image={true} scrolling={scrolling}>
              <Image
                wrapped={true}
                size={imgSize}
                src={imgSrc}
              />
              <Modal.Description>
                {contentContent}
              </Modal.Description>
            </Modal.Content>
            :
            <Modal.Content image={false} scrolling={scrolling}>
              <Modal.Description>
                {contentContent}
              </Modal.Description>
            </Modal.Content>
          }

          {/*{actions !== null ? <Modal.Actions actions={actions} onActionClick={(event, data) => { this.close(); }} /> : ''}*/}
          {actions !== null ? <Modal.Actions actions={semanticActions} onActionClick={(event, data) => {
            console.log(data);
            // data.func('aaa');              // modal.index actions[].func   // func에서 return bool -> close 여부     // className 추가제공 // func안에 이벤트객체 (event)
            // this.close();
          }} /> : ''}
        </Modal>
      </>
    )
  }
}

export default ModalComponent;

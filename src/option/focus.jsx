console.log( "===== simpread option focus mode load =====" )

export default class FocusOpt extends React.Component {

    changeBgColor () {
        console.log( $(event.target).css("background-color") )
        if ( event.target.tagName.toLowerCase() != "li"  ) return;
        $( ".ks-simpread-bg" ).css( "background-color", $(event.target).css( "background-color" ));
    }

    changeShortcuts () {
        console.log(event.key,event.keyCode)
        //$( this.refs.shortcuts ).text( event.key );
        //this.refs.shortcuts.value = event.key;
    }

    render() {
        return (
            <div className="ks-simpread-option-focus">
                <div className="ks-simpread-option-focus-container">
                    <span>主题色：</span>
                    <ul className="ks-simpread-option-focus-theme" onClick={ ()=> this.changeBgColor() }>
                        <li className="ks-simpread-option-focus-theme-item ks-simpread-option-focus-theme-item-active"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                        <li className="ks-simpread-option-focus-theme-item"></li>
                    </ul>
                </div>
                <div className="ks-simpread-option-focus-container">
                    <span>透明度：</span>
                    <div className="ks-simpread-option-focus-opacity">
                        <input type="range" min="0" max="100" step="10" value="90"></input>
                    </div>
                </div>
                <div className="ks-simpread-option-focus-container">
                    <span>快捷键：</span>
                    <div className="ks-simpread-option-focus-shortcuts">
                        <input ref="shortcuts" type="text" value="A S" onKeyPress={ ()=> this.changeShortcuts()  }></input>
                    </div>
                </div>
            </div>
        )
    }
}
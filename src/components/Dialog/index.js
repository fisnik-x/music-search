import React from "react";
import "./dialog.css";

const Dialog = (props) => {
    return (<div className="dialog" style={props.style}>
        {props.children}
    </div>)
};

const DialogBar = (props) => {
    return (
        <div className={`dialog-bar 
        ${props.centerTitle ? 'center-title' : ''} 
        ${props.borderBottom ? 'borderBottom' : ''} clearfix`}>
            {props.children}
            {props.enableClose && <svg class="close-btn rfloat" height="30px" width="30px" viewBox="0 0 24 24">
                <line stroke="#bec2c9" stroke-linecap="round" stroke-width="2" x1="6" x2="18" y1="6" y2="18"></line>
                <line stroke="#bec2c9" stroke-linecap="round" stroke-width="2" x1="6" x2="18" y1="18" y2="6"></line>
            </svg>}
        </div>
    )
};

const DialogTitle = (props) => {
    return (
        <h3 className="lfloat dialog-title">
            {props.children}
        </h3>
    )
};

const DialogBody = (props) => {
    return (
        <div className={`dialog-body ${props.center ? 'center-content' : ''}`}>
            {props.children}
        </div>
    )
};

const DialogFooter = (props) => {
    return (
        <div className={`dialog-footer ${props.borderTop ? 'borderTop' : ''}`}>
            {props.children}
        </div>
    )
};

const ModalDialog = (props) => {
    return (
    <div className={`modal-dialog ${props.hasShadowOverlay ? 'overlay-effect' : ''}`}>
        {props.children}
    </div>
    );
};

export {
    Dialog, 
    DialogBar,
    DialogTitle,
    DialogBody,
    DialogFooter,
    ModalDialog
};
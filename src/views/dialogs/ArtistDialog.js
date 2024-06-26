/**
 * @file components/ArtistDialog.js
 * @author Fisnik
 * @copyright 2020 Fisnik
 */

import React from "react";
import 
{ Dialog,
DialogBody,
DialogFooter,
ModalDialog, 
DialogBar, DialogCloseBtn}
from "../../components/Dialog";
import Artist from "../../components/Artist";

export default class ArtistDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount = () => {
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleClose = (e) => {
        e.preventDefault();
        this.setState({ show: false });
        this.props.refresh();
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 27) {
            this.setState({ show: false });
            this.props.refresh();
        }
    }

    render = () => {
        const  { hasShadowOverlay, show, scrollable } = this.props;
        return (
            <ModalDialog hasShadowOverlay={hasShadowOverlay} display={show} scrollable={scrollable}>
                <Dialog margintop={15} borderBottom={false} enableClose={true} display={show}>
                    <DialogBar>
                        <div className="card-invertcut"></div>
                        <DialogCloseBtn handleClose={this.handleClose} enableClose={true}></DialogCloseBtn>
                    </DialogBar>
                    <DialogBody>
                        <Artist data={this.props.data} text={this.props.text} />
                    </DialogBody>
                    <DialogFooter></DialogFooter>
                </Dialog>
            </ModalDialog>
        );
    }
};
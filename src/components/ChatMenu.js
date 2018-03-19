import React, { Component } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui-icons/MoreVert';
import { withStyles } from 'material-ui/styles';

const styles = () => ({

});

class ChatMenu extends Component {
    state = {
        anchorEl: null
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    }

    handleMenu = (evt) => {
        this.setState({
            anchorEl: evt.currentTarget
        });
    }

    render() {
        const { anchorEl } = this.state;
        const { isCreator, onChatDelete, onChatLeave } = this.props;
        const isOpened = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    aria-owns="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <MoreVert />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isOpened}
                    onClose={this.handleClose}
                >
                    {
                        isCreator
                            ? (<MenuItem onClick={onChatDelete}>Delete chat</MenuItem>)
                            : (<MenuItem onClick={onChatLeave}>Leave chat</MenuItem>)
                    }
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(ChatMenu);

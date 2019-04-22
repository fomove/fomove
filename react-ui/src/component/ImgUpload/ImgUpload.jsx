import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import selectorImgUpload from '../../selectors/selected_imgUpload';

import './ImgUpload.css';
import imgUpload from '../../actions/imgUpload';



class ImgUpload extends Component {
    constructor(props) {
        super(props);

        this.handleUploadFile = this.handleUploadFile.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleUploadFile(e) {

        let fileName = e.target.files[0].name;

        const formData = new FormData();
        formData.append('selectedFile', e.target.files[0]);
        formData.append('filename', fileName);

        this.props.imgUpload({ formData, fileName });
        e.target.value = null;
    }


    render() {

        console.log('image upload',this.props);
        const { loadingFlag } = this.props;
        const btnName = loadingFlag ? 'Loading' : 'Upload a file';

        return (
            <Fragment>
               
                <form className="upload-btn-wrapper">
                    <label className="btn" htmlFor="inputFile">{btnName}</label>
                    <input id="inputFile" type="file" name="selectedFile" onChange={this.handleUploadFile} disabled={loadingFlag} />
                </form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    imgUpload,
}, dispatch);

const mapStateToProps = state => ({
    loadingFlag: state.imgUpload.isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(ImgUpload);

// ref={(input) => this.input = input}

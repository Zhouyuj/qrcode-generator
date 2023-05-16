<template>
    <div class="col-md-12 settings mb-4">
        <div class="meta-data">
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <div><label class="first-step-label flex-shrink-0">STEP 1</label><span>Enter the URL</span></div>
                <div class="guide-link d-flex align-items-center flex-wrap"><i class="qr-exclamation-circle mr-1"></i>Learn
                    how to track data with <a href="/how-do-dynamic-qr-codes-work" class="link ml-1" target="_blank">dynamic
                        QR codes</a></div>
            </div>
            <div class="url form-group"
                v-if="['URL', 'Google Form', 'Facebook', 'Youtube', 'Instagram', 'Pinterest'].includes(activeQrType)">
                <div class="d-flex flex-column"><input name="url" class="err form-control" type="text"
                        placeholder="https://www.mywebsite.com" value="">
                    <!-- <div class="extract-url">
                        <div class="file-wrapper"><input class="form-control hidden" type="text" readonly="" value=""><input
                                class="hidden" type="file" accept=".png,.jpeg,.jpg,.svg" value="">
                            <div class="btn-upload link pointer">...or Upload a QR code image to extract the URL</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="form-group" v-if="activeQrType === 'File'">
                <div class="file form-action d-flex align-items-center">
                    <div class="upload-section">
                        <div class="upload-container">
                            <div class="upload-category-file">
                                <div class="file-wrapper"><input class="form-control hidden" type="text" readonly=""
                                        value=""><input class="hidden" type="file"
                                        accept=".png,.mp4,.pdf,.jpeg,.jpg,.xlsx,.docx" value="">
                                    <div class="btn-upload btn">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper mr-2"><i class="qr-plus-circle"></i></div><span>Upload
                                                File</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="description-section">
                        <div class="supported"><span>Supported formats:</span>
                            <div class="supported-list">
                                <div class="supported-item">PDF</div>
                                <div class="supported-item">JPEG</div>
                                <div class="supported-item">PNG</div>
                                <div class="supported-item">MP4</div>
                                <div class="supported-item">Excel</div>
                                <div class="supported-item">Word</div>
                            </div>
                            <div class="file-size mt-3">
                                <div class="file-size-item"><span class="title">5MB</span>
                                    <div class="plan"><i class="qr-circle-check-regular mr-1"></i><span>Regular</span></div>
                                </div>
                                <div class="file-size-item"><span class="title">10MB</span>
                                    <div class="plan"><i class="qr-circle-check-regular mr-1"></i><span>Advanced</span>
                                    </div>
                                </div>
                                <div class="file-size-item"><span class="title">20MB</span>
                                    <div class="plan"><i class="qr-circle-check-regular mr-1"></i><span>Premium</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="usage-intruction"><a target="_blank" href="/file-to-qr-code">Usage instructions</a><i
                                class="qr-question-circle ml-1"></i></div>
                    </div>
                </div>
            </div>
            <div class="row wifi" v-if="activeQrType === 'Wi-Fi'">
                <div class="col-md-4 form-group d-flex flex-column justify-content-between"><label class="text-bold"
                        for="wifiType">Type</label>
                    <div class=" css-b62m3t-container"><span id="react-select-3-live-region"
                            class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false"
                            aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                        <div class=" css-1s2u09g-control">
                            <div class=" css-1d8n9bt">
                                <div class=" css-14el2xx-placeholder" id="react-select-3-placeholder">Please select</div>
                                <div class=" css-ackcql" data-value=""><input class="" autocapitalize="none"
                                        autocomplete="off" autocorrect="off" id="react-select-3-input" spellcheck="false"
                                        tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false"
                                        aria-haspopup="true" role="combobox" aria-describedby="react-select-3-placeholder"
                                        value=""
                                        style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2 / auto / auto; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                                </div>
                            </div>
                            <div class=" css-1wy0on6"><span class=" css-1okebmr-indicatorSeparator"></span>
                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20"
                                        viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
                                        <path
                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                        </path>
                                    </svg></div>
                            </div>
                        </div><input name="wifiType" type="hidden" value="">
                    </div>
                </div>
                <div class="col-md-4 form-group d-flex flex-column justify-content-between"><label class="text-bold"
                        for="wifiSsid">SSID <span class="wifi-guide">(Check the bottom or side of your
                            router)</span></label><input name="wifiSsid" class="err form-control" type="text" placeholder=""
                        value=""></div>
                <div class="col-md-4 form-group d-flex flex-column justify-content-between"><label class="text-bold"
                        for="wifiPassword">Password</label><input name="wifiPassword" class="form-control" type="text"
                        placeholder="" value=""></div>
            </div>
            <div class="form-group row url" v-if="activeQrType === 'Email'">
                <div class="col-md-12 mb-2"><label class="text-bold" for="email">Email</label><input name="email"
                        class="err form-control" type="text" placeholder="Your Email (username@email.com)" value=""></div>
                <div class="col-md-12 mb-2"><label class="text-bold" for="subject">Subject</label><input name="subject"
                        class="err form-control" type="text" value=""></div>
                <div class="col-md-12"><label class="text-bold" for="message">Message</label><textarea name="message"
                        rows="5" class="err form-control" type="text"></textarea></div>
            </div>
            <div class="form-group row url" v-if="activeQrType === 'Text'">
                <div class="col-md-12"><textarea name="text" class="err form-control" type="text"
                        placeholder="Text"></textarea></div>
            </div>
            <div class="form-group row url" v-if="activeQrType === 'App stores'">
                <div class="col-md-12 mb-3"><label class="text-bold" for="appleStore">URL for iOS</label><input
                        name="appleStore" class="err form-control" type="text" placeholder="https://" value=""></div>
                <div class="col-md-12"><label class="text-bold" for="googleStore">URL for Android</label><input
                        name="googleStore" class="err form-control" type="text" placeholder="https://" value=""></div>
            </div>
            <div class="qr-type-block"
                v-if="['URL', 'Google Form', 'Facebook', 'Youtube', 'Instagram', 'Pinterest'].includes(activeQrType)">
                <div class="flex-center toggle">
                    <div class="d-flex radio-cover">
                        <div class="d-flex align-items-center pointer">
                            <div class="radio-item pointer active"><input type="radio" name="qrType" value="QR_STATIC"
                                    checked="" class="mr-1 pointer"><label for="qrType" class="pointer qr-type-label">Static
                                    QR</label></div>
                        </div>
                        <div class="d-flex align-items-center dynamic-radio mt-3 mt-md-0 ml-md-3">
                            <div class="radio-item pointer d-flex flex-wrap align-items-center"><input type="radio"
                                    name="qrType" value="QR_DYNAMIC" class="mr-1 input-dynamic"><label for="qrType"
                                    class="pointer qr-type-label mr-4">Dynamic QR</label>
                                <div class="dynamic-qr-tooltip"><span class=""><i
                                            class="qr-circle-check-regular"></i></span><span class="">Edit URL</span><span
                                        class="track-data">Track Data</span><span class="learn-more">Learn more</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap qr-generate-block"><button id="generate-qr-code"
                    class="d-flex justify-content-center align-items-center btn btn-qr2 col-sm-12 col-md-4 col-lg-3"
                    @click="generateCode">Generate
                    QR code</button>
                <div class="guide-link mt-3 mt-md-0 col-sm-12 col-md-8 col-lg-9 pl-0 pl-md-3">
                    <div class="d-md-flex align-items-center h-100"><i class="qr-exclamation-circle mr-1"></i>We recommend
                        creating a dynamic QR code if you want to track performance and edit data even after printing.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    computed: {
        activeQrType: function () {
            return this.$store.state.qrcodeType
        }
    },
    data() {
        return {
            step_one_tip: ''
        };
    },
    methods: {
        itemClick(item) {
            if (item.active) return;
            this.options.forEach((o) => (o.active = false));
            item.active = true;
            this.$store.commit('setQrcodeType', item.label);
            console.log(this.$store)
        },
        generateCode() {
            this.$http.post('/api/generateCode', {"backgroundColor":"rgb(255,255,255)","colorDark":"rgb(5,64,128)","colorType":"SINGLE_COLOR","gradientType":"linear","frameColor":"#054080","frameColor2":"#3a74c5","frameColorStyleType":"SINGLE_COLOR","frameGradientType":"linear","frameGradientStartColor":"#054080","frameGradientEndColor":"#f30505","frameText":"SCAN ME","eye_outer":"eyeOuter2","eye_inner":"eyeInner1","size":500,"qrData":"pattern6","transparentBkg":false,"qrCategory":"url","text":"https://baidu.com"}).then(r => {
                console.log(r)
                // TODO: 判断-1
                var data = r.data.data;
                if (data) {
                    this.$store.commit('setQrcodeSrc', `data:image/png;base64,${data}`);
                }
            })
        }
    },
};
</script>

<style scoped>
.home label {
    color: #6f787f;
    margin-bottom: 0;
    padding: 0 0 8px;
    font-weight: 700;
    font-size: 100%;
}

.home label.first-step-label {
    font-family: Metropolis;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    background: #404040;
    border-radius: 4px;
    padding: 6px 14px;
    margin-right: 12px;
    line-height: 14px;
    text-transform: uppercase;
}

.settings {
    position: relative;
    padding: 15px 24px;
    grid-gap: 15px;
    gap: 15px;
    flex-wrap: wrap;
    align-items: flex-start;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .25);
    background: #e8eef2;
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
}

.first-step-label {
    font-family: Metropolis;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    background: #404040;
    border-radius: 4px;
    padding: 6px 14px;
    margin-right: 12px;
    line-height: 14px;
    text-transform: uppercase;
    margin-bottom: 0;
    display: inline-block;
}

.meta-data .qr-generate-block {
    font-family: Poppins !important;
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
}

#generate-qr-code {
    grid-gap: 10px;
    gap: 10px;
}

.meta-data .btn-qr2 {
    background-color: #0dbc29;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
}

.btn.disabled,
.btn:disabled {
    opacity: .65;
}

.meta-data .guide-link {
    color: #404040;
    font-weight: 400;
    font-size: 12px;
}

.meta-data .url input {
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    padding: 20px 16px;
    font-size: 14px;
}

.meta-data .url .extract-url .file-wrapper {
    display: block !important;
}

.file-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
}

.meta-data .url .extract-url .file-wrapper .link {
    font-size: 11px;
    margin-top: 5px;
}

.file-wrapper .btn-upload {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.link {
    color: #1675dd !important;
    cursor: pointer;
    font-weight: 400;
}

.pointer {
    cursor: pointer;
}

.hidden {
    display: none !important;
}

.meta-data .qr-type-block .toggle {
    justify-content: flex-start;
    margin-bottom: 16px;
}

.meta-data .qr-type-block .radio-cover {
    flex-flow: inherit;
}

.radio-item.active {
    border: 1px solid #0dbc29;
    background-color: #e2f8e6;
}

.radio-item {
    font-family: Poppins !important;
    display: inline-block;
    position: relative;
    padding: 8px 24px;
    border: 1px solid #d4d4d4;
    color: #868686;
    border-radius: 4px;
    background: #f3f3f3;
}

.radio-item input[type=radio] {
    position: absolute;
    cursor: pointer;
    top: 18px;
    left: 24px;
    transform: scale(1.5);
    opacity: 0;
    z-index: 1;
}

input[type=checkbox],
input[type=radio] {
    box-sizing: border-box;
    padding: 0;
}

.radio-item.active .qr-type-label {
    color: #404040;
}

.home label.qr-type-label {
    font-family: Poppins !important;
    font-size: 12px;
    font-weight: 500;
}


.radio-item {
    font-family: Poppins !important;
    display: inline-block;
    position: relative;
    padding: 8px 24px;
    border: 1px solid #d4d4d4;
    color: #868686;
    border-radius: 4px;
    background: #f3f3f3;
}

.radio-item label {
    color: #000;
    font-weight: 400;
    text-align: left;
    position: relative;
}

.meta-data .file {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
}

.form-action {
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

.meta-data .file .upload-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 55%;
}

.meta-data .file .upload-section .upload-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 72px;
    border: 1px dashed #d4d4d4;
    border-radius: 10px;
    width: 100%;
    height: 212px;
}

.meta-data .file .btn-upload {
    background: linear-gradient(270deg, #1675dd, #2c90ff 100.34%);
    border-radius: 8px;
    padding: 16px 30px;
    color: #fff;
    flex-shrink: 0;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.file-wrapper .btn-upload {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.meta-data .file .icon-wrapper {
    height: 32px;
    width: 24px;
    font-size: 24px;
}

.meta-data .file .description-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    width: 45%;
    height: 228px;
}

.meta-data .file .description-section .supported {
    margin-bottom: 16px;
    width: 100%;
}

.meta-data .file .description-section .supported .supported-list {
    margin-top: 8px;
    display: flex;
}

.meta-data .file .description-section .supported .supported-list .supported-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    width: 49px;
    height: 28px;
    border: 1px solid #acacac;
    border-radius: 2px;
    color: #2c90ff;
    margin-right: 8px;
    font-size: 12px;
}

.meta-data .file .description-section .file-size {
    margin-top: 8px;
    display: flex;
    width: 100%;
}

.meta-data .file .description-section .file-size .file-size-item:first-child {
    padding-left: 0;
    border-left: none;
}

.meta-data .file .description-section .file-size .file-size-item {
    color: #acacac;
    padding: 0 12px;
    border-left: 1px solid #d4d4d4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.meta-data .file .description-section .file-size .file-size-item .plan {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid #acacac;
    border-radius: 4px;
    font-size: 12px;
}

.home .usage-intruction {
    font-size: 12px;
}

.meta-data .wifi {
    padding: 0 4px;
}

.meta-data .wifi [class^=col-] {
    padding: 0 12px !important;
}

.meta-data .wifi label {
    font-family: Manrope;
    font-weight: 600;
    font-size: 14px;
    color: #404040;
    line-height: 100%;
}

.meta-data .wifi input {
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    padding: 18px 16px;
    font-size: 14px;
}
</style>

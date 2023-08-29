<template>
    <div class="visual-container mb-4 w-100">
        <div id="visual-data" class="visual-data">
            <div class="d-flex flex-wrap flex-lg-nowrap">
                <div class="tool-container">
                    <div class="tool-cover">
                        <div class="step-header">
                            <div><label class="first-step-label flex-shrink-0">Step 2</label><span>Customize your QR
                                    code</span></div>
                            <div class="guide-link d-flex align-items-center flex-wrap">Why is my <a class="link ml-1"
                                    href="/qr-code-not-working" target="_blank" rel="noreferrer">QR code not working</a>?
                            </div>
                        </div>
                        <div class="main-container">
                            <div class="menu-tab">
                                <div v-for="item in qrcode_styles" :key="item.id" class="menu-item"
                                    @click="changeQrCodeStyle(item)">
                                    <div class="item-contain" :class="{ 'active': item.active }">
                                        <i class="qr-pattern mr-2"></i>
                                        <span class="">{{ item.label }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="main-body">
                                <div class="dots-pattern mb-3" v-if="qrcode_style === 'Pattern'">
                                    <div class="title"><i class="qr-exclamation-circle mr-1"></i>You can customize these
                                        templates later to match your brand</div>
                                        <div  class="dot-body">
                                        <div class="shape ng-scope" v-for="(item, index) in qr_patterns" :key="item.id" @click="changeQrPattern(item)" :class="{ 'active': item.active }" ng-repeat="frame in PresetService.designOptions.eyeFrames">
                                            <i class="sprite sprite-body" :class="'sprite-'+ item.monkey_body"></i>
                                        </div></div>
                                    <!-- <div class="dot-body">
                                        <div class="eye-pattern small-eye" :class="{ 'active': item.active }" alt="qr eye"
                                            v-for="item in qr_patterns" :key="item.id" @click="changeQrPattern(item)">
                                            <img class="img-pattern" :src="item.src">
                                        </div>
                                    </div> -->
                                </div>
                                <div class="dots-pattern mb-3" v-if="qrcode_style === 'Eyes'">
                                    <div class="title"><i class="qr-exclamation-circle mr-1"></i>Select eyes to make your QR
                                        code stand out. Eyes are what your camera recognizes when scanning</div>
                                        <div class="dot-body">
                                            <div class="shape ng-scope" v-for="(item, index) in qr_eyes" :key="item.id" @click="changeQrEye(item, index)" :class="{ 'active': item.active }" ng-repeat="frame in PresetService.designOptions.eyeFrames">
                                                <i class="sprite" :class="'sprite-frame'+ index"></i>
                                            </div>
                                        </div>
                                    <!-- <div class="dot-body">
                                        <button v-for="item in qr_eyes" :key="item.id" :class="{ 'active': item.active }"
                                            class="eye-pattern false" @click="changeQrEye(item
                                            )">
                                            <img :src="item.src">
                                        </button>
                                    </div> -->
                                </div>
                                <div class="dots-pattern mb-3" v-if="qrcode_style === 'Eyes_inner'">
                                    <div class="title"><i class="qr-exclamation-circle mr-1"></i>Select eyes to make your QR
                                        code stand out.Inner Eyes are what your camera recognizes when scanning</div>
                                        <div class="dot-body">
                                            <div class="shape ng-scope" v-for="(item, index) in qr_inner_eyes" :key="item.id" @click="changeQrInnerEye(item, index)" :class="{ 'active': item.active }" ng-class="{'active': qrcode.config.eye === frame.type}" ng-repeat="frame in PresetService.designOptions.eyeFrames">
                                                <i class="sprite" :class="'sprite-ball'+ index"></i>
                                            </div>
                                        </div>
                                    <!-- <div class="dot-body">
                                        <button v-for="item in qr_eyes" :key="item.id" :class="{ 'active': item.active }"
                                            class="eye-pattern false" @click="changeQrEye(item
                                            )">
                                            <img :src="item.src">
                                        </button>
                                    </div> -->
                                </div>
                                <div class="logo d-flex flex-wrap" v-if="qrcode_style === 'Logo'">
                                    <!-- <div class="title w-100"><i class="qr-exclamation-circle mr-1"></i>Add your logo for
                                        stronger brand recall<span class="ml-1">(300 x 300px, 72dpi)</span></div>
                                    <div class="image-container d-md-flex">
                                        <div class="image-preview"><img class="hidden w-100 h-100" src="" alt="logo">
                                            <div class="placeholder"><i class="qr-logo"></i></div>
                                            <div class="loading-screen"><span class="loader"></span></div>
                                            <div class="upload-progress fade-animation">
                                                <div class="loading-bar" style="width: 100%;"></div>
                                            </div>
                                        </div>
                                        <div class="block-upload">
                                            <div class="">
                                                <div class="file-wrapper"><input class="form-control hidden" type="text"
                                                        readonly="" value=""><input class="hidden" type="file"
                                                        accept=".png,.jpg,.jpeg" value="">
                                                    <div class="btn-upload btn btn-primary">Upload</div>
                                                </div>
                                            </div><button class="btn btn-default btn-remove">Remove logo</button>
                                        </div>
                                    </div>
                                    <div class="description-section">
                                        <div class="supported"><span>Supported formats:</span>
                                            <div class="supported-list">
                                                <div class="supported-item">PNG</div>
                                                <div class="supported-item">JPG</div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="shape-group w-100 mt-3"><span class="w-100">Or use our available
                                            logos:</span>
                                        <!-- <div class="shape-options">
                                            <button class="shape" @click="changeQrLogo(item)"
                                                :class="{ 'active': item.active }" v-for="item in qr_logos" :key="item.id">
                                                <img :src="item.src" :id="item.id">
                                            </button>
                                        </div> -->
                                        <div class="shape-options">
                                            <div class="shape" v-for="(item, index) in qr_logos" :key="item.id" @click="changeQrLogo(item, index)" :class="{ 'active': item.active }" ng-class="{'active': qrcode.config.eye === frame.type}" ng-repeat="frame in PresetService.designOptions.eyeFrames">
                                                <i class="sprite-logo" :class="'sprite-logo-'+ item.monkey_logo"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="colors" v-if="qrcode_style === 'Color'">
                                    <div class="title w-100"><i class="qr-exclamation-circle mr-1"></i>Embellish your QR
                                        codes with your brand colors</div>
                                    <div class="mt-3">
                                        <div class="form-check-inline color-group flex-wrap"><label for="colorType"
                                                class="color-type mr-2"><input name="colorType" class="mr-1" type="radio"
                                                    value="SINGLE_COLOR" checked="">Solid Color</label><label
                                                for="colorType" class="color-type mr-2"><input name="colorType" class="mr-1"
                                                    type="radio" value="GRADIENT_COLOR">Gradient</label><label
                                                for="customEyeColor" class="color-type mr-2"><input name="customEyeColor"
                                                    class="mr-1" type="checkbox" value="">Custom Eye Color</label></div>
                                    </div>
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="w-100">
                                            <div class="color-wrapper">
                                                <div class="block-color">
                                                    <div class="square-color d-inline-block pointer"
                                                        style="background: rgb(5, 64, 128);"></div><input
                                                        class="form-control" spellcheck="false" value="#054080">
                                                </div>
                                            </div>
                                        </div><i class="hidden qr-two-arrows-pointing-right-and-left pointer mx-2"></i>
                                        <div class="w-100 hidden">
                                            <div class="color-wrapper">
                                                <div class="block-color">
                                                    <div class="square-color d-inline-block pointer"
                                                        style="background: rgb(243, 5, 5);"></div><input
                                                        class="form-control" spellcheck="false" value="#f30505">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-start gradient-container hidden">
                                        <label class="visual-label mr-3 mt-1">Gradient Type</label>
                                        <div class="d-flex align-items-center"><img
                                                src="/static/img/Home/SocialMedias/gradients/upDown.svg"
                                                class="gradient-item mr-2"><img
                                                src="/static/img/Home/SocialMedias/gradients/linear.svg"
                                                class="gradient-item mr-2 active"><img
                                                src="/static/img/Home/SocialMedias/gradients/diagonal1.svg"
                                                class="gradient-item mr-2"><img
                                                src="/static/img/Home/SocialMedias/gradients/diagonal2.svg"
                                                class="gradient-item mr-2"><img
                                                src="/static/img/Home/SocialMedias/gradients/radial.svg"
                                                class="gradient-item mr-2"></div>
                                    </div>
                                    <div class="visual-color"><label class="visual-label hidden" for="eyeColor">Eye
                                            color</label>
                                        <div class="eye-color d-flex align-items-center mb-3 hidden">
                                            <div class="w-100">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(5, 64, 128);"></div><input
                                                            class="form-control " spellcheck="false" value="#054080">
                                                    </div>
                                                </div>
                                            </div><i class="qr-two-arrows-pointing-right-and-left pointer mx-2"></i>
                                            <div class="w-100">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(243, 5, 5);"></div><input
                                                            class="form-control" spellcheck="false" value="#f30505">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="w-100 mb-2"><label class="visual-label"
                                                    for="background">Background</label>
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(255, 255, 255);"></div><input
                                                            class="form-control" spellcheck="false" value="#ffffff">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex"><label for="transparentBackground"
                                                class="form-check-label"><input name="transparentBackground" class="mr-1"
                                                    type="checkbox" value="">Transparent background</label></div>
                                    </div>
                                </div>
                                <div class="frames" v-if="qrcode_style === 'Frame'">
                                    <div class="title mt-1"><i class="qr-exclamation-circle mr-1"></i>A QR code with a frame
                                        and call-to-action gets 80% more scans</div>
                                    <div class="">
                                        <div class="form-check-inline m-0"><input name="frame" class="hidden" type="text"
                                                value="">
                                            <div class="frame-cover">
                                                <div class="frame blank active"><i class="qr-close"></i></div>
                                                <div class="frame" v-for="item in qr_frames" @click="changeQrFrame(item)"
                                                    :key="item.id" :class="{ 'active': item.active }">
                                                    <img :src="item.src" alt="qr code generator">
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="colors frames-colors">
                                        <div class="form-check-inline color-group flex-wrap"><label
                                                for="frameColorStyleType" class="color-type"><input
                                                    name="frameColorStyleType" class="mr-1" type="radio"
                                                    value="SINGLE_COLOR" checked="">Solid Color</label><label
                                                for="frameColorStyleType" class="color-type ml-2"><input
                                                    name="frameColorStyleType" class="mr-1" type="radio"
                                                    value="FRAME_GRADIENT_COLOR">Gradient</label></div>
                                        <div class="foreground-color mt-1">
                                            <div class="w-100 false">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(5, 64, 128);"></div><input
                                                            class="form-control" spellcheck="false" value="#054080">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-100 mt-2 hidden">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(58, 116, 197);"></div><input
                                                            class="form-control" spellcheck="false" value="#3a74c5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center mb-1">
                                            <div class="w-100 hidden">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(5, 64, 128);"></div><input
                                                            class="form-control" spellcheck="false" value="#054080">
                                                    </div>
                                                </div>
                                            </div><i class="hidden qr-two-arrows-pointing-right-and-left mx-2"></i>
                                            <div class="w-100 hidden">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(243, 5, 5);"></div><input
                                                            class="form-control" spellcheck="false" value="#f30505">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="foreground-color d-flex flex-wrap w-100 mb-2">
                                            <div
                                                class="d-flex align-items-center justify-content-start gradient-container w-100 hidden">
                                                <label class="visual-label mr-3 mt-2">Gradient Type</label>
                                                <div class="d-flex align-items-center"><img
                                                        src="/static/img/Home/SocialMedias/gradients/upDown.svg"
                                                        class="gradient-item mr-2"><img
                                                        src="/static/img/Home/SocialMedias/gradients/linear.svg"
                                                        class="gradient-item mr-2 active"><img
                                                        src="/static/img/Home/SocialMedias/gradients/diagonal1.svg"
                                                        class="gradient-item mr-2"><img
                                                        src="/static/img/Home/SocialMedias/gradients/diagonal2.svg"
                                                        class="gradient-item mr-2"><img
                                                        src="/static/img/Home/SocialMedias/gradients/radial.svg"
                                                        class="gradient-item mr-2"></div>
                                            </div>
                                            <div class="w-100 mt-2 hidden">
                                                <div class="color-wrapper">
                                                    <div class="block-color">
                                                        <div class="square-color d-inline-block pointer"
                                                            style="background: rgb(58, 116, 197);"></div><input
                                                            class="form-control" spellcheck="false" value="#3a74c5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="foreground-color d-flex flex-column flex-sm-row">
                                            <div class="w-100 mb-2 pr-sm-2"><label class="text-bold visual-label"
                                                    for="background">Frame text</label><input name="frameText"
                                                    class="form-control" type="text" value="SCAN ME"></div>
                                            <div class="w-100 pl-sm-2"><label class="text-bold visual-label"
                                                    for="background">Frame text font</label><select name="frameTextFont"
                                                    id="selectOption" class="" type="text" placeholder="Please select"
                                                    style="padding: 5.5px 5px; font-family: Arial;">
                                                    <option value="Arial" style="font-size: 16px; font-family: Arial;">Arial
                                                    </option>
                                                    <option value="Arial Black"
                                                        style="font-size: 16px; font-family: &quot;Arial Black&quot;;">Arial
                                                        Black</option>
                                                    <option value="Comic Sans MS"
                                                        style="font-size: 16px; font-family: &quot;Comic Sans MS&quot;;">
                                                        Comic Sans MS</option>
                                                    <option value="Courier New"
                                                        style="font-size: 16px; font-family: &quot;Courier New&quot;;">
                                                        Courier New</option>
                                                    <option value="Helvetica"
                                                        style="font-size: 16px; font-family: Helvetica;">Helvetica</option>
                                                    <option value="Impact" style="font-size: 16px; font-family: Impact;">
                                                        Impact</option>
                                                    <option value="Tahoma" style="font-size: 16px; font-family: Tahoma;">
                                                        Tahoma</option>
                                                    <option value="Times New Roman"
                                                        style="font-size: 16px; font-family: &quot;Times New Roman&quot;;">
                                                        Times New Roman</option>
                                                    <option value="Verdana" style="font-size: 16px; font-family: Verdana;">
                                                        Verdana</option>
                                                    <option value="Roboto" style="font-size: 16px; font-family: Roboto;">
                                                        Roboto</option>
                                                    <option value="Lato" style="font-size: 16px; font-family: Lato;">Lato
                                                    </option>
                                                    <option value="Oswald" style="font-size: 16px; font-family: Oswald;">
                                                        Oswald</option>
                                                    <option value="Slabo 27px" style="font-size: 16px;">Slabo 27px</option>
                                                    <option value="Roboto Condensed"
                                                        style="font-size: 16px; font-family: &quot;Roboto Condensed&quot;;">
                                                        Roboto Condensed</option>
                                                    <option value="Montserrat"
                                                        style="font-size: 16px; font-family: Montserrat;">Montserrat
                                                    </option>
                                                    <option value="Source Sans Pro"
                                                        style="font-size: 16px; font-family: &quot;Source Sans Pro&quot;;">
                                                        Source Sans Pro</option>
                                                    <option value="RaleWay" style="font-size: 16px; font-family: RaleWay;">
                                                        RaleWay</option>
                                                    <option value="PT Sans"
                                                        style="font-size: 16px; font-family: &quot;PT Sans&quot;;">PT Sans
                                                    </option>
                                                </select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100 settings-download">
                    <div class="download-cover"><label class="mb-4 logo-code-guide">Always scan to test that your QR code
                            works</label>
                        <div class="canvas-cover">
                            <div class="canvas">
                                <picture class="text-center">
                                    <div class="d-flex justify-content-center align-items-center cover" v-if="!showGeneratedCode">
                                        <div class="spinner">
                                            <div data-testid="bars-loading" aria-label="bars-loading"
                                                style="display: flex; justify-content: center;"><svg width="80" height="80"
                                                    fill="#fff" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg"
                                                    data-testid="bars-svg">
                                                    <rect y="10" width="15" height="120" rx="6">
                                                        <animate attributeName="height" begin="0.5s" dur="1s"
                                                            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                        <animate attributeName="y" begin="0.5s" dur="1s"
                                                            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                    </rect>
                                                    <rect x="30" y="10" width="15" height="120" rx="6">
                                                        <animate attributeName="height" begin="0.25s" dur="1s"
                                                            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                        <animate attributeName="y" begin="0.25s" dur="1s"
                                                            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                    </rect>
                                                    <rect x="60" width="15" height="140" rx="6">
                                                        <animate attributeName="height" begin="0s" dur="1s"
                                                            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                        <animate attributeName="y" begin="0s" dur="1s"
                                                            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                    </rect>
                                                    <rect x="90" y="10" width="15" height="120" rx="6">
                                                        <animate attributeName="height" begin="0.25s" dur="1s"
                                                            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                        <animate attributeName="y" begin="0.25s" dur="1s"
                                                            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                    </rect>
                                                    <rect x="120" y="10" width="15" height="120" rx="6">
                                                        <animate attributeName="height" begin="0.5s" dur="1s"
                                                            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                        <animate attributeName="y" begin="0.5s" dur="1s"
                                                            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                            repeatCount="indefinite"></animate>
                                                    </rect>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <img :src="imageSrc"/>
                                    <!-- <canvas id="canvas_qr_code" class="canvas-image-preview" alt="free qr code"
                                        height="400" width="400" style="width: 100%; height: 100%;"></canvas> -->
                                </picture>
                            </div>
                        </div>
                        <div class="d-flex template disabled-block"><label
                                class="MuiFormControlLabel-root Mui-disabled"><input
                                            type="checkbox" class="jss4"  data-indeterminate="false"
                                            value="">
                                            
                                        <span
                                    class="MuiTypography-root MuiFormControlLabel-label Mui-disabled MuiTypography-body1">Save
                                    as a template</span></label></div>
                        <div class="block-button">
                            <div class="block-button">
                                <div class="MuiFormControl-root">
                                    <div class="MuiFormGroup-root MuiFormGroup-row" role="radiogroup"
                                        aria-labelledby="demo-radio-buttons-group-label"><label
                                            class="MuiFormControlLabel-root"><span
                                                class="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary jss2 Mui-checked MuiIconButton-colorSecondary"
                                                aria-disabled="false"><span class="MuiIconButton-label"><input type="radio"
                                                        checked="" class="jss4" name="radio-file-type" value="PNG">
                                                    
                                                </span><span class="MuiTouchRipple-root"></span></span><span
                                                class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">PNG</span></label><label
                                            class="MuiFormControlLabel-root"><span
                                                class="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
                                                aria-disabled="false"><span class="MuiIconButton-label"><input type="radio"
                                                        class="jss4" name="radio-file-type" value="SVG">
                                                </span><span class="MuiTouchRipple-root"></span></span><span
                                                class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">SVG</span></label>
                                    </div>
                                </div>
                                <div class="btn-download"><button class="btn btn-success w-100 false" @click="downQrcode">Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
        },
        generatedCodeSrc: function () {
            return this.$store.state.qrcodeSrc
        },
        // showGeneratedCode: function() {
        //     return this.$store.state.showGeneratedCode;
        // }
    },
    data() {
        return {
            step_one_tip: '',
            qrcode_style: 'Pattern',
            qrcode_pattern: '',
            showGeneratedCode: true,
            url: '',
            imageSrc: '',
            qr_patterns: [
                {
                    id: 1,
                    src: require('../../../assets/pattern/00.svg'),
                    active: true,
                    monkey_body: 'square'
                },
                {
                    id: 2,
                    src: require('../../../assets/pattern/01.svg'),
                    active: false,
                    monkey_body: 'mosaic'
                },
                {
                    id: 3,
                    src: require('../../../assets/pattern/02.svg'),
                    active: false,
                    monkey_body: 'dot'
                },
                {
                    id: 3,
                    src: require('../../../assets/pattern/03.svg'),
                    active: false,
                    monkey_body: 'circle'
                },
                {
                    id: 4,
                    src: require('../../../assets/pattern/04.svg'),
                    active: false,
                    monkey_body: 'circle-zebra'
                },
                {
                    id: 5,
                    src: require('../../../assets/pattern/05.svg'),
                    active: false,
                    monkey_body: 'circle-zebra-vertical'
                },
                {
                    id: 6,
                    src: require('../../../assets/pattern/06.svg'),
                    active: false,
                    monkey_body: 'circular'
                },
                {
                    id: 7,
                    src: require('../../../assets/pattern/07.svg'),
                    active: false,
                    monkey_body: 'edge-cut'
                },
                {
                    id: 8,
                    src: require('../../../assets/pattern/08.svg'),
                    active: false,
                    monkey_body: 'edge-cut-smooth'
                },
                {
                    id: 9,
                    src: require('../../../assets/pattern/09.svg'),
                    active: false,
                    monkey_body: 'japnese'
                },
                {
                    id: 10,
                    src: require('../../../assets/pattern/10.svg'),
                    active: false,
                    monkey_body: 'leaf'
                },
                {
                    id: 13,
                    src: require('../../../assets/pattern/13.svg'),
                    active: false,
                    monkey_body: 'pointed'
                }
            ],
            qrcode_styles: [
                {
                    id: 1,
                    label: 'Pattern',
                    cssLabel: '',
                    active: true
                },
                {
                    id: 2,
                    label: 'Eyes',
                    cssLabel: '',
                    active: false
                },
                {
                    id: 6,
                    label: 'Eyes_inner',
                    cssLabel: '',
                    active: false
                },
                {
                    id: 3,
                    label: 'Logo',
                    cssLabel: '',
                    active: false
                },
                {
                    id: 4,
                    label: 'Frame',
                    cssLabel: '',
                    active: false
                },
                {
                    id: 5,
                    label: 'Template',
                    cssLabel: '',
                    active: false
                },
            ],
            qrcode_logo: '',
            qr_logos: [
                {
                    id: 1,
                    src: require('../../../assets/logo/facebook.png'),
                    active: false,
                    monkey_logo: 'facebook'
                },{
                    id: 21,
                    src: require('../../../assets/logo/facebook.png'),
                    active: false,
                    monkey_logo: 'facebook-circle'
                },
                {
                    id: 22,
                    src: require('../../../assets/logo/facebook.png'),
                    active: false,
                    monkey_logo: 'twitter-circle'
                },
                {
                    id: 20,
                    src: require('../../../assets/logo/youtube.png'),
                    active: false,
                    monkey_logo: 'youtube'
                },
                {
                    id: 23,
                    src: require('../../../assets/logo/youtube.png'),
                    active: false,
                    monkey_logo: 'youtube-circle'
                },
                {
                    id: 24,
                    src: require('../../../assets/logo/youtube.png'),
                    active: false,
                    monkey_logo: 'googleplus-circle'
                },
                {
                    id: 5,
                    src: require('../../../assets/logo/instagram.png'),
                    active: false,
                    monkey_logo: 'instagram-circle'
                },
                {
                    id: 3,
                    src: require('../../../assets/logo/googleForm.png'),
                    active: false,
                    monkey_logo: 'linkedin-circle'
                },
                {
                    id: 3,
                    src: require('../../../assets/logo/googleMaps.png'),
                    active: false,
                    monkey_logo: 'xing-circle'
                },
                {
                    id: 8,
                    src: require('../../../assets/logo/pinterest.png'),
                    active: false,
                    monkey_logo: 'pinterest-circle'
                },
                {
                    id: 16,
                    src: require('../../../assets/logo/venmo.png'),
                    active: false,
                    monkey_logo: 'vimeo-circle'
                },
                {
                    id: 6,
                    src: require('../../../assets/logo/linkedIn.png'),
                    active: false,
                    monkey_logo: 'soundcloud-circle'
                },
                {
                    id: 14,
                    src: require('../../../assets/logo/tikTok.png'),
                    active: false,
                    monkey_logo: 'vk-circle'
                },
                {
                    id: 18,
                    src: require('../../../assets/logo/whatsApp.png'),
                    active: false,
                    monkey_logo: 'whatsapp-circle'
                },
                {
                    id: 7,
                    src: require('../../../assets/logo/paypal.png'),
                    active: false,
                    monkey_logo: 'appstore'
                },
                {
                    id: 9,
                    src: require('../../../assets/logo/scanMe.png'),
                    active: false,
                    monkey_logo: 'google-play'
                },
                {
                    id: 2,
                    src: require('../../../assets/logo/gmail.png'),
                    active: false,
                    monkey_logo: 'gmail'
                },            
                {
                    id: 4,
                    src: require('../../../assets/logo/googlePlaystore.png'),
                    active: false,
                    monkey_logo: 'calendar-circle'
                },           
                {
                    id: 10,
                    src: require('../../../assets/logo/spotify.png'),
                    active: false,
                    monkey_logo: 'document-circle'
                },
                {
                    id: 13,
                    src: require('../../../assets/logo/telegram.png'),
                    active: false,
                    monkey_logo: 'phone-circle'
                },                
                {
                    id: 15,
                    src: require('../../../assets/logo/twitter.png'),
                    active: false,
                    monkey_logo: 'share-circle'
                },                
                {
                    id: 17,
                    src: require('../../../assets/logo/weChat.png'),
                    active: false,
                    monkey_logo: 'wifi-circle'
                },                
                
            ], qrcode_frame: '',
            qr_frames: [
                {
                    id: 1,
                    src: require('../../../assets/frame/1.svg'),
                    active: false
                },
                {
                    id: 2,
                    src: require('../../../assets/frame/2.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/frame/3.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/frame/4.svg'),
                    active: false
                },
                {
                    id: 4,
                    src: require('../../../assets/frame/5.svg'),
                    active: false
                },
                {
                    id: 5,
                    src: require('../../../assets/frame/6.svg'),
                    active: false
                },
                {
                    id: 6,
                    src: require('../../../assets/frame/7.svg'),
                    active: false
                },
                {
                    id: 7,
                    src: require('../../../assets/frame/8.svg'),
                    active: false
                },
                {
                    id: 8,
                    src: require('../../../assets/frame/9.svg'),
                    active: false
                },
                {
                    id: 9,
                    src: require('../../../assets/frame/10.svg'),
                    active: false
                },
                {
                    id: 10,
                    src: require('../../../assets/frame/11.svg'),
                    active: false
                },
                {
                    id: 13,
                    src: require('../../../assets/frame/12.svg'),
                    active: false
                }
                ,
                {
                    id: 14,
                    src: require('../../../assets/frame/13.svg'),
                    active: false
                },
                {
                    id: 15,
                    src: require('../../../assets/frame/14.svg'),
                    active: false
                },
                {
                    id: 16,
                    src: require('../../../assets/frame/15.svg'),
                    active: false
                },
                {
                    id: 17,
                    src: require('../../../assets/frame/16.svg'),
                    active: false
                }
            ],
            qrcode_eye: '',
            qrcode_inner_eye: '',
            qr_eyes: [
                {
                    id: 1,
                    src: require('../../../assets/eye/1.svg'),
                    active: false
                },
                {
                    id: 2,
                    src: require('../../../assets/eye/2.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/eye/3.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/eye/4.svg'),
                    active: false
                },
                {
                    id: 4,
                    src: require('../../../assets/eye/5.svg'),
                    active: false
                },
                {
                    id: 5,
                    src: require('../../../assets/eye/6.svg'),
                    active: false
                },
                {
                    id: 6,
                    src: require('../../../assets/eye/7.svg'),
                    active: false
                },
                {
                    id: 7,
                    src: require('../../../assets/eye/8.svg'),
                    active: false
                },
                {
                    id: 8,
                    src: require('../../../assets/eye/9.svg'),
                    active: false
                },
                {
                    id: 9,
                    src: require('../../../assets/eye/10.svg'),
                    active: false
                },
                {
                    id: 10,
                    src: require('../../../assets/eye/11.svg'),
                    active: false
                },
                {
                    id: 13,
                    src: require('../../../assets/eye/12.svg'),
                    active: false
                }
                ,
                {
                    id: 14,
                    src: require('../../../assets/eye/13.svg'),
                    active: false
                },
                {
                    id: 15,
                    src: require('../../../assets/eye/14.svg'),
                    active: false
                },
                {
                    id: 16,
                    src: require('../../../assets/eye/15.svg'),
                    active: false
                }
            ],
            qr_inner_eyes: [
                {
                    id: 1,
                    src: require('../../../assets/eye/1.svg'),
                    active: false
                },
                {
                    id: 2,
                    src: require('../../../assets/eye/2.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/eye/3.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/eye/4.svg'),
                    active: false
                },
                {
                    id: 4,
                    src: require('../../../assets/eye/5.svg'),
                    active: false
                },
                {
                    id: 5,
                    src: require('../../../assets/eye/6.svg'),
                    active: false
                },
                {
                    id: 6,
                    src: require('../../../assets/eye/7.svg'),
                    active: false
                },
                {
                    id: 7,
                    src: require('../../../assets/eye/8.svg'),
                    active: false
                },
                {
                    id: 8,
                    src: require('../../../assets/eye/9.svg'),
                    active: false
                },
                {
                    id: 9,
                    src: require('../../../assets/eye/10.svg'),
                    active: false
                },
                {
                    id: 10,
                    src: require('../../../assets/eye/11.svg'),
                    active: false
                },
                {
                    id: 13,
                    src: require('../../../assets/eye/12.svg'),
                    active: false
                }
                ,
                {
                    id: 14,
                    src: require('../../../assets/eye/13.svg'),
                    active: false
                },
                {
                    id: 15,
                    src: require('../../../assets/eye/14.svg'),
                    active: false
                },
                {
                    id: 16,
                    src: require('../../../assets/eye/15.svg'),
                    active: false
                }
            ],
        };
    },
    methods: {
        changeQrCodeStyle(item) {
            if (item.active) return;
            this.qrcode_style = item.label;
            this.qrcode_styles.forEach((o) => (o.active = false));
            item.active = true;
        },
        changeQrPattern(item) {
            if (item.active) return;
            this.qrcode_pattern = item.monkey_body;
            this.qr_patterns.forEach((o) => (o.active = false));
            item.active = true;
            this.generateQrcode(this.url)
        },
        changeQrLogo(item) {
            if (item.active) return;
            this.qrcode_logo = `#${item.monkey_logo}`;
            this.qr_logos.forEach((o) => (o.active = false));
            item.active = true;
            this.generateQrcode(this.url)
        },
        changeQrFrame(item) {
            if (item.active) return;
            this.qrcode_frame = item.id;
            this.qr_frames.forEach((o) => (o.active = false));
            item.active = true;
        },
        changeQrEye(item, index) {
            if (item.active) return;
            this.qrcode_eye = 'frame' + index;
            this.qr_eyes.forEach((o) => (o.active = false));
            item.active = true;
            this.generateQrcode(this.url)
        },
        changeQrInnerEye(item, index){
            if (item.active) return;
            this.qrcode_inner_eye = 'ball' + index;
            this.qr_inner_eyes.forEach((o) => (o.active = false));
            item.active = true;
            this.generateQrcode(this.url)
        },
        download(link, picName){
            let img = new Image()
            img.setAttribute('crossOrigin', 'Anonymous')
            img.onload = function(){
                let canvas = document.createElement('canvas')
                let context = canvas.getContext('2d')
                canvas.width = img.width
                canvas.height = img.height
                context.drawImage(img, 0, 0, img.width, img.height)
                let url = canvas.toDataURL('images/png')
                let a = document.createElement('a')
                let event = new MouseEvent('click')
                a.download = picName || 'default.png'
                a.href = url
                a.dispatchEvent(event)
            }
            img.src = link + '?v=' + Date.now()
        },
        downQrcode() {
            this.download(this.imageSrc, 'xxx.svg');
        },
        generateQrcode(text, image) {
            this.showGeneratedCode = false;
            this.imageSrc = null;
            this.url = text;
            // this.generateQrcode(text);
            // const jsonData = {
            //     data: this.url,
            //     download: "imageUrl",
            //     file: "svg",
            //     size: 1000,
            //     config: {
            //         bgColor: '',
            //         body: this.qrcode_pattern,
            //         bodyColor: '',
            //         brf1: [],
            //         brf2: [],
            //         brf3: [],
            //         erf1: [],
            //         erf2: [],
            //         erf3: [],
            //         eye: "frame7",
            //         eye1Color: "#D61919",
            //         eye2Color: "#D61919",
            //         eye3Color: "#D61919",
            //         eyeBall: "ball0",
            //         eyeBall1Color: "#D61919",
            //         eyeBall2Color: "#D61919",
            //         eyeBall3Color: "#D61919",
            //         gradientColor1: "",
            //         gradientColor2: "",
            //         gradientOnEyes: "true",
            //         gradientType: "linear",
            //         logo: "",
            //         logoMode: "default"
            //     }
            // }
            console.log(this.qrcode_pattern);
            console.log(this.qrcode_eye);
            console.log(this.qrcode_inner_eye);
            console.log(this.qrcode_logo)
            const jsonData = {
                "data":this.url,
                "config":{
                    "body":this.qrcode_pattern || 'square',
                    "eye":this.qrcode_eye || 'frame0',
                    "eyeBall":this.qrcode_inner_eye || 'ball0',
                    "erf1":[],"erf2":[],"erf3":[],"brf1":[],"brf2":[],"brf3":[],
                    "bodyColor":"#000000","bgColor":"#ffffff",
                    "eye1Color":"#000000","eye2Color":"#000000","eye3Color":"#000000",
                    "eyeBall1Color":"#000000","eyeBall2Color":"#000000","eyeBall3Color":"#000000",
                    "gradientColor1":"","gradientColor2":"","gradientType":"linear","gradientOnEyes":"true",
                    "logo": `${this.qrcode_logo}`,"logoMode":"default"},
                "size":1000,"download":"imageUrl","file":"svg"};
            // const jsonData = {"data":"https://www.baidu.com","config":{"body":"round","eye":"frame7","eyeBall":"ball0","erf1":[],"erf2":[],"erf3":[],"brf1":[],"brf2":[],"brf3":[],"bodyColor":"#D61919","bgColor":"#110F0F","eye1Color":"#D61919","eye2Color":"#D61919","eye3Color":"#D61919","eyeBall1Color":"#D61919","eyeBall2Color":"#D61919","eyeBall3Color":"#D61919","gradientColor1":"","gradientColor2":"","gradientType":"linear","gradientOnEyes":"true","logo":"","logoMode":"default"},"size":1000,"download":"imageUrl","file":"svg"};
            console.log(jsonData)
            this.$http.post('/generateCode', jsonData).then(r => {
                console.log(r)
                this.imageSrc = `https:${r.data.imageUrl}`;
                this.showGeneratedCode = true;
                // 渲染canvas
                // const canvas = document.getElementById("canvas_qr_code");
                // canvas.width = canvas.style.width.slice(0, -2);
                // canvas.height = canvas.style.height.slice(0, -2);
                // const ctx = canvas.getContext("2d");
                // ctx.clearRect(0, 0, canvas.width, canvas.height);
                // const img = document.createElement('img');
                // img.src = `https:${r.data.imageUrl}`;
                // img.onload = (e) => {
                //     ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
                // }
            })
            // this.showGeneratedCode = false;
            // const option = {
            //     // render method: 'canvas', 'image' or 'div'
            //     render: 'canvas',
            //     // version range somewhere in 1 .. 40
            //     minVersion: 1,
            //     maxVersion: 40,
            //     // error correction level: 'L', 'M', 'Q' or 'H'
            //     ecLevel: 'H',
            //     // offset in pixel if drawn onto existing canvas
            //     left: 0,
            //     top: 0,
            //     // size in pixel
            //     size: 200,
            //     // code color or image element
            //     fill: '#000',
            //     // background color or image element, null for transparent background
            //     background: null,
            //     // content
            //     text,
            //     // corner radius relative to module width: 0.0 .. 0.5
            //     radius: 0,
            //     // quiet zone in modules
            //     quiet: 0,
            //     // modes
            //     // 0: normal
            //     // 1: label strip
            //     // 2: label box
            //     // 3: image strip
            //     // 4: image box
            //     mode: 4,
            //     mSize: 0.3,
            //     mPosX: 0.5,
            //     mPosY: 0.5,
            //     label: 'no label',
            //     fontname: 'sans',
            //     fontcolor: '#000',
            //     image//$("#img-buffer")[0]
            // }
            // const canvas = document.getElementById("canvas_qr_code");
            // const ctx = canvas.getContext("2d");
            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            // $("#canvas_qr_code").empty().qrcode(option);
            // this.showGeneratedCode = true;
        }
    },
    mounted() {
        const _this = this;
        this.$EventBus.$on('generateQr', (text) => {
            this.generateQrcode(text);
        })
    }
};
</script>

<style scoped>
.generator-container .visual-container {
    z-index: 0;
}

.visual-container {
    border-radius: 5px;
    scroll-margin-top: 64px;
}

.visual-container .visual-data {
    padding-right: 0 !important;
}

/* @media (min-width: 992px)
.flex-lg-nowrap {
    flex-wrap: nowrap!important;
} 
@media (min-width: 992px)
.visual-container .visual-data .tool-container {
    width: calc(100% - 320px);
    border-radius: 4px 0 0 4px;
}
*/

.visual-container .visual-data .tool-cover {
    padding: 16px 24px;
}

.step-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
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

.home label {
    color: #6f787f;
    margin-bottom: 0;
    padding: 0 0 8px;
    font-weight: 700;
    font-size: 100%;
}

.visual-container .visual-data .tool-container {
    width: 100%;
    background: #e8eef2;
    padding-bottom: 16px;
    border-radius: 4px 4px 0 0;
}

.step-header .guide-link {
    color: #404040;
    font-weight: 400;
    font-size: 12px;
}

.visual-container .visual-data .main-container {
    width: 100%;
}

.main-container {
    padding-bottom: 0 !important;
    font-family: Poppins;
}

.visual-container .visual-data .main-container .menu-tab {
    display: flex;
    overflow: auto;
}

.visual-container .visual-data .main-container .menu-tab .menu-item {
    padding-right: 8px;
    flex: 1 1;
    cursor: pointer;
}

.visual-container .visual-data .main-container .menu-tab .menu-item .item-contain.active {
    background-color: #fff;
}

.visual-container .visual-data .main-container .menu-tab .menu-item .item-contain {
    padding: 8px 20px;
    background-color: #cfdae1;
    text-align: center;
    border-radius: 4px 4px 0 0;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.visual-container .visual-data .main-container .main-body {
    width: 100%;
    background-color: #fff;
    padding: 10px;
}

.visual-container .visual-data .dots-pattern .title {
    padding: 10px;
    font-style: normal;
    display: flex;
    align-items: center;
    font-size: 12px;
}

.visual-container .visual-data .dots-pattern .dot-body {
    display: flex;
    flex-wrap: wrap;
}

.visual-container .visual-data .main-container .menu-tab[data-v-4823272a] {
    display: flex;
    overflow: auto;
}

.visual-container .visual-data .dots-pattern .dot-body .eye-pattern {
    width: 108px;
    height: 108px;
    margin: 10px;
    padding: 10px !important;
    display: inline-block;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid #d4d4d4;
    padding: 0;
    margin: 6px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
}

.visual-container .visual-data .dots-pattern .dot-body .active {
    border: 2px solid #0dbc29;
}

/* @media (min-width: 992px)
.visual-container .visual-data .settings-download {
    border-radius: 0 4px 4px 0;
} */

.visual-container .visual-data .settings-download {
    border-radius: 0 0 4px 4px;
}

.visual-container .settings-download {
    max-width: 320px;
    padding-left: 0;
    background: #e8eef2;
}

.visual-container .settings-download .download-cover {
    padding: 24px 24px 24px 0;
}

.visual-container .settings-download .download-cover .logo-code-guide {
    font-family: Poppins;
    font-weight: 400;
    font-size: 12px;
    color: #404040;
    text-align: center;
    width: 100%;
    padding: 0 58px;
}

.visual-container .settings-download .canvas-cover {
    text-align: center;
}

.visual-container .settings-download .template {
    justify-content: center;
    height: 50px;
}

.visual-container .visual-data .settings-download .template label {
    padding-bottom: 0;
    padding-top: 4px;
}

.MuiFormControlLabel-root.Mui-disabled {
    cursor: default;
}

.home label {
    color: #6f787f;
    margin-bottom: 0;
    padding: 0 0 8px;
    font-weight: 700;
    font-size: 100%;
}

.MuiFormControlLabel-root {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: -11px;
    margin-right: 16px;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
}

label,
p {
    font-family: unset;
}

label {
    color: #6f787f;
    margin-bottom: 0;
    padding: 0 0 8px;
    font-weight: 700;
    font-size: 80%;
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.visual-container .settings-download .MuiFormControl-root {
    width: 100%;
}

.MuiFormControl-root {
    border: 0;
    margin: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
}

.visual-container .settings-download .MuiFormControl-root .MuiFormGroup-row {
    width: 100%;
    justify-content: center;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
}

.visual-container .settings-download .download-cover .btn {
    font-size: 14px;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.visual-container .visual-data .logo .shape-options {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 5px;
    gap: 5px;
    justify-content: flex-start;
    margin-top: 8px;
}

/* .visual-container .visual-data .logo .shape-options .shape {
    transition: all .3s ease 0s;
    cursor: pointer;
    padding: 6px;
    width: 80px;
    height: 80px;
    border: 3px solid transparent;
    background: #fff;
    border-radius: 0.25rem;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
} */

.visual-container .visual-data .logo .shape-options .active {
    border: 2px solid #0dbc29;
}

/* .visual-container .visual-data .logo .shape-options .shape img {
    width: 100%;
    height: 100%;
} */

.visual-container .visual-data .frames {
    padding: 6px;
}

.form-check-inline {
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem;
}

.visual-container .visual-data .colors input,
.visual-container .visual-data .frames input {
    background: #fff;
    border: 0.5px solid #d4d4d4 !important;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
}

.visual-container .visual-data .frames .frame-cover {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 12px;
    gap: 12px;
}

.visual-container .visual-data .frames .frame-cover .active {
    border: 2px solid #0dbc29;
}

.visual-container .visual-data .frames .frame-cover .frame.blank {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;
}

.visual-container .visual-data .frames .frame-cover .frame {
    display: block;
    position: relative;
    border: 1px solid #d4d4d4;
    cursor: pointer;
    padding: 8px;
    width: 108px;
    height: 108px;
}

.hidden {
    display: none !important;
}
.visual-container .settings-download .canvas-cover .canvas {
    position: relative;
    display: inline-block;
    width: 100%;
}
.visual-container .settings-download .canvas-cover .canvas img {
    width: 100%;
}

.shape {
    -webkit-transition: all .3s;
    /* transition: all .3s; */
    cursor: pointer;
    padding: 6px;
    width: 60px;
    height: 60px;
    border: 3px solid transparent;
    margin: 0 8px 8px 0;
    background: #fff;
    border-radius: 0.25rem;
    float: left;
    opacity: .99;
}
.sprite {
    background-image: url(../../../assets/monkey/spritesheet.png);
    background-repeat: no-repeat;
    display: block;
    -ms-transform: scale(.76) translate(-5px,-5px);
    -webkit-transform: scale(.76) translate(-5px,-5px);
    transform: scale(.76) translate(-5px,-5px);
}
.sprite-frame0 {
    width: 50px;
    height: 50px;
    background-position: -525px -125px;
}
.sprite-frame0 {
    width: 50px;
    height: 50px;
    background-position: -525px -125px
}

.sprite-frame1 {
    width: 50px;
    height: 50px;
    background-position: -525px -185px
}

.sprite-frame10 {
    width: 50px;
    height: 50px;
    background-position: -405px -245px
}

.sprite-frame11 {
    width: 50px;
    height: 50px;
    background-position: -465px -245px
}

.sprite-frame12 {
    width: 50px;
    height: 50px;
    background-position: -525px -245px
}

.sprite-frame13 {
    width: 50px;
    height: 50px;
    background-position: -5px -305px
}

.sprite-frame14 {
    width: 50px;
    height: 50px;
    background-position: -65px -305px
}

.sprite-frame15 {
    width: 50px;
    height: 50px;
    background-position: -125px -305px
}

.sprite-frame16 {
    width: 50px;
    height: 50px;
    background-position: -185px -305px
}

.sprite-frame2 {
    width: 50px;
    height: 50px;
    background-position: -245px -305px
}

.sprite-frame3 {
    width: 50px;
    height: 50px;
    background-position: -305px -305px
}

.sprite-frame4 {
    width: 50px;
    height: 50px;
    background-position: -365px -305px
}

.sprite-frame5 {
    width: 50px;
    height: 50px;
    background-position: -425px -305px
}

.sprite-frame6 {
    width: 50px;
    height: 50px;
    background-position: -485px -305px
}

.sprite-frame7 {
    width: 50px;
    height: 50px;
    background-position: -5px -365px
}

.sprite-frame8 {
    width: 50px;
    height: 50px;
    background-position: -65px -365px
}

.sprite-frame9 {
    width: 50px;
    height: 50px;
    background-position: -125px -365px
}

.sprite-ball0 {
    width: 50px;
    height: 50px;
    background-position: -5px -5px
}

.sprite-ball1 {
    width: 50px;
    height: 50px;
    background-position: -65px -5px
}

.sprite-ball10 {
    width: 50px;
    height: 50px;
    background-position: -125px -5px
}

.sprite-ball11 {
    width: 50px;
    height: 50px;
    background-position: -185px -5px
}

.sprite-ball12 {
    width: 50px;
    height: 50px;
    background-position: -245px -5px
}

.sprite-ball13 {
    width: 50px;
    height: 50px;
    background-position: -305px -5px
}

.sprite-ball14 {
    width: 50px;
    height: 50px;
    background-position: -365px -5px
}

.sprite-ball15 {
    width: 50px;
    height: 50px;
    background-position: -425px -5px
}

.sprite-ball16 {
    width: 50px;
    height: 50px;
    background-position: -485px -5px
}

.sprite-ball17 {
    width: 50px;
    height: 50px;
    background-position: -5px -65px
}

.sprite-ball18 {
    width: 50px;
    height: 50px;
    background-position: -65px -65px
}

.sprite-ball19 {
    width: 50px;
    height: 50px;
    background-position: -125px -65px
}

.sprite-ball2 {
    width: 50px;
    height: 50px;
    background-position: -185px -65px
}

.sprite-ball3 {
    width: 50px;
    height: 50px;
    background-position: -245px -65px
}

.sprite-ball4 {
    width: 50px;
    height: 50px;
    background-position: -305px -65px
}

.sprite-ball5 {
    width: 50px;
    height: 50px;
    background-position: -365px -65px
}

.sprite-ball6 {
    width: 50px;
    height: 50px;
    background-position: -425px -65px
}

.sprite-ball7 {
    width: 50px;
    height: 50px;
    background-position: -485px -65px
}

.sprite-ball8 {
    width: 50px;
    height: 50px;
    background-position: -5px -125px
}

.sprite-ball9 {
    width: 50px;
    height: 50px;
    background-position: -65px -125px
}
sprite-japnese {
    width: 90px;
    height: 80px;
    background-position: -185px -365px
}

.sprite-knob {
    width: 90px;
    height: 80px;
    background-position: -285px -365px
}

.sprite-knob-smooth {
    width: 90px;
    height: 80px;
    background-position: -385px -365px
}

.sprite-leaf {
    width: 90px;
    height: 80px;
    background-position: -485px -365px
}

.sprite-mosaic {
    width: 90px;
    height: 80px;
    background-position: -5px -455px
}

.sprite-pointed {
    width: 90px;
    height: 80px;
    background-position: -105px -455px
}

.sprite-pointed-edge-cut {
    width: 90px;
    height: 80px;
    background-position: -205px -455px
}

.sprite-pointed-in {
    width: 90px;
    height: 80px;
    background-position: -305px -455px
}

.sprite-pointed-in-smooth {
    width: 90px;
    height: 80px;
    background-position: -405px -455px
}

.sprite-pointed-smooth {
    width: 90px;
    height: 80px;
    background-position: -545px -5px
}

.sprite-round {
    width: 90px;
    height: 80px;
    background-position: -585px -95px
}

.sprite-rounded-in {
    width: 90px;
    height: 80px;
    background-position: -585px -185px
}

.sprite-rounded-in-smooth {
    width: 90px;
    height: 80px;
    background-position: -585px -275px
}

.sprite-rounded-pointed {
    width: 90px;
    height: 80px;
    background-position: -585px -365px
}

.sprite-square {
    width: 90px;
    height: 80px;
    background-position: -505px -455px
}

.sprite-star {
    width: 90px;
    height: 80px;
    background-position: -5px -545px
}

.sprite-logo {
    background-image: url(../../../assets/monkey/spritesheet-logos.png);
    background-repeat: no-repeat;
    display: block;
    -ms-transform: scale(.4) translate(-72px,-72px);
    -webkit-transform: scale(.4) translate(-72px,-72px);
    transform: scale(.4) translate(-72px,-72px)
}

.sprite-logo-appstore {
    width: 100px;
    height: 100px;
    background-position: -5px -5px
}

.sprite-logo-calendar {
    width: 100px;
    height: 100px;
    background-position: -115px -5px
}

.sprite-logo-calendar-circle {
    width: 100px;
    height: 100px;
    background-position: -225px -5px
}

.sprite-logo-document {
    width: 100px;
    height: 100px;
    background-position: -335px -5px
}

.sprite-logo-document-circle {
    width: 100px;
    height: 100px;
    background-position: -445px -5px
}

.sprite-logo-facebook {
    width: 100px;
    height: 100px;
    background-position: -5px -115px
}

.sprite-logo-facebook-circle {
    width: 100px;
    height: 100px;
    background-position: -115px -115px
}

.sprite-logo-gmail {
    width: 100px;
    height: 100px;
    background-position: -225px -115px
}

.sprite-logo-google-play {
    width: 100px;
    height: 100px;
    background-position: -335px -115px
}

.sprite-logo-googleplus-circle {
    width: 100px;
    height: 100px;
    background-position: -445px -115px
}

.sprite-logo-instagram-circle {
    width: 100px;
    height: 100px;
    background-position: -5px -225px
}

.sprite-logo-linkedin-circle {
    width: 100px;
    height: 100px;
    background-position: -115px -225px
}

.sprite-logo-phone-circle {
    width: 100px;
    height: 100px;
    background-position: -225px -225px
}

.sprite-logo-pinterest-circle {
    width: 100px;
    height: 100px;
    background-position: -335px -225px
}

.sprite-logo-qrcodemonkey {
    width: 100px;
    height: 100px;
    background-position: -445px -225px
}

.sprite-logo-share-circle {
    width: 100px;
    height: 100px;
    background-position: -5px -335px
}

.sprite-logo-soundcloud-circle {
    width: 100px;
    height: 100px;
    background-position: -115px -335px
}

.sprite-logo-twitter-circle {
    width: 100px;
    height: 100px;
    background-position: -225px -335px
}

.sprite-logo-vimeo-circle {
    width: 100px;
    height: 100px;
    background-position: -335px -335px
}

.sprite-logo-vk-circle {
    width: 100px;
    height: 100px;
    background-position: -445px -335px
}

.sprite-logo-whatsapp-circle {
    width: 100px;
    height: 100px;
    background-position: -5px -445px
}

.sprite-logo-wifi-circle {
    width: 100px;
    height: 100px;
    background-position: -115px -445px
}

.sprite-logo-xing-circle {
    width: 100px;
    height: 100px;
    background-position: -225px -445px
}

.sprite-logo-youtube {
    width: 100px;
    height: 100px;
    background-position: -335px -445px
}

.sprite-logo-youtube-circle {
    width: 100px;
    height: 100px;
    background-position: -445px -445px
}

.sprite-logo-bitcoin {
    width: 100px;
    height: 100px;
    background-position: -5px -555px
}
.sprite-body {
    -ms-transform: scale(.5) translate(-48px,-39px);
    -webkit-transform: scale(.5) translate(-48px,-39px);
    transform: scale(.5) translate(-48px,-39px);
}

.sprite-dot {
    width: 90px;
    height: 80px;
    background-position: -105px -215px
}

.sprite-edge-cut {
    width: 90px;
    height: 80px;
    background-position: -205px -215px
}

.sprite-edge-cut-smooth {
    width: 90px;
    height: 80px;
    background-position: -305px -215px
}

.sprite-circle {
    width: 90px;
    height: 80px;
    background-position: -125px -125px
}

.sprite-circle-zebra {
    width: 90px;
    height: 80px;
    background-position: -225px -125px
}

.sprite-circle-zebra-vertical {
    width: 90px;
    height: 80px;
    background-position: -325px -125px
}

.sprite-circular {
    width: 90px;
    height: 80px;
    background-position: -425px -125px
}

.sprite-diamond {
    width: 90px;
    height: 80px;
    background-position: -5px -215px
}
.sprite-japnese {
    width: 90px;
    height: 80px;
    background-position: -185px -365px
}
</style>
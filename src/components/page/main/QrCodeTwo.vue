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
                                <!-- <div class="menu-item" @click="qrcode_style = 'pattern'">
                                    
                                </div>
                                <div class="menu-item" @click="qrcode_style = 'eye'">
                                    <div class="item-contain "><i class="qr-eyes mr-2"></i><span class="">Eyes</span></div>
                                </div>
                                <div class="menu-item" @click="qrcode_style = 'logo'">
                                    <div class="item-contain "><i class="qr-image mr-2"></i><span class="">Logo</span></div>
                                </div>
                                <div class="menu-item" @click="qrcode_style = 'color'">
                                    <div class="item-contain "><i class="qr-sliders mr-2"></i><span class="">Colors</span>
                                    </div>
                                </div>
                                <div class="menu-item" @click="qrcode_style = 'frame'">
                                    <div class="item-contain "><i class="qr-frame mr-2"></i><span class="">Frame</span>
                                    </div>
                                </div>
                                <div class="menu-item" @click="qrcode_style = 'template'">
                                    <div class="item-contain "><i class="qr-template-frame mr-2"></i><span
                                            class="">Templates</span></div>
                                </div> -->
                            </div>
                            <div class="main-body">
                                <div class="dots-pattern mb-3" v-if="qrcode_style === 'Pattern'">
                                    <div class="title"><i class="qr-exclamation-circle mr-1"></i>You can customize these
                                        templates later to match your brand</div>
                                    <div class="dot-body">
                                        <div class="eye-pattern small-eye" :class="{ 'active': item.active }" alt="qr eye"
                                            v-for="item in qr_patterns" :key="item.id" @click="changeQrPattern(item)">
                                            <img class="img-pattern" :src="item.src">
                                        </div>
                                    </div>
                                </div>
                                <div class="dots-pattern mb-3" v-if="qrcode_style === 'Eyes'">
                                    <div class="title"><i class="qr-exclamation-circle mr-1"></i>Select eyes to make your QR
                                        code stand out. Eyes are what your camera recognizes when scanning</div>
                                    <div class="dot-body">
                                        <button v-for="item in qr_eyes" :key="item.id" :class="{ 'active': item.active }"
                                            class="eye-pattern false" @click="changeQrEye(item
                                            )">
                                            <img :src="item.src">
                                        </button>
                                    </div>
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
                                        <div class="shape-options">
                                            <button class="shape" @click="changeQrLogo(item)"
                                                :class="{ 'active': item.active }" v-for="item in qr_logos" :key="item.id">
                                                <img :src="item.src">
                                            </button>
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
                                    <img :src="generatedCodeSrc" v-if="showGeneratedCode" class="canvas-image-preview" alt="free qr code"
                                        height="auto">
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
                                <div class="btn-download"><button class="btn btn-success w-100 false">Download</button>
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
        showGeneratedCode: function() {
            return this.$store.state.showGeneratedCode;
        }
    },
    data() {
        return {
            step_one_tip: '',
            qrcode_style: 'Pattern',
            qrcode_pattern: '',
            qr_patterns: [
                {
                    id: 1,
                    src: require('../../../assets/pattern/00.svg'),
                    active: true
                },
                {
                    id: 2,
                    src: require('../../../assets/pattern/01.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/pattern/02.svg'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/pattern/03.svg'),
                    active: false
                },
                {
                    id: 4,
                    src: require('../../../assets/pattern/04.svg'),
                    active: false
                },
                {
                    id: 5,
                    src: require('../../../assets/pattern/05.svg'),
                    active: false
                },
                {
                    id: 6,
                    src: require('../../../assets/pattern/06.svg'),
                    active: false
                },
                {
                    id: 7,
                    src: require('../../../assets/pattern/07.svg'),
                    active: false
                },
                {
                    id: 8,
                    src: require('../../../assets/pattern/08.svg'),
                    active: false
                },
                {
                    id: 9,
                    src: require('../../../assets/pattern/09.svg'),
                    active: false
                },
                {
                    id: 10,
                    src: require('../../../assets/pattern/10.svg'),
                    active: false
                },
                {
                    id: 13,
                    src: require('../../../assets/pattern/13.svg'),
                    active: false
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
                    active: false
                },
                {
                    id: 2,
                    src: require('../../../assets/logo/gmail.png'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/logo/googleForm.png'),
                    active: false
                },
                {
                    id: 3,
                    src: require('../../../assets/logo/googleMaps.png'),
                    active: false
                },
                {
                    id: 4,
                    src: require('../../../assets/logo/googlePlaystore.png'),
                    active: false
                },
                {
                    id: 5,
                    src: require('../../../assets/logo/instagram.png'),
                    active: false
                },
                {
                    id: 6,
                    src: require('../../../assets/logo/linkedIn.png'),
                    active: false
                },
                {
                    id: 7,
                    src: require('../../../assets/logo/paypal.png'),
                    active: false
                },
                {
                    id: 8,
                    src: require('../../../assets/logo/pinterest.png'),
                    active: false
                },
                {
                    id: 9,
                    src: require('../../../assets/logo/scanMe.png'),
                    active: false
                },
                {
                    id: 10,
                    src: require('../../../assets/logo/spotify.png'),
                    active: false
                },
                {
                    id: 13,
                    src: require('../../../assets/logo/telegram.png'),
                    active: false
                }
                ,
                {
                    id: 14,
                    src: require('../../../assets/logo/tikTok.png'),
                    active: false
                },
                {
                    id: 15,
                    src: require('../../../assets/logo/twitter.png'),
                    active: false
                },
                {
                    id: 16,
                    src: require('../../../assets/logo/venmo.png'),
                    active: false
                },
                {
                    id: 17,
                    src: require('../../../assets/logo/weChat.png'),
                    active: false
                },
                {
                    id: 18,
                    src: require('../../../assets/logo/whatsApp.png'),
                    active: false
                },
                {
                    id: 19,
                    src: require('../../../assets/logo/yelp.png'),
                    active: false
                },
                {
                    id: 20,
                    src: require('../../../assets/logo/youtube.png'),
                    active: false
                }
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
            this.qrcode_pattern = item.id;
            this.qr_patterns.forEach((o) => (o.active = false));
            item.active = true;
        }
        ,
        changeQrLogo(item) {
            if (item.active) return;
            this.qrcode_logo = item.id;
            this.qr_logos.forEach((o) => (o.active = false));
            item.active = true;
        },
        changeQrFrame(item) {
            if (item.active) return;
            this.qrcode_frame = item.id;
            this.qr_frames.forEach((o) => (o.active = false));
            item.active = true;
        },
        changeQrEye(item) {
            if (item.active) return;
            this.qrcode_eye = item.id;
            this.qr_eyes.forEach((o) => (o.active = false));
            item.active = true;
        }
    },
    mounted() {
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

.visual-container .visual-data .dots-pattern .dot-body .eye-pattern.active {
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

.visual-container .visual-data .logo .shape-options .shape {
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
}

.visual-container .visual-data .logo .shape-options .shape.active {
    border: 2px solid #0dbc29;
}

.visual-container .visual-data .logo .shape-options .shape img {
    width: 100%;
    height: 100%;
}

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

.visual-container .visual-data .frames .frame-cover .frame.active {
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

</style>
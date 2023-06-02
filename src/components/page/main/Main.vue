<template>
<div class="main-container-body">
                <div class="children">
                    <div class="home">
                        <div class="section-top">
                            <div class="container">
                                <div class="generator-container">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <v-qrcode-type></v-qrcode-type>
                                            <v-qrcode-one></v-qrcode-one>
                                            <v-qrcode-two></v-qrcode-two>
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
import vHead from '../../common/Header.vue';
import vQrcodeType from './QrCodeType.vue';
import vQrcodeOne from './QrCodeOne.vue';
import vQrcodeTwo from './QrCodeTwo.vue';
export default {
    components: {
        vHead,
        vQrcodeType,
        vQrcodeOne,
        vQrcodeTwo
    }
}
</script>

<style scoped>
.relative {
    position: relative;
}

.main-container-body {
    min-height: calc(100vh - 175px);
    margin-top: 57px;
}

.children {
    z-index: 2;
}

.home {
    font-size: 13px !important;
}

.home .section-top {
    background: #1155a0;
}

/* @media (min-width: 992px)
.container, .container-lg, .container-md, .container-sm {
    max-width: 960px;
}

@media (min-width: 768px)
.container, .container-md, .container-sm {
    max-width: 720px;
}
@media (min-width: 576px)
.container, .container-sm {
    max-width: 540px;
} */
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.generator-container {
    position: relative;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}</style>
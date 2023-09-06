<template>
    <div class="main-container-body">
        <div class="children">
            <div id="pricing">
                <div class="pricing-container">
                    <div class="container inner">
                        <div class="row mb-3">
                            <div class="col-md-12 text-center mt-4 mb-4">
                                <div class="main-title p-4">
                                    <h1 class="large-text">Plans &amp; Pricing</h1><label class="normal-text m-2">Enjoy 24/7
                                        customer support on all plans</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center payment-plans">
                                <div class="columns">
                                    <div class="header free text-center">Freemium</div>
                                    <div class="columns-inner free">
                                        <ul class="price">
                                            <li class="grey text-center mt-1 price-block">
                                                <div class="d-flex flex-column"><span class="large-text">US$0</span><span
                                                        class="normal-text">Month</span></div>
                                            </li>
                                            <li class="text-center exchange-text visible">
                                                <div>Free trial version</div>
                                            </li>
                                            <li class="grey text-center"><span class="normal-text">Upgrade any time</span>
                                            </li>
                                            <li class="grey text-center pb-0 pt-0 button-payment"></li>
                                        </ul>
                                        <ul class="price"><span class="show-features mt-2 mb-2">Show features</span>
                                            <ul class="price features free-dynamic">
                                                <li><i class="qr-check mr-2"></i>
                                                    <div class="d-inline-block"> 3 dynamic QR</div>
                                                </li>
                                                <li><i class="qr-check mr-2"></i>
                                                    <div class="d-inline-block"> QR Tiger logo popup in free trial</div>
                                                </li>
                                                <li><i class="qr-check mr-2"></i>
                                                    <div class="d-inline-block"> 500 scan limit for dynamic QR codes</div>
                                                </li>
                                                <li><i class="qr-check mr-2"></i>
                                                    <div class="d-inline-block"> Unlimited scans static QR code</div>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="header text-center regular">Regular</div>
                                    <div class="columns-inner">
                                        <ul class="price">
                                            <li class="grey text-center mt-1 price-block">
                                                <div>
                                                    <div class="d-flex flex-column"><span
                                                            class="large-text">US$7</span><span
                                                            class="normal-text">Month</span></div>
                                                </div>
                                            </li>
                                            <li class="text-center exchange-text visible">
                                                <div><span>USD</span></div>
                                            </li>
                                            <li class="grey text-center">
                                            <div><span class="normal-text">Billed annually</span></div>
                                        </li>
                                            <li class="grey text-center pb-0 pt-0 button-payment">
                                                <div id="regular-get-1-month"  @click="toPayment('7')"><a class="button btn mb-2 mr-1">Get 1
                                                        month</a></div>
                                            </li>
                                        </ul><span class="show-features mt-2 mb-2">Show features</span>
                                        <ul class="price features">
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> 12 dynamic QR<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> High resolution image<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Track number of scans<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Track the location of scans<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Save your QR code design as a template!<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Dynamic QR, Editable URL<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Static QR codes, Unlimited<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> No Limitation on Scans and Download<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> App stores<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> vCard<svg class="MuiSvgIcon-root help-icon"
                                                        focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Upload file 5MB<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> No ads<svg class="MuiSvgIcon-root help-icon"
                                                        focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Canva integration<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> Monday.com integration<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center"><i class="qr-check mr-2"></i>
                                                <div class="d-inline-block"> API: 500 request/month<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> QR Codes in bulk <svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Google analytics<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Zapier and hubspot integration<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Password<svg class="MuiSvgIcon-root help-icon"
                                                        focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Retarget tool<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Notification<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Expiry<svg class="MuiSvgIcon-root help-icon"
                                                        focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Use your own domain (white label)<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                        </path>
                                                    </svg></div>
                                            </li>
                                            <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                                <div class="d-inline-block"> Multi URL QR codes<svg
                                                        class="MuiSvgIcon-root help-icon" focusable="false"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                            <div class="d-inline-block"> Precision Geolocation Tracking<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                            <div class="d-inline-block"> Restrict Scanning Zone (Geofence)<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                    </ul>
                                    <li class="grey text-center pb-0 pt-0 button-payment mobile"></li>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="header text-center advanced">Advanced<div class="best-seller"><i
                                            class="qr-star mr-2"></i>Best</div>
                                </div>
                                <div class="columns-inner">
                                    <ul class="price">
                                        <li class="grey text-center mt-1 price-block">
                                            <div class="d-flex flex-column"><span class="large-text">US$16</span><span
                                                    class="normal-text">Month</span></div>
                                        </li>
                                        <li class="text-center exchange-text visible">
                                            <div><span>USD</span></div>
                                        </li>
                                        <li class="grey text-center">
                                            <div><span class="normal-text">Billed annually</span></div>
                                        </li>
                                        <li class="grey text-center button-payment">
                                            <div id="regular-get-1-month" @click="toPayment('16')"><a class="button btn mb-2">Get 1 year</a>
                                            </div>
                                        </li>
                                    </ul><span class="show-features mt-2 mb-2">Show features</span>
                                    <ul class="price features">
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> 200 dynamic QR<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> High resolution image<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Track number of scans<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Track the location of scans<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Save your QR code design as a template!<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Dynamic QR, Editable URL<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Static QR codes, Unlimited<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> No Limitation on Scans and Download<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> App stores<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> vCard<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Upload file 10MB<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> No ads<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Canva integration<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Monday.com integration<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> API: 3000 request/month<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> QR Codes in bulk <svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Google analytics<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Zapier and hubspot integration<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Password<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Retarget tool<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Notification<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Expiry<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                            <div class="d-inline-block"> Use your own domain (white label)<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                            <div class="d-inline-block"> Multi URL QR codes<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                            <div class="d-inline-block"> Precision Geolocation Tracking<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center locked"><i class="qr-lock mr-2"></i>
                                            <div class="d-inline-block"> Restrict Scanning Zone (Geofence)<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                    </ul>
                                    <li class="grey text-center pb-0 pt-0 button-payment mobile"></li>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="header text-center premium">Premium</div>
                                <div class="columns-inner">
                                    <ul class="price">
                                        <li class="grey text-center mt-1 price-block">
                                            <div class="d-flex flex-column"><span class="large-text">US$37</span><span
                                                    class="normal-text">Month</span></div>
                                        </li>
                                        <li class="text-center exchange-text visible">
                                            <div><span>USD</span></div>
                                        </li>
                                        <li class="grey text-center">
                                            <div><span class="normal-text">Billed annually</span></div>
                                        </li>
                                        <li class="grey text-center button-payment">
                                            <div id="regular-get-1-month"  @click="toPayment('37')"><a class="button btn mb-2">Get 1 year</a>
                                            </div>
                                        </li>
                                    </ul><span class="show-features mt-2 mb-2">Show features</span>
                                    <ul class="price features">
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> 600 dynamic QR<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> High resolution image<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Track number of scans<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Track the location of scans<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Save your QR code design as a template!<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Dynamic QR, Editable URL<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Static QR codes, Unlimited<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> No Limitation on Scans and Download<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> App stores<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> vCard<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Upload file 20MB<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> No ads<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Canva integration<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Monday.com integration<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> API: 10,000 request/month<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> QR Codes in bulk <svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Google analytics<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Zapier and hubspot integration<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Password<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Retarget tool<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Notification<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Expiry<svg class="MuiSvgIcon-root help-icon"
                                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Use your own domain (white label)<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Multi URL QR codes<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Precision Geolocation Tracking<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                        <li class="align-items-center"><i class="qr-check mr-2"></i>
                                            <div class="d-inline-block"> Restrict Scanning Zone (Geofence)<svg
                                                    class="MuiSvgIcon-root help-icon" focusable="false"
                                                    viewBox="0 0 24 24" aria-hidden="true">
                                                    <path
                                                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                                    </path>
                                                </svg></div>
                                        </li>
                                    </ul>
                                    <li class="grey text-center pb-0 pt-0 button-payment mobile"></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div></template>

<script>
export default {
    components: {
    },
    mounted() {
        // this.$http.post('/checkToken').then(r => {

        // }).catch(e => {

        // })
    },
    methods: {
        toPayment(price) {
            console.log(price);
            this.$store.commit('setPrice', price);
            this.$router.push('/purchase');
        }
    }
}
</script>

<style scoped>#pricing .pricing-container {
    background: #1155a0;
}

@media (min-width: 992px) .container,
.container-lg,
.container-md,
.container-sm {
    max-width: 960px;
}

@media (min-width: 768px) .container,
.container-md,
.container-sm {
    max-width: 720px;
}

@media (min-width: 576px) .container,
.container-sm {
    max-width: 540px;
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
}

#pricing .inner .main-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

#pricing .inner .main-title .large-text {
    color: #fff;
}

#pricing .inner .large-text {
    font-size: 40px;
    font-weight: 500;
}

#pricing .inner .main-title .normal-text {
    color: #fff;
    background: #084486;
    border-radius: 8px;
    padding: 4px 16px;
    font-weight: 400;
}

pricing .inner .payment-plans {
    grid-gap: 15px;
    gap: 15px;
    flex-wrap: wrap;
    align-items: flex-start;
    background: linear-gradient(180deg, #0f64c1, #1d6ec6 .01%, #1155a0 85.94%);
    padding: 20px;
}
#pricing .inner .payment-plans .columns .columns-inner .price.features li .help-icon {
    width: 18px!important;
    height: 18px!important;
}

#pricing .inner .payment-plans .columns .columns-inner .price.features li svg {
    cursor: pointer;
    margin-left: 5px;
    font-size: 18px;
    color: #868686;
}
<style>
.MuiSvgIcon-root {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
}
svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}
#pricing .inner .payment-plans .columns .columns-inner .price.features li {
    display: flex;
    padding: 10px 0!important;
    min-height: 40px;
    font-size: 13px;
    border-bottom: 0.5px solid #ddd;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li:first-of-type {
    /* flex-grow: 1; */
}
#pricing .inner .payment-plans .columns .columns-inner>ul li {
    padding: 10px;
}

@media (max-width: 1400px) #pricing .inner .payment-plans .columns {
    width: calc(50% - 15px);
}

#pricing .inner .payment-plans .columns {
    display: flex;
    flex-direction: column;
    width: calc(20% - 15px);
}

#pricing .inner .payment-plans .columns .header.free,
#pricing .inner .payment-plans .columns .header.premium,
#pricing .inner .payment-plans .columns .header.regular {
    background-color: #2c90ff;
}

#pricing .inner .payment-plans .columns .header {
    background-color: #f9016f;
    border-radius: 8px 8px 0 0;
    color: #fff;
    font-size: 16px;
    z-index: 0 !important;
    padding: 10px !important;
}

#pricing .inner .payment-plans .columns .columns-inner {
    background: #fff;
    border-radius: 0 0 8px 8px;
}

#pricing .inner .payment-plans .columns .columns-inner.free .price {
    border-radius: 0 0 8px 8px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul.price {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

#pricing .inner .payment-plans .columns .columns-inner .price {
    background-color: #fff;
    /* height: 100%; */
    list-style-type: none;
    margin: 0;
    padding: 0;
    transition: all .3s ease 0s;
}

#pricing .inner .payment-plans .columns .columns-inner .price .grey {
    font-size: 20px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li:first-of-type {
    /* flex-grow: 1; */
}

#pricing .inner .payment-plans .columns .columns-inner .price-block {
    height: 140px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li {
    padding: 10px;
}

#pricing .inner .large-text {
    font-size: 40px;
    font-weight: 500;
}

#pricing .inner .payment-plans .columns .columns-inner .price .normal-text {
    font-size: 14px;
    color: #868686;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li {
    padding: 10px;
}

#pricing .inner .exchange-text.visible {
    border: 1px solid;
}

#pricing .inner .exchange-text {
    padding: 5px !important;
    border-radius: 20px;
    font-weight: 500;
    height: 36px;
}

#pricing .inner .payment-plans .columns .columns-inner .price .grey {
    font-size: 20px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li {
    padding: 10px;
}

#pricing .inner .payment-plans .columns .columns-inner .price .normal-text {
    font-size: 14px;
    color: #868686;
}

#pricing .inner .payment-plans .columns .columns-inner .price .grey {
    font-size: 20px;
}

#pricing .inner .payment-plans .columns .columns-inner .button-payment {
    padding: 0 !important;
    height: 45px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li {
    padding: 10px;
}

#pricing .inner .payment-plans .columns .columns-inner.free .price {
    border-radius: 0 0 8px 8px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul.price {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

@media (max-width: 1400px) #pricing .inner .payment-plans .columns .columns-inner .show-features {
    display: flex;
}

#pricing .inner .payment-plans .columns .columns-inner .show-features {
    color: #0061d5;
    cursor: pointer;
    justify-content: center;
    display: none;
}

#pricing .inner .payment-plans .columns .columns-inner .price.features {
    border-radius: 0 0 8px 8px;
}

#pricing .inner .payment-plans .columns .columns-inner .price.features li i {
    font-size: 20px;
    color: #00c47d;
    font-weight: 700;
}

[class*=" qr-"],
[class^=qr-] {
    font-family: QrTiger !important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#pricing .inner .payment-plans .columns .columns-inner .price.free-dynamic {
    height: unset;
    flex-grow: 1;
}

#pricing .inner .payment-plans .columns .columns-inner.free .price {
    border-radius: 0 0 8px 8px;
}

#pricing .inner .payment-plans .columns .columns-inner .price .grey {
    font-size: 20px;
}

#pricing .inner .payment-plans .columns .columns-inner .button-payment {
    padding: 0 !important;
    height: 45px;
}

#pricing .inner .payment-plans .columns .columns-inner>ul li {
    padding: 10px;
}

#pricing .inner .payment-plans .columns .columns-inner .price .button {
    background-color: #22c095;
    border: none;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    color: #fff !important;
    width: 100%;
}

#pricing .inner .payment-plans .columns .header.advanced {
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    gap: 10px;
}

#pricing .inner .payment-plans .columns .header {
    background-color: #f9016f;
    border-radius: 8px 8px 0 0;
    color: #fff;
    font-size: 16px;
    z-index: 0 !important;
    padding: 10px !important;
}

#pricing .inner .payment-plans .columns .header.advanced .best-seller {
    background: #171717;
    border-radius: 40px;
    font-size: 12px;
    padding: 2px 10px;
}

#pricing .inner .payment-plans .columns .header.advanced .best-seller i {
    color: #0af;
}

[class*=" qr-"],
[class^=qr-] {
    font-family: QrTiger !important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}</style>
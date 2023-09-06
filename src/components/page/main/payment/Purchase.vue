<template>
    <div class="main-container-body">
        <div class="children">
            <div class="purchase-container py-5 px-3">
                <div>
                    <div class="purchase-form">
                        <div class="purchase-header">You are purchasing</div>
                        <div class="purchase-body">
                            <div class="purchase-label">Regular plan</div><span class="purchase-desc mb-2">US${{ price }} per
                                month</span>
                            <div class="divider my-2"></div>
                            <div class="purchase-label">US{{ price }}</div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span
                                    class="purchase-desc mb-2">Billed annually</span>
                                    <!-- <label class="link">Order Summary<i
                                        class="qr-angle-right ml-2"></i></label> -->
                                    </div>
                            <div class="">
                                <div class="">
                                    <!-- <div class="text-center mb-3 mt-3 d-flex justify-content-between align-items-center">
                                        <span class="divider"></span><span
                                            class="select-payment mx-2 w-100 text-nowrap">Select payment method</span><span
                                            class="divider"></span></div>
                                    <div class="round"><a class="d-flex justify-content-center" type="button"><img
                                                class="w-100 ml-2" alt="Stripe"
                                                src="/static/img/Discount/stripe-logo.png"><img
                                                class="w-100 ml-2 pl-2 border-left" alt="Visa"
                                                :src="require('../../../../assets/img/visa-logo.png')"></a></div>
                                    <div> -->
                                    <div id="paypal-btn"
                                        class="paypal-buttons paypal-buttons-context-iframe paypal-buttons-label-unknown paypal-buttons-layout-vertical"
                                        data-paypal-smart-button-version="5.0.395"
                                        style="height: 35px; transition: all 0.2s ease-in-out 0s;">
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
// import { loadScript } from "@paypal/paypal-js";
// import 'dotenv/config'
export default {
    components: {
    },
    computed: {
        price: function () {
            return this.$store.state.price
        },
    },  
    data() {
        return {
            paypal: null,
            paypal_buttons: null
        }
    },
    async mounted() {
        const _this = this;
        // try {
        //     this.paypal = await loadScript({ clientId: process.env.CLIENT_ID });
        // } catch (error) {
        //     console.error("failed to load the PayPal JS SDK script", error);
        // }

      
                const intent = 'capture';
                this.paypal_buttons = paypal.Buttons({ // https://developer.paypal.com/sdk/js/reference
                    onClick: (data) => { // https://developer.paypal.com/sdk/js/reference/#link-oninitonclick
                        //Custom JS here
                    },
                    style: { //https://developer.paypal.com/sdk/js/reference/#link-style
                        shape: 'rect',
                        color: 'gold',
                        layout: 'vertical',
                        label: 'paypal'
                    },

                    createOrder: function (data, actions) { //https://developer.paypal.com/docs/api/orders/v2/#orders_create
                        console.log(2222, _this)
                        return _this.$http.post("/create_order", 
                            { "intent": intent, price: _this.price }
                        )
                            .then((order) => { 
                                if (order.data) {
                                    return order.data.id
                                }});
                    },

                    onApprove: function (data, actions) {
                        let order_id = data.orderID;
                        console.log(22222)
                        return _this.$http.post("/complete_order", {
                                "intent": intent,
                                "order_id": order_id                            
                        })
                            .then((order_details) => {
                                console.log(order_details); //https://developer.paypal.com/docs/api/orders/v2/#orders_capture!c=201&path=create_time&t=response
                                let intent_object = intent === "authorize" ? "authorizations" : "captures";
                                if (order_details.data.status == 'COMPLETED') {
                                    _this.$message({
                                        message: '购买成功',
                                        type: 'success'
                                    });
                                    // paypal_buttons.close();
                                    _this.$router.push('/index');
                                }                                
                                //Custom Successful Message
                                // alerts.innerHTML = `<div class=\'ms-alert ms-action\'>Thank you ` + order_details.payer.name.given_name + ` ` + order_details.payer.name.surname + ` for your payment of ` + order_details.purchase_units[0].payments[intent_object][0].amount.value + ` ` + order_details.purchase_units[0].payments[intent_object][0].amount.currency_code + `!</div>`;

                                //Close out the PayPal buttons that were rendered
                                
                            })
                            .catch((error) => {
                                console.log(error);
                                // alerts.innerHTML = `<div class="ms-alert ms-action2 ms-small"><span class="ms-close"></span><p>An Error Ocurred!</p>  </div>`;
                            });
                    },

                    onCancel: function (data) {
                        // alerts.innerHTML = `<div class="ms-alert ms-action2 ms-small"><span class="ms-close"></span><p>Order cancelled!</p>  </div>`;
                    },

                    onError: function (err) {
                        console.log(err);
                    }
                }).render("#paypal-btn");
            
        
    }
}
</script>

<style scoped>
#paypal-btn :first-child {
    height: 0px!important;
}
.purchase-container {
    background-color: #1155a0;
    font-family: Poppins;
}

.pb-5,
.py-5 {
    padding-bottom: 3rem !important;
}

.pt-5,
.py-5 {
    padding-top: 3rem !important;
}

.pl-3,
.px-3 {
    padding-left: 1rem !important;
}

.pr-3,
.px-3 {
    padding-right: 1rem !important;
}

.purchase-container .order-summary-form,
.purchase-container .payment-success-form,
.purchase-container .purchase-form {
    max-width: 365px;
    margin: 0 auto;
}

.purchase-container .order-summary-form .purchase-header,
.purchase-container .payment-success-form .purchase-header,
.purchase-container .purchase-form .purchase-header {
    background: #1675dd;
    font-size: 16px;
    color: #fff;
    text-align: center;
    padding: 28px 40px;
    border-radius: 8px 8px 0 0;
}

.purchase-container .order-summary-form .purchase-body,
.purchase-container .payment-success-form .purchase-body,
.purchase-container .purchase-form .purchase-body {
    border-radius: 0 0 8px 8px;
    background-color: #fff;
    padding: 30px 40px;
}

.purchase-container .order-summary-form .purchase-body .purchase-label,
.purchase-container .payment-success-form .purchase-body .purchase-label,
.purchase-container .purchase-form .purchase-body .purchase-label {
    font-size: 20px;
    font-weight: 600;
}

.purchase-container .order-summary-form .purchase-body .purchase-desc,
.purchase-container .payment-success-form .purchase-body .purchase-desc,
.purchase-container .purchase-form .purchase-body .purchase-desc {
    font-size: 14px;
    font-weight: 400;
    color: #868686;
}

.mb-2,
.my-2 {
    margin-bottom: 0.5rem !important;
}

.purchase-container .order-summary-form .purchase-body .divider,
.purchase-container .payment-success-form .purchase-body .divider,
.purchase-container .purchase-form .purchase-body .divider {
    height: 1px;
    width: 100%;
    background: #d4d4d4;
}

.mb-2,
.my-2 {
    margin-bottom: 0.5rem !important;
}

.mt-2,
.my-2 {
    margin-top: 0.5rem !important;
}

.purchase-container .order-summary-form .purchase-body .purchase-label,
.purchase-container .payment-success-form .purchase-body .purchase-label,
.purchase-container .purchase-form .purchase-body .purchase-label {
    font-size: 20px;
    font-weight: 600;
}

.align-items-center {
    align-items: center !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

.d-flex {
    display: flex !important;
}

.purchase-container .order-summary-form .purchase-body .purchase-desc,
.purchase-container .payment-success-form .purchase-body .purchase-desc,
.purchase-container .purchase-form .purchase-body .purchase-desc {
    font-size: 14px;
    font-weight: 400;
    color: #868686;
}

.mb-2,
.my-2 {
    margin-bottom: 0.5rem !important;
}

.purchase-container .order-summary-form .purchase-body .link,
.purchase-container .payment-success-form .purchase-body .link,
.purchase-container .purchase-form .purchase-body .link {
    font-size: 12px;
}

.link {
    color: #1675dd !important;
    cursor: pointer;
    font-weight: 400;
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

.purchase-container .order-summary-form .purchase-body .link i,
.purchase-container .payment-success-form .purchase-body .link i,
.purchase-container .purchase-form .purchase-body .link i {
    font-size: 8px;
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

.ml-2,
.mx-2 {
    margin-left: 0.5rem !important;
}

.text-center {
    text-align: center;
}

.text-center {
    text-align: center !important;
}

.mb-3,
.my-3 {
    margin-bottom: 1rem !important;
}

.mt-3,
.my-3 {
    margin-top: 1rem !important;
}

.align-items-center {
    align-items: center !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

.d-flex {
    display: flex !important;
}

.purchase-container .round {
    border: 2px solid #2c90ff;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    z-index: 1;
}

.purchase-container .payment-desc {
    color: #898989;
    font-size: 12px;
}

.pl-2,
.px-2 {
    padding-left: 0.5rem !important;
}

.pr-2,
.px-2 {
    padding-right: 0.5rem !important;
}

.mt-3,
.my-3 {
    margin-top: 1rem !important;
}

.align-items-center {
    align-items: center !important;
}

.justify-content-center {
    justify-content: center !important;
}

.d-flex {
    display: flex !important;
}

.purchase-container .payment-desc .circle {
    background-color: #0dbc29;
    border-radius: 100%;
    min-width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mr-2,
.mx-2 {
    margin-right: 0.5rem !important;
}

.purchase-container .payment-desc .circle i {
    font-size: 17px;
    color: #fff;
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

.purchase-container .round a {
    margin: 12px;
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
    cursor: pointer;
}

.justify-content-center {
    justify-content: center !important;
}

.d-flex {
    display: flex !important;
}

[type=button],
[type=reset],
[type=submit],
button {
    -webkit-appearance: button;
}

a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}

#zoid-paypal-buttons-uid_7ae895716b_mdq6ntu6mdu {
    position: relative;
    display: inline-block;
    width: 100%;
    min-height: 35px;
    min-width: 200px;
    font-size: 0;
}
</style>
<template>
    <div class="main-container-body">
        <div class="children">
            <div class="register-container">
                <el-form :model="form" :rules="rules" ref="form" label-position="top">
                    <div class="register col-md-6 col-sm-12">
                        <!-- <div id="google-register" class="text-center"><button type="button" class="w-100"
                                style="background-color: rgb(255, 255, 255); display: inline-flex; align-items: center; color: rgba(0, 0, 0, 0.54); box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px; padding: 0px; border-radius: 2px; border: 1px solid transparent; font-size: 14px; font-weight: 500; font-family: Roboto, sans-serif;">
                                <div
                                    style="margin-right: 10px; background: rgb(255, 255, 255); padding: 10px; border-radius: 2px;">
                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#000" fill-rule="evenodd">
                                            <path
                                                d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                                fill="#EA4335"></path>
                                            <path
                                                d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                                fill="#4285F4"></path>
                                            <path
                                                d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                                fill="#FBBC05"></path>
                                            <path
                                                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                                fill="#34A853"></path>
                                            <path fill="none" d="M0 0h18v18H0z"></path>
                                        </g>
                                    </svg>
                                </div><span style="padding: 10px 10px 10px 0px; font-weight: 500;">Sign up with
                                    Google</span>
                            </button></div>
                        <div class="w-100 text-center mt-3 mb-3">
                            <div class="signup-with"><span>OR</span></div>
                        </div> -->
                        <p class="heading mb-3 text-center">Register</p>
                        <el-form-item class="form-group common" prop="username"
                            :error="getErrorForField('username', errors)">
                            <el-input v-model="form.username" placeholder="Your Name" 
                                ref="loginInput"></el-input>
                        </el-form-item>
                        <el-form-item class="form-group common" prop="email" :error="getErrorForField('email', errors)">
                            <el-input v-model="form.email" placeholder="Email address" 
                                ref="loginInput"></el-input>
                        </el-form-item>
                        <el-form-item class="form-group common" :error="getErrorForField('telephone', errors)">
                            <el-input v-model="form.telephone" placeholder="Telephone" 
                                ref="loginInput"></el-input>
                        </el-form-item>
                        <el-form-item class="form-group common" prop="password"
                            :error="getErrorForField('password', errors)">
                            <el-input v-model="form.password" placeholder="Password" 
                                ref="loginInput"></el-input>
                        </el-form-item>
                        <el-form-item class="form-group common" prop="confirmPassword"
                            :error="getErrorForField('confirmPassword', errors)">
                            <el-input v-model="form.confirmPassword" placeholder="Confirm password"
                                 ref="loginInput"></el-input>
                        </el-form-item>
                        <!-- <div class="form-group common"><input name="email" id="form-control" class="form-control"
                            type="text" placeholder="Email address" v-model="form.email"></div>
                    <div class="form-group phone-block">
                        <div class="d-flex mb-1">
                            <div class="PhoneInput">
                                <div class="PhoneInputCountry">
                                    <select aria-label="Phone number country"
                                        class="PhoneInputCountrySelect">
                                        <option value="ZZ">International</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AC">Ascension Island</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Cote d'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FM">Federated States of Micronesia</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="VA">Holy See (Vatican City State)</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="XK">Kosovo</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Laos</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="MD">Moldova</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="KP">North Korea</option>
                                        <option value="MK">North Macedonia</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestine</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Reunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russia</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthélemy</option>
                                        <option value="SH">Saint Helena</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin (French Part)</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="KR">South Korea</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syria</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TA">Tristan da Cunha</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.S.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                    <div aria-hidden="true" class="PhoneInputCountryIcon PhoneInputCountryIcon--border">
                                        <img class="PhoneInputCountryIconImg" alt="United States"
                                            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg">
                                    </div>
                                    <div class="PhoneInputCountrySelectArrow"></div>
                                </div><input type="tel" autocomplete="tel" id="form-control" showcountryselect="true"
                                    placeholder="Enter your phone" class="PhoneInputInput" v-model="form.telephone">
                            </div>
                        </div>
                    </div> -->
                        <!-- <div class="form-group common"><input name="telephone" id="telephone" class="form-control"
                            type="telephone" placeholder="Telephone" v-model="form.telephone"></div>
                    <div class="form-group common"><input name="password" id="password" class="form-control"
                            type="password" placeholder="Password" v-model="form.password"></div>
                    <div class="form-group common"><input name="confirmPassword" id="confirmPassword"
                            class="err form-control" type="password" placeholder="Confirm password" v-model="form.confirmPassword"></div> -->
                        <!-- <div class="interests mb-2">
                        <div class="font-weight-bold common">To give you the best suggestions, select your interest
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[1]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Marketing</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[2]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Education</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[3]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Government</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[4]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>E-Commerce</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[5]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>F&amp;B</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[6]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Culture</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[7]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Events</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[8]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Manufacturing</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[9]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Retail</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[10]"
                                        class="mr-1 pointer" type="checkbox" value="" style="width: 15px;"><span>Real
                                        estate</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[11]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Hospitality</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[12]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Office</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[13]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Logistics</span></div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 mb-1 common">
                                <div class="d-flex align-items-center pointer"><input name="interest[14]"
                                        class="mr-1 pointer" type="checkbox" value=""
                                        style="width: 15px;"><span>Leisure</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <div class="agreement common">
                            <div><input name="agreeAndConfirm" class="mr-1 pointer" type="checkbox" value="false"
                                    style="width: 15px;">I agree to receive alerts, product updates, and special offers
                                via email, as described in the <a class="link" target="_blank"
                                    href="/terms-and-conditions">Terms and Conditions</a>.</div>
                            <p class="agreement-note mt-2">Email preferences may be changed any time under My Account.
                            </p><span class="err">Required field</span>
                        </div>
                    </div> -->
                        <button id="email-register" class="btn btn-lg btn-success btn-block d-flex justify-content-center"
                            @click="register('form', $event)">Register</button>
                        <div class="form-group mt-3 text-center common"><span class="mr-2">Already have an account?</span><a
                                class="link" href="/login">Log In</a></div>
                        <!-- <div class="common" style="color: darkgrey;">By signing up, you agree to the Terms and Conditions
                            and Privacy Policy.</div> -->
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            form: {
                username: '', password: '', email: '', telephone: ''
            },
            rules: {
                email: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
                password: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
                telephone: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
                username: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
                email: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
                confirmPassword: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
            },
            formProcessing: false,
            errors: []
        }
    },
    methods: {
        getErrorForField(field, errors) {
            console.log(field, errors)
            if (!errors && !errors.length) {
                return false
            }
            let filtered = errors.filter(error => {
                return error.path[0] === field
            })
            if (filtered.length) {
                return filtered[0].message
            }
        },
        register(formName, e) {
            e.preventDefault();
            this.$refs[formName].validate(valid => {
                if (!valid) {
                    return false
                }
                this.formProcessing = true;

                this.$http.post('/register', {
                    username: this.form.username, password: this.form.password, email: this.form.email, telephone: this.form.telephone
                }).then(r => {
                    if (r.data.code == 200) {
                        // 注册成功，跳转到主页
                        this.$router.push('/login');
                        this.formProcessing = false;
                        this.$message(
                            {
                                message: '注册成功',
                                type: 'success'
                            });
                    } else {
                        this.$message.error(r.data.msg);
                    }
                }).catch(e => {
                    console.log('注册失败', JSON.stringify(e));
                    this.$message.error('注册失败');
                    this.formProcessing = false;
                })
            })

        }
    }
}
</script>

<style scoped>
.main-container-body {
    min-height: calc(100vh - 175px);
}

.children {
    z-index: 2;
}

.register-container {
    padding: 16px;
}

.register {
    margin: 50px auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    max-width: 600px;
}

.register .heading {
    font-family: Metropolis;
    font-size: 22px;
    font-weight: 600;
}

.register .common {
    font-family: Metropolis;
}

.register .form-group {
    background: none;
}

.register #confirmPassword,
.register #email,
.register #form-control,
.register #password {
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    padding: 20px 16px;
    font-size: 14px;
    outline: none;
}

.register .common .err {
    margin-top: 8px;
}

.form-control,
.form-control:focus {
    color: #495057;
    background-color: #fff;
}
</style>
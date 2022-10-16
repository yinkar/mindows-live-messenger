<script setup>
import { ref } from 'vue';
import Panel from './Panel.vue';

const isLogin = ref(false);

function login(e) {
  isLogin.value = true;
}

function cancelLogin(e) {
  isLogin.value = false;
}
</script>

<template>
  <div class="login" :class="{ 'sign-in': isLogin }">
    <Panel>
      <div class="avatar">
        <img src="../assets/default-avatar.svg" alt="Avatar">
      </div>

      <div class="sign-in-animation">      
        <img src="../assets/signing-in.gif" alt="Sign in" style="position: absolute; left: 190px; top: 620px; transform: scale(1.4, 1.4)">
      </div>

      <div class="login-box">
        <div class="email">
          <label for="email" class="email-label"><ins>E</ins>-mail address:</label>
          <div>
            <input type="text" class="input email-input" :disabled="isLogin">
          </div>
        </div>

        <div class="password">
          <label for="password" class="password-label">Pass<ins>w</ins>ord:</label>
          <div>
            <input type="password" class="input password-input" :disabled="isLogin">
          </div>
        </div>

        <div class="status">
          <label for="status" class="status-label">Stat<ins>u</ins>s:</label>
          <div>
            <select name="status" class="input status-input" :disabled="isLogin">
              <option value="online">Online</option>
              <option value="online">Busy</option>
              <option value="online">Offline</option>
            </select>
          </div>
        </div>
      </div>

      <div class="login-options">
        <div class="remember-me">
          <div class="remember-me-check">
            <label class="check">
              <input type="checkbox" name="remember-me" id="remember-me">
              <span class="checkmark"></span>
            </label>
          </div>
          <label for="remember-me" class="remember-me-label">Remem<ins>b</ins>er me</label>
        </div>
        
        <div class="remember-my-password">
          <div class="remember-my-password-check">
            <label class="check">
              <input type="checkbox" name="remember-my-password" id="remember-my-password">
              <span class="checkmark"></span>
            </label>
          </div>
          <label for="remember-my-password" class="remember-my-password-label"><ins>R</ins>emember my password</label>
        </div>
        
        <div class="sign-in-automatically">
          <div class="sign-in-automatically-check">
            <label class="check">
              <input type="checkbox" name="sign-in-automatically" id="sign-in-automatically">
              <span class="checkmark"></span>
            </label>
          </div>
          <label for="sign-in-automatically" class="sign-in-automatically-label">Sig<ins>n</ins> me in automatically</label>
        </div>

      </div>

      <div class="sign-in-button">
        <button @click="login" v-if="!isLogin">
          <ins>S</ins>ign in
        </button>
        
        <button @click="cancelLogin" v-else>
          Ca<ins>n</ins>cel
        </button>
      </div>

      <div class="links">
        <div>
          <a href="javascript:;">Forgot your password?</a>
        </div>
        <div>
          <a href="javascript:;">Service status</a>
        </div>
        <div>
          <a href="javascript:;">Sign up for a Windows Live ID</a>
        </div>
      </div>

      <div class="bottom">
        <div class="info">
          <div class="info-icon">
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_i_562_18)">
              <path d="M23.9932 2.26122C23.3495 1.61745 14.6049 1.99298 10.3131 2.26122C12.7273 4.40714 17.5555 9.1818 17.5555 11.1131C17.5555 13.5273 17.5555 15.1367 14.3367 24.7932C29.6262 4.6754 24.798 3.06593 23.9932 2.26122Z" fill="#F3FAFA"/>
              </g>
              <g filter="url(#filter1_i_562_18)">
              <path d="M7.89902 0.296387C6.61148 0.296387 4.68016 6.7341 3.87545 9.95295H10.3132V6.7341L16.7509 13.1718L10.3132 22.0237V16.3907C7.63078 16.3907 2.10508 16.5516 1.46131 17.1954C0.656594 18.0001 -0.14812 19.6095 1.46131 21.2189C3.07074 22.8284 9.50845 25.2425 13.532 26.0472C19.165 18.8048 22.3839 8.34352 19.9697 5.12467C17.5556 1.90581 9.50845 0.296387 7.89902 0.296387Z" fill="url(#paint0_radial_562_18)"/>
              </g>
              <defs>
              <filter id="filter0_i_562_18" x="10.3131" y="1.90576" width="15.0354" height="22.8875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="1.60943"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_562_18"/>
              </filter>
              <filter id="filter1_i_562_18" x="0.532104" y="0.296387" width="20.2485" height="25.7507" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="1.60943"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_562_18"/>
              </filter>
              <radialGradient id="paint0_radial_562_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.0943 1.90581) rotate(66.8014) scale(12.257 9.63804)">
              <stop stop-color="#8FB5F4"/>
              <stop offset="1" stop-color="#1D6FC6"/>
              </radialGradient>
              </defs>
            </svg>

          </div>

          <div class="info-text">
            Windows Live ID
          </div>
        </div>
        <div class="handle">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.279541 16.0709H2.69368V13.6567" stroke="#9BA2A4" stroke-width="1.60943"/>
            <path d="M6.71729 16.0709H9.13143V13.6567" stroke="#9BA2A4" stroke-width="1.60943"/>
            <path d="M13.155 16.0709H15.5692V13.6567" stroke="#9BA2A4" stroke-width="1.60943"/>
            <path d="M13.155 9.63314H15.5692V7.21899" stroke="#9BA2A4" stroke-width="1.60943"/>
            <path d="M13.155 3.19539H15.5692V0.78125" stroke="#9BA2A4" stroke-width="1.60943"/>
            <path d="M6.71729 9.63314H9.13143V7.21899" stroke="#9BA2A4" stroke-width="1.60943"/>
          </svg>

        </div>
      </div>

    </Panel>
  </div>
</template>

<style scoped>
  .avatar {
    box-sizing: border-box;
    position: absolute;
    width: 164.16px;
    height: 164.16px;
    left: 140.02px;
    top: 99.78px;
    padding: 3px 2px;
    background: #FFFBFC;
    border: 1.60943px solid #D9DAD5;
    pointer-events: none;
  }
  
  .email-label {
    position: absolute;
    width: 202.79px;
    height: 17.7px;
    left: 40.24px;
    top: 291.31px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 17.7037px;
    line-height: 20px;

    color: #283444;
  }

  .email-input {
    box-sizing: border-box;

    position: absolute;
    width: 363.73px;
    height: 33.8px;
    left: 40.24px;
    top: 315.45px;

    background: #FFFFFF;
    border: 1.60943px solid #B3B8BC;
  }
  
  .password-label {
    position: absolute;
    width: 202.79px;
    height: 17.7px;
    left: 40.24px;
    top: 362.12px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 17.7037px;
    line-height: 20px;

    color: #283444;
  }

  .password-input {
    box-sizing: border-box;

    position: absolute;
    width: 363.73px;
    height: 33.8px;
    left: 40.24px;
    top: 386.26px;

    background: #FFFFFF;
    border: 1.60943px solid #B3B8BC;
  }
  
  .status-label {
    position: absolute;
    width: 202.79px;
    height: 20px;
    left: 40.24px;
    top: 434.55px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 17.7037px;
    line-height: 22px;

    color: #283444;
  }

  .status-input {
    position: absolute;
    width: 80px;
    height: 22px;
    left: 100.24px;
    top: 434.55px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 17.7037px;
    line-height: 20px;

    color: #283444;

    border: none;
    background: none;
  }

  .sign-in-animation {
    display: none;
  }

  .login.sign-in .login-options {
    display: none;
  }

  .login.sign-in .login-box {
    opacity: .5;
  }

  .login.sign-in .sign-in-animation {
    display: block;
  }

  .login-options input {
    display: none;
    box-sizing: border-box;
  }

  .check {
    display: block;
    cursor: pointer;
    user-select: none;
  }

  .check input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
    display: none;
  }

  .check:hover input ~ .checkmark {
    filter: brightness(.9);
  }

  .check .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMS4wNDA0MyIgeT0iMS40MzA5MyIgd2lkdGg9IjE5LjMxMzEiIGhlaWdodD0iMTkuMzEzMSIgZmlsbD0iI0Y3RjlGOCIgc3Ryb2tlPSIjODg4OThCIiBzdHJva2Utd2lkdGg9IjEuNjA5NDMiLz4KPHJlY3QgeD0iNC4yNTkzIiB5PSI0LjY0OTY4IiB3aWR0aD0iMTIuODc1NCIgaGVpZ2h0PSIxMi44NzU0IiBmaWxsPSIjRjFGMUVGIiBzdHJva2U9IiNEQURBRDgiIHN0cm9rZS13aWR0aD0iMS42MDk0MyIvPgo8L3N2Zz4K);
    transition: 50ms ease-in-out filter;
  }

  .check input:checked ~ .checkmark {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMS4wNDA0MyIgeT0iMS40MzA5MyIgd2lkdGg9IjE5LjMxMzEiIGhlaWdodD0iMTkuMzEzMSIgZmlsbD0iI0Y3RjlGOCIgc3Ryb2tlPSIjODg4OThCIiBzdHJva2Utd2lkdGg9IjEuNjA5NDMiLz4KPHJlY3QgeD0iNC4yNTkzIiB5PSI0LjY0OTY4IiB3aWR0aD0iMTIuODc1NCIgaGVpZ2h0PSIxMi44NzU0IiBmaWxsPSIjRjFGMUVGIiBzdHJva2U9IiNEQURBRDgiIHN0cm9rZS13aWR0aD0iMS42MDk0MyIvPgo8cGF0aCBkPSJNMTkuNSAzVjMuNUMxNy45Njc3IDQuNzg0NDQgMTYuNjU5IDYuMzc3ODkgMTQuNzgzIDkuMDUwMUMxMi45MDcgMTEuNzIyMyAxMS40NzU2IDE0LjIxODkgMTAuNDg3OCAxNi41NDAxTDkuNjkzMTkgMTcuMTM4NEM5LjAzNDExIDE3LjY0ODYgOC41ODYzNiAxOC4wMjc0IDguMzUwMzUgMTguMjc0OUM4LjI1NzAyIDE3LjkwMDEgOC4wNTMyNCAxNy4yODU4IDcuNzM4NjIgMTYuNDMyMUw3LjQzNzM0IDE1LjY1NDZDNy4wMDc5IDE0LjUzNzggNi42MDg3MSAxMy43MTI0IDYuMjM5OTYgMTMuMTc3N0M1Ljg3MTIyIDEyLjY0MzEgNS40NTc5IDEyLjI4ODIgNSAxMi4xMTMxQzUuNzcyOTEgMTEuMTk4NSA2LjQ4MTc1IDEwLjc0MTUgNy4xMjYzIDEwLjc0MTVDNy42Nzc1MyAxMC43NDE1IDguMjg5NjUgMTEuNTc3MSA4Ljk2Mjg3IDEzLjI0OEw5LjI5NTU5IDE0LjA4NzZDMTAuNTA1MSAxMS44MTQxIDEyLjA1OTEgOS42MDQ5NSAxMy45NTY1IDcuNDU4NzVDMTUuODU0IDUuMzEyNTUgMTcuNjg4MyA0LjE0OTE2IDE5LjUgM1oiIGZpbGw9IiMyMDU4QTAiLz4KPC9zdmc+Cg==);
  }

  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkmark .checkmark::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
  }

  input[type="text"],
  input[type="password"] {
    font-family: sans-serif;
    font-size: 1.2rem;
  }
  
  .remember-me-check {
    position: absolute;
    width: 20.92px;
    height: 20.92px;
    left: 40.24px;
    top: 516.63px;
  }

  .remember-me-label {
    position: absolute;
    width: 119.1px;
    height: 17.7px;
    left: 65.99px;
    top: 516.63px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 17.7037px;
    line-height: 20px;

    color: #283444;
  }

  .remember-my-password-check {
    position: absolute;
    width: 20.92px;
    height: 20.92px;
    left: 40.24px;
    top: 587.44px;
  }

  .remember-my-password-label {
    position: absolute;
    width: 207.62px;
    height: 19.31px;
    left: 65.99px;
    top: 587.44px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 17.7037px;
    line-height: 20px;

    color: #283444;
  }

.sign-in-automatically-check {
  position: absolute;
  width: 20.92px;
  height: 20.92px;
  left: 40.24px;
  top: 626.07px;
}

.sign-in-automatically-label {
  position: absolute;
  width: 202.79px;
  height: 17.7px;
  left: 65.99px;
  top: 626.07px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 17.7037px;
  line-height: 20px;

  color: #283444;
}

.sign-in-button button {
  box-sizing: border-box;

  position: absolute;
  width: 112.66px;
  height: 35.41px;
  left: 165.77px;
  top: 722.63px;

  background: linear-gradient(180deg, #E5E8ED 0%, #CDE8F1 69.27%, #D9E8ED 100%);
  border: 1.60943px solid #F5F9FA;
  box-shadow: 0px 0px 1.60943px #707070, inset 0px -3.21886px 1.60943px rgba(0, 0, 0, 0.25);
  border-radius: 1.60943px;
  font-size: 17.7px;
  transition: 20ms ease-in-out filter;

  cursor: pointer;
}

.sign-in-button button:hover {
  filter: brightness(0.9);
}

.links > div:nth-child(1) {
  position: absolute;
  width: 209.23px;
  height: 22.53px;
  left: 43.45px;
  top: 803.1px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 17.7037px;
  line-height: 20px;
}

.links > div:nth-child(2) {
  position: absolute;
  width: 209.23px;
  height: 22.53px;
  left: 43.45px;
  top: 830.46px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 17.7037px;
  line-height: 20px;
}

.links > div:nth-child(3) {
  position: absolute;
  width: 236.59px;
  height: 22.53px;
  left: 43.45px;
  top: 856.22px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 17.7037px;
  line-height: 20px;
}

.links > div a {
  color: #1688DD;
  text-decoration: none;
  transition: 50ms ease-in-out color;
}

.links > div a:hover {
  color: #1688DDaa;
  text-decoration: none;
}

.handle {
  position: absolute;
  width: 15.29px;
  height: 15.29px;
  left: 421.28px;
  top: 950.78px;
}

.info-icon {
  position: absolute;
  width: 24.82px;
  height: 25.75px;
  left: 9.53px;
  top: 938.3px;
}

.info-text {
  position: absolute;
  width: 135.19px;
  height: 19.31px;
  left: 37.02px;
  top: 939.91px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 17.7037px;
  line-height: 20px;

  color: #656D62;
}

</style>
